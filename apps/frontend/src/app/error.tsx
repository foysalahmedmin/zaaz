"use client";

import { Button } from "@/components/ui/Button";
import { ENV } from "@/config";
import Link from "next/link";
import { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-background flex min-h-screen items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-xl space-y-6 py-6 text-center">
        <h1 className="text-accent text-9xl font-extrabold">500</h1>

        <div>
          <h2 className="text-muted-foreground text-xl font-semibold uppercase md:text-2xl">
            Server Error
          </h2>
          <p className="text-muted-foreground">
            Something went wrong on our end. Please try again later.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Button asChild variant="default">
              Go Home
            </Button>
          </Link>
          <Button variant="outline" onClick={reset}>
            Try Again
          </Button>
        </div>

        {ENV.environment === "development" && (
          <div className="bg-muted mx-4 space-y-2 rounded p-4">
            <h3 className="text-sm font-semibold">
              Error Details (Development Only):
            </h3>
            <pre className="overflow-auto text-xs">
              {error.stack || error.message}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
};

export default ErrorPage;
