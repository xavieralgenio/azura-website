import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Download } from "lucide-react";

export default function DashboardAnalytics() {
  const metrics = [
    {
      label: "Total Conversations",
      value: "12,847",
      change: "+23%",
      icon: "💬",
    },
    {
      label: "Booking Conversion",
      value: "92%",
      change: "+5%",
      icon: "📈",
    },
    {
      label: "Avg Response Time",
      value: "1.2s",
      change: "-0.3s",
      icon: "⚡",
    },
    {
      label: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      icon: "⭐",
    },
  ];

  return (
    <DashboardLayout
      currentPage="Dashboard"
      breadcrumbs={[
        { label: "Dashboard", path: "/dashboard" },
        { label: "Analytics" },
      ]}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Analytics
            </h1>
            <p className="text-slate-600">
              Track your Azura AI performance and insights
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{metric.icon}</span>
                <span className="text-sm font-semibold text-green-600">
                  {metric.change}
                </span>
              </div>
              <h3 className="text-slate-600 text-sm font-medium mb-1">
                {metric.label}
              </h3>
              <p className="text-3xl font-bold text-slate-900">
                {metric.value}
              </p>
            </Card>
          ))}
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">
              Conversations Over Time
            </h2>
            <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-500">Chart visualization</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">
              Booking Sources
            </h2>
            <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-500">Chart visualization</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Detailed Breakdown */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6">
            Performance Breakdown
          </h2>
          <div className="space-y-4">
            {[
              { label: "Website Chat", value: 45, percentage: "45%" },
              { label: "WhatsApp", value: 30, percentage: "30%" },
              { label: "Facebook Messenger", value: 15, percentage: "15%" },
              { label: "Email", value: 10, percentage: "10%" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {item.percentage}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full"
                    style={{ width: item.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
