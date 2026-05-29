import { TrendingUp, Clock, Users, Star } from "lucide-react";

export default function ROI() {
  const benefits = [
    {
      icon: TrendingUp,
      metric: "+40%",
      title: "Increase Direct Bookings",
      description:
        "Capture bookings that would otherwise be lost to slow responses or OTA platforms.",
    },
    {
      icon: Clock,
      metric: "24/7",
      title: "Always-On Support",
      description:
        "Never miss a booking inquiry again. Azura responds instantly, day or night.",
    },
    {
      icon: Users,
      metric: "-70%",
      title: "Reduce Staff Load",
      description:
        "Free your team from repetitive tasks to focus on guest experience and operations.",
    },
    {
      icon: Star,
      metric: "+35%",
      title: "Higher Conversion Rates",
      description:
        "Personalized, instant responses lead to more completed bookings and happier guests.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Business Impact
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Azura AI isn't just a chatbot—it's a revenue-generating machine for your
            resort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:border-green-400/50 transition-all group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-shadow">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {benefit.metric}
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <p className="text-blue-200">Resorts Using Azura</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2.5M+</div>
              <p className="text-blue-200">Conversations Handled</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">$50M+</div>
              <p className="text-blue-200">Direct Bookings Generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
