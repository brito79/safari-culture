import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import AdminDashboard from '@/components/admin/AdminDashboard';

interface AdminPageProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    roles?: string[];
  };
}

export default function AdminPage({ user }: AdminPageProps) {
  // Pass user data to AdminDashboard if needed
  console.log('Admin user:', user);
  return <AdminDashboard />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  
  if (!session) { 
    return { 
      redirect: { 
        destination: '/api/auth/signin', 
        permanent: false 
      } 
    }; 
  }
  
  // Check if user has admin role
  const userRoles = (session.user as any)?.roles || [];
  const isAdmin = Array.isArray(userRoles) && userRoles.includes('admin');
  
  if (!isAdmin) {
    return {
      redirect: {
        destination: '/auth/access-denied',
        permanent: false
      }
    };
  }
  
  return { 
    props: { 
      user: session.user 
    } 
  };
};