"use client";

import useUser from "@/hooks/states/useUser";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

type PrivateRouteProps = {
  roles?: string[];
  children: ReactNode;
};

const AuthWrapper: React.FC<PrivateRouteProps> = ({ roles = [], children }) => {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const isAuthenticated = Boolean(user?.is_authenticated || user?.info?._id);
  const isAuthorized =
    roles.length === 0 || roles.includes(user.info?.role ?? "");

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(`/signin?from=${encodeURIComponent(pathname)}`);
      return;
    }
    if (!isAuthorized) {
      router.replace("/profile");
    }
  }, [isAuthenticated, isAuthorized, pathname, router]);

  if (!isAuthenticated || !isAuthorized) {
    return null;
  }

  return <>{children}</>;
};

export default AuthWrapper;
