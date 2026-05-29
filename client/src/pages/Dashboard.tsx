import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Calendar,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      label: "Active Conversations",
      value: "1,247",
      change: "+12%",
      icon: MessageSquare,
      color: "blue",
    },
    {
      label: "Bookings This Month",
      value: "342",
      change: "+8%",
      icon: Calendar,
      color: "green",
    },
    {
      label: "Booking Rate",
      value: "92%",
      change: "+5%",
      icon: TrendingUp,
      color: "purple",
    },
    {
      label: "Active Guests",
      value: "5,891",
      change: "+15%",
      icon: Users,
      color: "orange",
    },
  ];

  const recentBookings = [
    {
      id: "BK-001",
      guest: "John Smith",
      property: "Ocean View Resort",
      status: "Confirmed",
      date: "May 18-20",
    },
    {
      id: "BK-002",
      guest: "Sarah Johnson",
      property: "Mountain Lodge",
      status: "Pending",
      date: "May 25-27",
    },
    {
      id: "BK-003",
      guest: "Michael Chen",
      property: "Beachfront Villa",
      status: "Confirmed",
      date: "June 1-5",
    },
  ];

  return (
    <DashboardLayout
      currentPage="Dashboard"
      breadcrumbs={[{ label: "Dashboard" }]}
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Welcome Back!
          </h1>
          <p className="text-slate-600">
            Here's what's happening with your Azura AI receptionist today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600",
              green: "bg-green-100 text-green-600",
              purple: "bg-purple-100 text-purple-600",
              orange: "bg-orange-100 text-orange-600",
            };

            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      colorClasses[stat.color as keyof typeof colorClasses]
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-green-600">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-slate-600 text-sm font-medium mb-1">
                  {stat.label}
                </h3>
                <p className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  Recent Bookings
                </h2>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-300 hover:bg-blue-50"
                  size="sm"
                >
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        {booking.guest}
                      </p>
                      <p className="text-sm text-slate-600">
                        {booking.property}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-900">
                        {booking.date}
                      </p>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View Conversations
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-300 text-blue-600 hover:bg-white"
                >
                  Manage Settings
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-300 text-blue-600 hover:bg-white"
                >
                  View Analytics
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <h3 className="font-bold text-slate-900 mb-3">Performance</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-700">Response Time</span>
                  <span className="font-semibold text-green-700">&lt;2s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Uptime</span>
                  <span className="font-semibold text-green-700">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Accuracy</span>
                  <span className="font-semibold text-green-700">94%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
