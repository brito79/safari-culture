"use client";

import { useState } from "react";
import { X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AccessDeniedProps {
  title?: string;
  message?: string;
  showLogout?: boolean;
  showHomeLink?: boolean;
  onClose?: () => void;
}

export default function AccessDenied({
  title = "Access Denied",
  message = "You don't have permission to access this page.",
  showLogout = true,
  showHomeLink = true,
  onClose,
}: AccessDeniedProps) {
  const [isVisible, setIsVisible] = useState(true);

  function handleSwitchAccount() {
    // Logout and redirect to switch-account page
    // The switch-account page will then redirect to login with prompt=login
    window.location.href = "/auth/logout?returnTo=" + encodeURIComponent(
      window.location.origin + "/switch-account"
    );
  }

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 dark:from-neutral-900 dark:to-neutral-950 p-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-2xl border border-stone-200 dark:border-stone-700 overflow-hidden">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-700 bg-amber-50 dark:bg-amber-950/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-amber-900 dark:text-amber-100">
                {title}
              </h3>
            </div>
            <button
              onClick={handleClose}
              className="p-1 rounded-md hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-stone-600 dark:text-stone-300 mb-6">
              {message}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              {showHomeLink && (
                <Button
                  asChild
                  variant="default"
                  className="w-full bg-stone-700 hover:bg-stone-800 dark:bg-stone-600 dark:hover:bg-stone-700"
                >
                  <Link href="/">Go to Home</Link>
                </Button>
              )}

              {showLogout && (
                <Button
                  onClick={handleSwitchAccount}
                  className="w-full bg-amber-600 hover:bg-amber-700"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Switch Account
                </Button>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-stone-50 dark:bg-neutral-900/50 border-t border-stone-200 dark:border-stone-700">
            <p className="text-xs text-stone-500 dark:text-stone-400 text-center">
              If you believe this is a mistake, please contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
