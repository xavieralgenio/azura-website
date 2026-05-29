import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { getAppointments } from "@/lib/api";

interface BookingRow {
  id: number;
  guest_name: string;
  guest_email: string;
  guest_phone?: string;
  start_time: string;
  end_time: string;
  status: string;
  notes?: string;
}

export default function DashboardBookings() {
  const [bookings, setBookings] = useState<BookingRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      const result = await getAppointments();
      if (result.error) {
        console.error("Failed to load appointments:", result.error);
      } else if (result.data) {
        setBookings(result.data);
      }
      setLoading(false);
    }

    loadBookings();
  }, []);

  return (
    <DashboardLayout
      currentPage="Dashboard"
      breadcrumbs={[
        { label: "Dashboard", path: "/dashboard" },
        { label: "Bookings" },
      ]}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Bookings</h1>
          <p className="text-slate-600">View and manage all reservations made through Azura AI</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              disabled
            />
          </div>
          <Button variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Calendar className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Guest</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Start</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">End</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td className="px-6 py-8 text-center text-slate-500" colSpan={5}>
                      Loading bookings…
                    </td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td className="px-6 py-8 text-center text-slate-500" colSpan={5}>
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking, index) => (
                    <tr
                      key={booking.id}
                      className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${index === bookings.length - 1 ? "border-b-0" : ""}`}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-slate-900">{booking.guest_name}</p>
                          <p className="text-sm text-slate-600">{booking.guest_email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">{new Date(booking.start_time).toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{new Date(booking.end_time).toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            booking.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">{booking.notes || "—"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
