export const ENV = {
  app_url:
    process.env.NEXT_PUBLIC_APP_URL || "https://zaaz-server.vercel.app",
  api_url:
    process.env.NEXT_PUBLIC_API_URL || "https://zaaz-server.vercel.app",
  environment: process.env.NODE_ENV,
};
