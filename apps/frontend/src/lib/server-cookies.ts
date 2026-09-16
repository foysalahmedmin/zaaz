import "server-only";

import { SETTING_COOKIE, USER_COOKIE } from "@/lib/cookies";
import type { TSettingState, TUserState } from "@/types/state.type";
import { cookies } from "next/headers";

const defaultSetting: TSettingState = {
  theme: "system",
  direction: "ltr",
  language: "en",
  sidebar: "expanded",
  header: "expanded",
  layout: "vertical",
};

export const getServerSetting = async (): Promise<TSettingState> => {
  const store = await cookies();
  const raw = store.get(SETTING_COOKIE)?.value;
  if (!raw) return defaultSetting;
  try {
    return { ...defaultSetting, ...JSON.parse(raw) };
  } catch {
    return defaultSetting;
  }
};

export const getServerUser = async (): Promise<TUserState | null> => {
  const store = await cookies();
  const raw = store.get(USER_COOKIE)?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as TUserState;
  } catch {
    return null;
  }
};

/** Bearer token for authenticated backend calls from Server Components/Actions/Route Handlers. */
export const getServerToken = async (): Promise<string | undefined> => {
  const user = await getServerUser();
  return user?.token;
};
