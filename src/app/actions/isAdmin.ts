"use server";
import { auth0 } from "@/lib/auth0";
import { getUsersRoles } from "./getUserRoles";

export async function isAdmin(): Promise<boolean> {
  const session = await auth0.getSession(); 

  if (!session?.user) {
    return false;
  }

  try {
    const roles = await getUsersRoles();
    console.log("Roles: ", roles);
    return roles.some(role => role.name === 'admin');
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}