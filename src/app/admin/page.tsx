"use client";

import { withAuth } from '@/lib/auth-context';
import AdminDashboard from '@/components/admin/AdminDashboard';

function AdminPage() {
  return <AdminDashboard />;
}

// Protect this page - require admin role and view_dashboard permission
export default withAuth(AdminPage, 'admin', ['view_dashboard']);