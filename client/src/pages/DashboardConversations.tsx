import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, MessageSquare } from "lucide-react";

export default function DashboardConversations() {
  const conversations = [
    {
      id: "CONV-001",
      guest: "John Smith",
      property: "Ocean View Resort",
      lastMessage: "Can I book a room for next weekend?",
      timestamp: "2 min ago",
      status: "active",
    },
    {
      id: "CONV-002",
      guest: "Sarah Johnson",
      property: "Mountain Lodge",
      lastMessage: "What's your cancellation policy?",
      timestamp: "15 min ago",
      status: "active",
    },
    {
      id: "CONV-003",
      guest: "Michael Chen",
      property: "Beachfront Villa",
      lastMessage: "Thanks for the booking confirmation!",
      timestamp: "1 hour ago",
      status: "closed",
    },
    {
      id: "CONV-004",
      guest: "Emma Wilson",
      property: "Ocean View Resort",
      lastMessage: "Do you have rooms available in June?",
      timestamp: "3 hours ago",
      status: "active",
    },
  ];

  return (
    <DashboardLayout
      currentPage="Dashboard"
      breadcrumbs={[
        { label: "Dashboard", path: "/dashboard" },
        { label: "Conversations" },
      ]}
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Conversations Inbox
          </h1>
          <p className="text-slate-600">
            Manage all guest conversations powered by Azura AI
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <Button
            variant="outline"
            className="border-slate-300 text-slate-600 hover:bg-slate-50"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Conversations List */}
        <div className="space-y-3">
          {conversations.map((conv) => (
            <Card
              key={conv.id}
              className="p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {conv.guest}
                      </h3>
                      <p className="text-sm text-slate-600">{conv.property}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 ml-13">{conv.lastMessage}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600 mb-2">{conv.timestamp}</p>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      conv.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {conv.status === "active" ? "Active" : "Closed"}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
