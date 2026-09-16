import { SEO } from "@/config/seo";
import { SETTING_COOKIE } from "@/lib/cookies";
import { getServerSetting } from "@/lib/server-cookies";
import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
};

// Resolves the "system" theme (and covers the very first visit, before any
// setting cookie exists) client-side, before paint, so there is no flash of
// the wrong theme. Anything the server already resolved (explicit
// light/dark/semi-dark, dir, lang) is applied for free via SSR below and
// this script leaves it alone.
const themeInitScript = `
(function () {
  try {
    var root = document.documentElement;
    if (root.classList.contains("light") || root.classList.contains("dark") || root.classList.contains("semi-dark")) {
      return;
    }
    var match = document.cookie.match(new RegExp("(?:^|; )${SETTING_COOKIE}=([^;]*)"));
    var raw = match ? decodeURIComponent(match[1]) : null;
    var setting = raw ? JSON.parse(raw) : null;
    var theme = setting && setting.theme ? setting.theme : "system";
    var mode = theme;
    if (theme === "system") {
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      mode = prefersDark ? "dark" : "light";
    }
    root.classList.remove("light", "dark", "semi-dark");
    root.classList.add(mode);
  } catch (e) {}
})();
`;

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const setting = await getServerSetting();
  const resolvedThemeClass =
    setting.theme === "light" ||
    setting.theme === "dark" ||
    setting.theme === "semi-dark"
      ? setting.theme
      : undefined;

  return (
    <html
      lang={setting.language || "en"}
      dir={setting.direction || "ltr"}
      className={resolvedThemeClass}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
