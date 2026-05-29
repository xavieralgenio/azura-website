import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { submitDemoBooking, trackEvent } from "@/lib/api";
import { toast } from "sonner";
import { useLocation } from "wouter";

export default function BookDemo() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    hotelName: "",
    propertyType: "",
    numRooms: "",
    bookingChannels: "",
    monthlyInquiries: "",
    message: "",
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
        hotelSize: formData.propertyType as any,
        message: formData.message,
      });

      if (response.success) {
        await trackEvent("demo_requested", {
          propertyType: formData.propertyType,
          numRooms: formData.numRooms,
        });
        setIsSubmitted(true);
        toast.success("Demo request submitted!");
      } else {
        toast.error(response.error || "Failed to submit demo request");
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
            Thank You!
          </h2>
          <p className="text-slate-600 mb-8">
            Your demo request has been received. Our team will contact you shortly to schedule your personalized Azura AI demo.
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
            See How Azura AI Can Run Your Reception 24/7
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Request a personalized demo and discover how leading resorts are automating their guest interactions and increasing direct bookings.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-20">
        <div className="container max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
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
                  placeholder="Email Address"
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
              <div className="mt-4">
                <input
                  type="text"
                  name="country"
                  placeholder="Country / Location"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Business Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Business Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="hotelName"
                  placeholder="Resort / Hotel Name"
                  value={formData.hotelName}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Type of Property</option>
                  <option value="boutique">Resort</option>
                  <option value="small">Hotel</option>
                  <option value="medium">Villa</option>
                  <option value="large">Airbnb / Short-term Rental</option>
                  <option value="enterprise">Other</option>
                </select>
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
                  type="text"
                  name="bookingChannels"
                  placeholder="Booking Channels Used (e.g., Booking.com, Airbnb)"
                  value={formData.bookingChannels}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="mt-4">
                <input
                  type="number"
                  name="monthlyInquiries"
                  placeholder="Estimated Monthly Inquiries"
                  value={formData.monthlyInquiries}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Optional Message */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Tell Us About Your Resort
              </h2>
              <textarea
                name="message"
                placeholder="Share any additional details about your property or specific challenges you'd like us to address..."
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                {isLoading ? "Submitting..." : "Request Demo"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                type="button"
                onClick={() => setLocation("/")}
                variant="outline"
                className="border-slate-300 text-slate-600 hover:bg-slate-50"
                size="lg"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
