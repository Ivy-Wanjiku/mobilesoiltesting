import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Mobile Soil Tests has revolutionised the way we approach soil health. The instant results empower us to make timely decisions for our crops.",
      image: "/media/farmer-1.jpeg",
      name: "John Kamau",
      role: "Large-scale Farmer",
      rating: 4
    },
    {
      id: 2,
      content: "Being part of your agricultural community has been a game-changer for our farm. The gallery reflects the shared success and camaraderie we've experienced together.",
      image: "/media/farmer-2.jpeg",
      name: "Sarah Wanjiku",
      role: "Community Leader",
      rating: 5
    },
    {
      id: 3,
      content: "The convenience of having on-the-spot results has saved us time and improved our overall farming strategy. Mobile Soil Tests is a game-changer!",
      image: "/media/farmer-3.jpeg",
      name: "David Mwangi",
      role: "Small-scale Farmer",
      rating: 5
    },
    {
      id: 4,
      content: "We were amazed by the efficiency of Mobile Soil Tests. The personalized recommendations significantly boosted our crop yields.",
      image: "/media/farmer-4.jpeg",
      name: "Mary Njeri",
      role: "Agricultural Cooperative Head",
      rating: 2
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-pink-100 opacity-80" />
      
  
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

             <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-950 mb-4">
          Testimonials
        </h2>
        <div className="h-1 w-24 bg-green-800 mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;