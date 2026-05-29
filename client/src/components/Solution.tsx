import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Solution() {
  const features = [
    "Understands natural language and guest context",
    "Answers FAQs instantly and accurately",
    "Books reservations autonomously",
    "Operates 24/7 without human intervention",
    "Reduces staff workload by 70%",
    "Increases direct bookings by 40%",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663505550514/SgdDVpMHDBqsjgKfRZy2cQ/azura-dashboard-mockup-4Ymv4nnQJ3arPEmXccMsY3.webp"
                alt="Azura AI Dashboard"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="text-sm font-semibold text-slate-900 mb-2">
                Real-time Analytics
              </div>
              <div className="text-2xl font-bold text-green-600">92%</div>
              <div className="text-xs text-slate-600">Booking Completion Rate</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2">
            <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
              <span className="text-sm font-semibold text-green-900">
                ✨ Meet Azura AI
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Your Autonomous AI Receptionist
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Azura AI combines advanced natural language understanding with intelligent booking logic to deliver a seamless guest experience. It learns from every interaction and improves over time.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-base"
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
