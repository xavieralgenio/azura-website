import { Star } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "General Manager, Coastal Luxury Resort",
      image: "SM",
      quote:
        "Azura AI increased our direct bookings by 45% in just 3 months. Our guests love the instant responses, and our team has more time to focus on exceptional service.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Owner, Boutique Mountain Retreat",
      image: "JC",
      quote:
        "We were losing bookings to slow responses. Azura AI transformed our guest experience. The ROI was clear within the first month.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Operations Director, Resort Chain",
      image: "MR",
      quote:
        "Managing multiple properties is now easier. Azura handles the volume, maintains our brand voice, and our staff is happier than ever.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Hospitality Manager, Vacation Rental Group",
      image: "DT",
      quote:
        "The booking completion rate improved dramatically. Guests appreciate the personalized attention, and we're reducing manual work by 70%.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Loved by Resort Owners
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            See what hospitality leaders are saying about Azura AI.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-slate-200">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array(current.rating)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-slate-900 font-semibold mb-8 leading-relaxed">
              "{current.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                {current.image}
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  {current.name}
                </div>
                <div className="text-sm text-slate-600">{current.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-green-600 w-6"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
