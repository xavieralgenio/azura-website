import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onShowForm?: boolean;
  onSetShowForm?: (show: boolean) => void;
  onBookDemoClick?: () => void;
  onStartTrialClick?: () => void;
}

export default function FinalCTA({ 
  onShowForm = false, 
  onSetShowForm,
  onBookDemoClick,
  onStartTrialClick
}: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let Azura Handle Your Guests While You Run Your Resort
        </h2>

        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
          Join 500+ resorts already using Azura AI to increase bookings, reduce
          staff workload, and deliver exceptional guest experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-base"
            onClick={onBookDemoClick}
          >
            Book Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-base"
            onClick={onStartTrialClick}
          >
            Start Free Trial
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
