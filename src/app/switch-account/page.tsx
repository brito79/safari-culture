"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Intermediate page for switching accounts
 * This page is used as the logout returnTo URL
 * It automatically redirects to login with prompt=login
 */
export default function SwitchAccountPage() {
  const router = useRouter();

  useEffect(() => {
    // Small delay to ensure logout is complete
    const timer = setTimeout(() => {
      // Redirect to login with prompt=login to force new credentials
      router.push("/auth/login?prompt=login&returnTo=/dashboard");
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 dark:from-neutral-900 dark:to-neutral-950">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sunset-600 mx-auto mb-4"></div>
        <p className="text-stone-600 dark:text-stone-300">
          Switching accounts...
        </p>
      </div>
    </div>
  );
}
