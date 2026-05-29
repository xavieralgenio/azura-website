import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { submitDemoBooking, trackEvent } from "@/lib/api";
import { toast } from "sonner";
import { useLocation } from "wouter";

export default function StartFreeTrial() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hotelName: "",
    website: "",
    numRooms: "",
    messagingPlatforms: "",
    monthlyBookings: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await submitDemoBooking({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        hotelName: formData.hotelName,
        message: `Website: ${formData.website}\nMessaging Platforms: ${formData.messagingPlatforms}\nMonthly Bookings: ${formData.monthlyBookings}`,
      });

      if (response.success) {
        await trackEvent("free_trial_requested", {
          hotelName: formData.hotelName,
          numRooms: formData.numRooms,
        });
        setIsSubmitted(true);
        toast.success("Free trial request submitted!");
      } else {
        toast.error(response.error || "Failed to submit trial request");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            You're All Set!
          </h2>
          <p className="text-slate-600 mb-8">
            Your free trial request has been received. We will contact you shortly to activate Azura AI for your resort.
          </p>
          <Button
            onClick={() => setLocation("/")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Start Your Resort's AI Receptionist Today
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Activate your 14-day free trial of Azura AI. No credit card required.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-20">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Benefits */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                What's Included
              </h2>
              <div className="space-y-4">
                {[
                  "Unlimited conversations",
                  "All messaging channels",
                  "Full analytics access",
                  "Priority onboarding",
                  "24/7 support",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              {/* Basic Details */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Basic Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              {/* Resort Details */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Resort Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="hotelName"
                    placeholder="Resort Name"
                    value={formData.hotelName}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <input
                    type="url"
                    name="website"
                    placeholder="Website URL (optional)"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input
                    type="number"
                    name="numRooms"
                    placeholder="Number of Rooms"
                    value={formData.numRooms}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <input
                    type="number"
                    name="monthlyBookings"
                    placeholder="Expected Monthly Bookings"
                    value={formData.monthlyBookings}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              {/* Operational Info */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Messaging Platforms
                </h3>
                <input
                  type="text"
                  name="messagingPlatforms"
                  placeholder="e.g., WhatsApp, Facebook Messenger, Website Chat"
                  value={formData.messagingPlatforms}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                {isLoading ? "Starting Trial..." : "Start Free Trial"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-sm text-slate-600 text-center">
                No credit card required. 14-day free trial. Cancel anytime.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-slate-700">Active Resorts</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
              <p className="text-slate-700">Booking Completion Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">&lt;2s</div>
              <p className="text-slate-700">Average Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
