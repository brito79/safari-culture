"use server";

import { auth0 } from "@/lib/auth0";

/**
 * Server action to get the current authenticated user
 * Returns null if no user is authenticated
 */
export async function getUser() {
  const session = await auth0.getSession();
  return session?.user ?? null;
}

/**
 * Server action to check if a user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const session = await auth0.getSession();
  return !!session?.user;
}
