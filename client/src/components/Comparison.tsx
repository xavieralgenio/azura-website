import { CheckCircle, X } from "lucide-react";

export default function Comparison() {
  const comparison = [
    {
      feature: "Availability",
      traditional: "Limited Hours",
      ota: "Commission Fees",
      azura: "24/7 Autonomous",
    },
    {
      feature: "Response Speed",
      traditional: "Hours to Days",
      ota: "No Direct Contact",
      azura: "< 2 Seconds",
    },
    {
      feature: "Personalization",
      traditional: "Manual Replies",
      ota: "No Personalization",
      azura: "Smart Conversations",
    },
    {
      feature: "Booking Control",
      traditional: "Slow Booking",
      ota: "Platform Dependent",
      azura: "Direct Revenue",
    },
    {
      feature: "Guest Memory",
      traditional: "No Context",
      ota: "No Context",
      azura: "Persistent Memory",
    },
    {
      feature: "Cost",
      traditional: "High Staff Costs",
      ota: "15-25% Commission",
      azura: "Predictable SaaS",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Why Azura AI Wins
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            See how Azura AI compares to traditional reception and OTA platforms.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left py-4 px-4 font-semibold text-slate-900">
                  Feature
                </th>
                <th className="text-center py-4 px-4 font-semibold text-slate-900">
                  Traditional Reception
                </th>
                <th className="text-center py-4 px-4 font-semibold text-slate-900">
                  OTA Platforms
                </th>
                <th className="text-center py-4 px-4 font-semibold text-green-600">
                  Azura AI
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-200 hover:bg-white transition-colors"
                >
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center text-slate-600">
                    {row.traditional}
                  </td>
                  <td className="py-4 px-4 text-center text-slate-600">
                    {row.ota}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="font-semibold text-slate-900">
                        {row.azura}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-slate-700 mb-6">
            Azura AI gives you the best of both worlds: the personal touch of a
            dedicated receptionist with the efficiency of automation.
          </p>
        </div>
      </div>
    </section>
  );
}
