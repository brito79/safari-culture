"use client";

import React, { Suspense} from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';


// Loading component to be used with Suspense
function LoadingDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-gray-600">Loading dashboard...</p>
    </div>
  );
}

// The main dashboard content component
function AdminDashboardContent({isAdmin}: {isAdmin: boolean}) {
  const { user } = useUser();
  
  
 
  // Permission helpers based on admin status
  const canManageCamps = isAdmin;
  const canManageRates = isAdmin;
  const canManageImages = isAdmin;
  const canViewInquiries = isAdmin;
  const canManageUsers = isAdmin;
  const canViewAnalytics = isAdmin;

  const dashboardCards = [
    {
      title: 'Manage Camps',
      description: 'Add, edit, and manage safari camp information',
      icon: '🏕️',
      href: '/admin/camps',
      permission: canManageCamps
    },
    {
      title: 'Rate Management',
      description: 'Update pricing and rate sheets',
      icon: '💰',
      href: '/dashboard/rates',
      permission: canManageRates
    },
    {
      title: 'Image Gallery',
      description: 'Manage camp and experience images',
      icon: '📸',
      href: '/dashboard/images',
      permission: canManageImages
    },
    {
      title: 'Guest Inquiries',
      description: 'View and respond to contact form submissions',
      icon: '📧',
      href: '/dashboard/inquiries',
      permission: canViewInquiries
    },
    {
      title: 'User Management',
      description: 'Manage admin users and permissions',
      icon: '👥',
      href: '/admin/users',
      permission: canManageUsers
    },
    {
      title: 'Analytics',
      description: 'View website traffic and booking analytics',
      icon: '📊',
      href: '/admin/analytics',
      permission: canViewAnalytics
    }
  ].filter(card => card.permission);

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <p className="text-xl text-red-600 mb-4">Access Denied</p>
        <p className="text-gray-600 mb-6">You don&apos;t have permission to access this area.</p>
        <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-white/80 border-b border-gray-200 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome, {user?.name || user?.email}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                View Site
              </Link>
              <button
                onClick={() => {
                  // Logout and redirect to home page
                  // This clears Auth0 session and all tokens
                  window.location.href = '/auth/logout?returnTo=' + encodeURIComponent(window.location.origin);
                }}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Camps</p>
                <p className="text-2xl font-light text-gray-900">4</p>
              </div>
              <div className="text-2xl">🏕️</div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">New Inquiries</p>
                <p className="text-2xl font-light text-gray-900">12</p>
              </div>
              <div className="text-2xl">📧</div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Site Views</p>
                <p className="text-2xl font-light text-gray-900">2.4K</p>
              </div>
              <div className="text-2xl">👁️</div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Bookings</p>
                <p className="text-2xl font-light text-gray-900">8</p>
              </div>
              <div className="text-2xl">📅</div>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/dashboard/camps/new"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add New Camp
            </Link>
            <Link
              href="/rates"
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
            >
              View Rate Sheet
            </Link>
            <Link
              href="/dashboard/inquiries"
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Check Messages
            </Link>
            <Link
              href="/dashboard/contact-info"
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Edit Contact Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component that wraps the content with Suspense
export default function AdminDashboard({ isAdmin }: { isAdmin: boolean }) {
  return (
    <Suspense fallback={<LoadingDashboard />}>
      <AdminDashboardContent isAdmin={isAdmin} />
    </Suspense>
  );
}
