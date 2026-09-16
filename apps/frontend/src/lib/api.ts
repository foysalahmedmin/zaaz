import { ENV } from "@/config";
import { AUTH_COOKIE_OPTIONS, USER_COOKIE } from "@/lib/cookies";
import { refreshToken } from "@/services/auth.service";
import type { TUserState } from "@/types/state.type";
import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next/client";

let isRefreshing = false;

interface FailedRequest {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}

let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown, token: string | null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });
  failedQueue = [];
};

const api: AxiosInstance = axios.create({
  baseURL: ENV.api_url,
});

// ✅ Request Interceptor
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const userString = getCookie(USER_COOKIE);
  let user: TUserState | null = null;

  try {
    user = userString ? (JSON.parse(userString) as TUserState) : null;
  } catch (error) {
    console.error("Error parsing user token", error);
  }

  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

// ✅ Response Interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError): Promise<AxiosResponse | never> => {
    if (error.response?.status === 403) {
      console.warn("403 Forbidden: Logging out...");
      deleteCookie(USER_COOKIE, { path: AUTH_COOKIE_OPTIONS.path });
      window.location.href = "/signin";
      return Promise.reject(error);
    }

    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (originalRequest.url === "/api/auth/refresh-token") {
      console.warn("Refresh token request failed. Logging out...");
      deleteCookie(USER_COOKIE, { path: AUTH_COOKIE_OPTIONS.path });
      window.location.href = "/signin";
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      console.log("401 Unauthorized: Attempting to refresh token...");
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(api(originalRequest));
            },
            reject,
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await refreshToken();

        if (!data?.token) {
          throw new Error("No new token returned");
        }

        console.log("Token refreshed successfully.");
        setCookie(
          USER_COOKIE,
          JSON.stringify({ is_authenticated: true, ...data }),
          AUTH_COOKIE_OPTIONS,
        );

        api.defaults.headers.Authorization = `Bearer ${data?.token}`;
        processQueue(null, `${data?.token}`);

        return api(originalRequest);
      } catch (error: unknown) {
        console.error("Token refresh failed. Logging out...", error);
        processQueue(error, null);
        deleteCookie(USER_COOKIE, { path: AUTH_COOKIE_OPTIONS.path });
        window.location.href = "/signin";
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;
