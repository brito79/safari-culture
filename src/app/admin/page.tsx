"use client";

import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import AdminDashboard from '@/components/admin/AdminDashboard';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function AdminPage() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const userRoles = user && typeof user === 'object' ? (user['https://safari-culture.com/roles'] as string[] || []) : [];
  const isAdmin = userRoles.includes('admin');
  
  useEffect(() => {
    // Additional admin role check
    if (user && !isLoading && !isAdmin) {
      router.push('/access-denied');
    }
  }, [user, isLoading, isAdmin, router]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!isAdmin) return null; // Will redirect in useEffect
  
  return <AdminDashboard />;
}

// Auth0 protection - requires authentication
export default withPageAuthRequired(AdminPage);