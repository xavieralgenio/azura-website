import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface PricingProps {
  onStartTrialClick?: () => void;
}

export default function Pricing({ onStartTrialClick }: PricingProps) {
  const features = [
    "Unlimited conversations",
    "Multi-channel support (Chat, Facebook, WhatsApp)",
    "Advanced analytics & reporting",
    "Priority support",
    "Team management",
    "Custom integrations",
    "Booking oversight calendar",
    "14-day free trial",
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            One powerful plan for all resort sizes. No hidden fees.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="rounded-lg border-2 border-green-500 bg-gradient-to-br from-green-50 to-white shadow-2xl p-8 max-w-md w-full">
            <div className="inline-block mb-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
              ALL-IN-ONE
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              Azura AI
            </h3>
            <p className="text-slate-600 text-sm mb-6">Everything you need to automate your resort</p>

            <div className="mb-6">
              <span className="text-5xl font-bold text-slate-900">
                $199
              </span>
              <span className="text-slate-600 ml-2">/month</span>
            </div>

            <Button
              className="w-full mb-8 bg-green-600 hover:bg-green-700 text-white"
              size="lg"
              onClick={onStartTrialClick}
            >
              Start Your Free Trial
            </Button>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
