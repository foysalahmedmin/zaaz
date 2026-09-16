import { SETTING_COOKIE, SETTING_COOKIE_OPTIONS } from "@/lib/cookies";
import type { TSettingState } from "@/types/state.type";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "cookies-next/client";

const defaultSetting: TSettingState = {
  theme: "system",
  direction: "ltr",
  language: "en",
  sidebar: "expanded",
  header: "expanded",
  layout: "vertical",
};

const getInitialSetting = (): TSettingState => {
  if (typeof window === "undefined") {
    return defaultSetting;
  }
  try {
    const setting = getCookie(SETTING_COOKIE);
    return setting ? JSON.parse(setting) : defaultSetting;
  } catch (error) {
    console.error("Error parsing setting from cookies", error);
    return defaultSetting;
  }
};

const persistSetting = (setting: TSettingState) => {
  setCookie(SETTING_COOKIE, JSON.stringify(setting), SETTING_COOKIE_OPTIONS);
};

const initialState: TSettingState = getInitialSetting();

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSetting: (state, action: PayloadAction<TSettingState>) => {
      if (action.payload) {
        const setting = { ...state, ...action.payload };
        persistSetting(setting);
        return setting;
      }
      return state;
    },
    updateTheme: (state, action: PayloadAction<TSettingState["theme"]>) => {
      state.theme = action.payload;
      persistSetting(state);
    },
    updateDirection: (
      state,
      action: PayloadAction<TSettingState["direction"]>,
    ) => {
      state.direction = action.payload;
      persistSetting(state);
    },
    updateLanguage: (
      state,
      action: PayloadAction<TSettingState["language"]>,
    ) => {
      state.language = action.payload;
      persistSetting(state);
    },
    updateSidebar: (state, action: PayloadAction<TSettingState["sidebar"]>) => {
      state.sidebar = action.payload;
      persistSetting(state);
    },
    updateHeader: (state, action: PayloadAction<TSettingState["header"]>) => {
      state.header = action.payload;
      persistSetting(state);
    },
    updateLayout: (state, action: PayloadAction<TSettingState["layout"]>) => {
      state.layout = action.payload;
      persistSetting(state);
    },
    resetSetting: () => {
      persistSetting(defaultSetting);
      return defaultSetting;
    },
  },
});

export const {
  setSetting,
  updateTheme,
  updateDirection,
  updateLanguage,
  updateSidebar,
  updateHeader,
  updateLayout,
  resetSetting,
} = settingSlice.actions;

export default settingSlice.reducer;
