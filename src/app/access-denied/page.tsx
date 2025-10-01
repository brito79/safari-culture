"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AccessDenied() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-sunset-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-sunset-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-light text-stone-900 mb-2">
              Access Denied
            </h1>
            <p className="text-stone-600 mb-6">
              You don't have permission to access this page. Please contact an administrator if you believe this is an error.
            </p>
            <div className="flex flex-col space-y-3">
              <Link href="/" className="inline-block">
                <Button className="w-full">
                  Return to Home
                </Button>
              </Link>
              <Link href="/api/auth/logout" className="inline-block">
                <Button variant="outline" className="w-full">
                  Sign Out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}