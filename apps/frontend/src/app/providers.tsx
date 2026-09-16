"use client";

import MenuApplier from "@/components/appliers/MenuApplier";
import NotificationApplier from "@/components/appliers/NotificationApplier";
import SettingApplier from "@/components/appliers/SettingApplier";
import ToastApplier from "@/components/appliers/ToastApplier";
import store from "@/redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
        >
          <MenuApplier />
          <SettingApplier />
          <ToastApplier />
          <NotificationApplier />
          {children}
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default Providers;
