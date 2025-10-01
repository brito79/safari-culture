"use client";

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default function LoginButton() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading.....</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (user) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="text-sm">
          Logged in as {user.name || user.email}
        </div>
        <Link 
          href="/api/auth/logout"
          className="px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700 transition-colors"
        >
          Logout
        </Link>
      </div>
    );
  }

  return (
    <Link 
      href="/api/auth/login"
      className="px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700 transition-colors"
    >
      Login
    </Link>
  );
}