import React from 'react';
import Image from 'next/image';


const Services = () => {
  const services = [
    {
      title: "Soil Testing",
      description: "Experience the convenience of on-the-spot results with our mobile units equipped with state-of-the-art technology, delivering accurate results within minutes.",
      image: "/media/soiltesting.jpg"
    },
    {
      title: "Pathology tests",
      description: "Explore your soil's essence with our Soil Pathology Tests. Unveiling microbial mysteries, identify threats, and provide a roadmap for optimal health, disease management, nutrient optimisation, and sustainable practices.",
      image: "/media/pathology.jpeg"
    },
    {
      title: "Instant results",
      description: "Say goodbye to waiting for lab reports. With our instant testing services, you'll receive results on-site, allowing for immediate adjustments to enhance crop performance.",
      image: "/media/instant.jpg"
    },
    {
      title: "Personalised recommendations",
      description: "Our certified agronomists translate results into actionable insights, offering tailored recommendations for soil improvement and crop management.",
      image: "/media/recommendations.jpg"
    },
    {
      title: "Water analysis",
      description: "Elevate your crops with our comprehensive Water Analysis Tests. From pH levels to microbial presence, we provide a comprehensive view of your water's quality. Make informed decisions to enhance nutrient levels and prevent contamination, ensuring your crops thrive.",
      image: "/media/water.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50" id='services'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-950 mb-4">
            Services
        </h2>
        <div className="h-1 w-24 bg-green-800 mx-auto mb-12 rounded-full"></div>
        <p className='mb-11 text-center'>We redefine agribusiness through a comprehensive suite of services designed to elevate your farming experience. Our commitment goes beyond the fields; we're dedicated to supporting you at every stage of your agricultural journey. Explore how our tailored solutions can drive efficiency, increase yields, and cultivate sustainable success.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              {/* <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div> */}
              <div className="relative h-64">
  <Image
    src={service.image}
    alt={service.title}
    layout="fill"
    objectFit="cover"
    className="rounded-lg"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
              
              <div className="relative p-6">
                <h3 className="text-xl font-bold mb-4  text-green-950">
                  {service.title}
                </h3>
                <p className="text-red-950 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;