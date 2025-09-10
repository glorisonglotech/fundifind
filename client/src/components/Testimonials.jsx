import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Grace Wanjiku",
      location: "Nairobi",
      role: "Small Business Owner",
      content:
        "Found an excellent electrician through FundiFind. The verification process gave me confidence, and the work was completed perfectly!",
      rating: 5,
      avatar: "👩🏾‍💼",
    },
    {
      name: "John Mwangi",
      location: "Mombasa",
      role: "Carpenter",
      content:
        "As a Fundi, this platform has transformed my business. I get regular clients and the payment system is so convenient with M-Pesa.",
      rating: 5,
      avatar: "👨🏾‍🔧",
    },
    {
      name: "Sarah Akinyi",
      location: "Kisumu",
      role: "Homeowner",
      content:
        "The plumber I hired was professional and skilled. The real-time messaging made coordination easy, and I felt secure throughout.",
      rating: 5,
      avatar: "👩🏾",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              Community
            </span>{" "}
            Says
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from Kenyans who trust FundiFind for their service
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative border border-pink-500 bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-md hover:scale-105 transition"
            >
              <CardHeader>
                <Quote className="absolute top-6 right-6 w-8 h-8 text-pink-300" />
              </CardHeader>

              <CardContent>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-pink-400 fill-pink-400"
                    />
                  ))}
                </div>
                <p className="text-gray-800 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-300 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
