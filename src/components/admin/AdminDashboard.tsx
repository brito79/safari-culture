import Link from "next/link";
import Footer from "../ui/Footer";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  // This would be protected by Auth0 authentication in a real implementation
  const campData = [
    { name: "Doro Nawas", location: "Damaraland", units: 16, status: "Active" },
    { name: "Little Kulala", location: "Sossusvlei", units: 11, status: "Active" },
    { name: "Hoanib Skeleton Coast", location: "Skeleton Coast", units: 8, status: "Active" },
    { name: "Damaraland Camp", location: "Damaraland", units: 10, status: "Active" }
  ];

  const recentInquiries = [
    { name: "John Smith", email: "john@example.com", camp: "Little Kulala", date: "2025-01-12", status: "New" },
    { name: "Sarah Johnson", email: "sarah@example.com", camp: "Multiple Camps", date: "2025-01-11", status: "Responded" },
    { name: "Mike Wilson", email: "mike@example.com", camp: "Doro Nawas", date: "2025-01-10", status: "Quoted" },
    { name: "Emma Davis", email: "emma@example.com", camp: "Hoanib Skeleton Coast", date: "2025-01-09", status: "Booked" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-blue-100 text-blue-800";
      case "Responded": return "bg-yellow-100 text-yellow-800";
      case "Quoted": return "bg-purple-100 text-purple-800";
      case "Booked": return "bg-green-100 text-green-800";
      case "Active": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-neutral-50 to-stone-50">
      {/* Navigation */}
      <nav className="relative z-10 p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="safari-heading text-2xl sm:text-3xl text-neutral-900">
              Safari Culture
            </h1>
            <span className="safari-accent text-sm text-earth-500">Admin</span>
          </Link>
          <div className="flex items-center space-x-6">
            <span className="safari-body text-black-600">Welcome, Admin</span>
            <Button className="safari-body text-black-600 hover:text-sunset-500 transition-colors">
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Admin Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h1 className="safari-heading text-4xl text-black-900 mb-4">
            Admin Dashboard
          </h1>
          <p className="safari-body text-black-600">
            Manage camps, rates, inquiries, and content for Safari Culture Namibia
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="safari-accent text-xs text-earth-500 tracking-wider">TOTAL CAMPS</p>
                    <p className="safari-heading text-3xl text-neutral-900 mt-1">4</p>
                  </div>
                  <div className="w-12 h-12 bg-earth-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">🏕️</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="safari-accent text-xs text-earth-500 tracking-wider">NEW INQUIRIES</p>
                    <p className="safari-heading text-3xl text-neutral-900 mt-1">7</p>
                  </div>
                  <div className="w-12 h-12 bg-sunset-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="safari-accent text-xs text-earth-500 tracking-wider">ACTIVE QUOTES</p>
                    <p className="safari-heading text-3xl text-neutral-900 mt-1">12</p>
                  </div>
                  <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">💼</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="safari-accent text-xs text-earth-500 tracking-wider">THIS MONTH</p>
                    <p className="safari-heading text-3xl text-neutral-900 mt-1">23</p>
                  </div>
                  <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">📊</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Camp Management */}
            <div className="bg-white rounded-2xl border border-stone-200">
              <div className="p-6 border-b border-stone-200">
                <div className="flex justify-between items-center">
                  <h2 className="safari-heading text-2xl text-neutral-900">
                    Camp Management
                  </h2>
                  <button className="safari-body px-4 py-2 bg-sunset-500 text-white rounded-lg hover:bg-sunset-600 transition-colors">
                    Add Camp
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-stone-200">
                        <th className="safari-accent text-xs text-earth-500 tracking-wider text-left pb-3">CAMP NAME</th>
                        <th className="safari-accent text-xs text-earth-500 tracking-wider text-left pb-3">LOCATION</th>
                        <th className="safari-accent text-xs text-earth-500 tracking-wider text-left pb-3">UNITS</th>
                        <th className="safari-accent text-xs text-earth-500 tracking-wider text-left pb-3">STATUS</th>
                        <th className="safari-accent text-xs text-earth-500 tracking-wider text-left pb-3">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campData.map((camp, index) => (
                        <tr key={index} className="border-b border-stone-100">
                          <td className="safari-body text-neutral-900 py-4">{camp.name}</td>
                          <td className="safari-body text-stone-600 py-4">{camp.location}</td>
                          <td className="safari-body text-stone-600 py-4">{camp.units}</td>
                          <td className="py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(camp.status)}`}>
                              {camp.status}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex space-x-2">
                              <button className="safari-body text-sunset-600 hover:text-sunset-500 text-sm">
                                Edit
                              </button>
                              <button className="safari-body text-sky-600 hover:text-sky-500 text-sm">
                                Rates
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Recent Inquiries */}
            <div className="bg-white rounded-2xl border border-stone-200">
              <div className="p-6 border-b border-stone-200">
                <h2 className="safari-heading text-2xl text-neutral-900">
                  Recent Inquiries
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentInquiries.map((inquiry, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="safari-body text-neutral-900 font-medium">{inquiry.name}</h3>
                            <p className="safari-body text-stone-600 text-sm">{inquiry.email}</p>
                          </div>
                          <div>
                            <p className="safari-body text-stone-700 text-sm">{inquiry.camp}</p>
                            <p className="safari-accent text-xs text-earth-500 tracking-wider">{inquiry.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(inquiry.status)}`}>
                          {inquiry.status}
                        </span>
                        <button className="safari-body text-sunset-600 hover:text-sunset-500 text-sm">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6">
              <h3 className="safari-heading text-lg text-neutral-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full safari-body text-left px-4 py-3 bg-earth-50 text-earth-700 rounded-lg hover:bg-earth-100 transition-colors">
                  Update Rates
                </button>
                <button className="w-full safari-body text-left px-4 py-3 bg-sunset-50 text-sunset-700 rounded-lg hover:bg-sunset-100 transition-colors">
                  Manage Content
                </button>
                <button className="w-full safari-body text-left px-4 py-3 bg-sky-50 text-sky-700 rounded-lg hover:bg-sky-100 transition-colors">
                  View Analytics
                </button>
                <button className="w-full safari-body text-left px-4 py-3 bg-stone-50 text-stone-700 rounded-lg hover:bg-stone-100 transition-colors">
                  Export Reports
                </button>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6">
              <h3 className="safari-heading text-lg text-neutral-900 mb-4">
                System Status
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="safari-body text-stone-600 text-sm">Website</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="safari-body text-stone-600 text-sm">Database</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Connected</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="safari-body text-stone-600 text-sm">Email System</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="safari-body text-stone-600 text-sm">Backups</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Current</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6">
              <h3 className="safari-heading text-lg text-neutral-900 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-3 text-sm">
                <div className="pb-3 border-b border-stone-100">
                  <p className="safari-body text-stone-700">New inquiry from John Smith</p>
                  <p className="safari-accent text-xs text-earth-500 tracking-wider">2 hours ago</p>
                </div>
                <div className="pb-3 border-b border-stone-100">
                  <p className="safari-body text-stone-700">Rates updated for Little Kulala</p>
                  <p className="safari-accent text-xs text-earth-500 tracking-wider">1 day ago</p>
                </div>
                <div className="pb-3 border-b border-stone-100">
                  <p className="safari-body text-stone-700">New camp photos uploaded</p>
                  <p className="safari-accent text-xs text-earth-500 tracking-wider">2 days ago</p>
                </div>
                <div>
                  <p className="safari-body text-stone-700">Booking confirmed for Emma Davis</p>
                  <p className="safari-accent text-xs text-earth-500 tracking-wider">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}