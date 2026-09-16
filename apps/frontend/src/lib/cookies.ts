export const USER_COOKIE = "user";
export const SETTING_COOKIE = "setting";

const isProduction = process.env.NODE_ENV === "production";

export const AUTH_COOKIE_OPTIONS = {
  path: "/",
  sameSite: "lax" as const,
  secure: isProduction,
  maxAge: 60 * 60 * 24 * 30, // 30 days
};

export const SETTING_COOKIE_OPTIONS = {
  path: "/",
  sameSite: "lax" as const,
  secure: isProduction,
  maxAge: 60 * 60 * 24 * 365, // 1 year
};
