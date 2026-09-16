import { AUTH_COOKIE_OPTIONS, USER_COOKIE } from "@/lib/cookies";
import type { TUserState } from "@/types/state.type";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, getCookie, setCookie } from "cookies-next/client";

const getInitialUser = (): TUserState => {
  if (typeof window === "undefined") {
    return { is_authenticated: false };
  }
  try {
    const user = getCookie(USER_COOKIE);
    return user ? JSON.parse(user) : { is_authenticated: false };
  } catch (error) {
    console.error("Error parsing user from cookies", error);
    return { is_authenticated: false };
  }
};

const initialState: TUserState = getInitialUser();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUserState>) => {
      const user = action.payload;
      if (user?.token) {
        const nextUser = { ...user, is_authenticated: true };
        setCookie(USER_COOKIE, JSON.stringify(nextUser), AUTH_COOKIE_OPTIONS);
        return nextUser;
      }
      return state;
    },
    clearUser: () => {
      deleteCookie(USER_COOKIE, { path: AUTH_COOKIE_OPTIONS.path });
      return { is_authenticated: false };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
