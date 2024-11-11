import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      title: "Mobile Testing Units",
      description: "Our fleet of advanced mobile testing units brings the lab to your fields, ensuring instant results and informed decision-making.",
      icon: "🔬"
    },
    {
      title: "Certified Agronomists",
      description: "Our experienced team includes certified agronomists who interpret results and provide personalized recommendations for optimal crop growth.",
      icon: "👨‍🌾"
    },
    {
      title: "Sustainability Commitment",
      description: "We take pride in our commitment to sustainable agriculture practices, minimizing environmental impact while maximizing yields.",
      icon: "🌱"
    },
    {
      title: "Data Security",
      description: "Rest assured, your data is secure with us. We follow industry-leading practices to protect your information and ensure confidentiality.",
      icon: "🔒"
    }
  ];

  return (
    <section id="product" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-950 mb-4">
          Why Choose Us
        </h2>
        <div className="h-1 w-24 bg-green-800 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-green-800 rounded-lg p-6 text-white hover:bg-green-700 transition-colors duration-300 flex flex-col"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl">
                <span role="img" aria-label={feature.title}>
                  {feature.icon}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>
              
              <p className="text-green-50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;