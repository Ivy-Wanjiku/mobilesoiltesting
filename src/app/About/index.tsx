import React from 'react';
import Image from 'next/image';


const About = () => {
  return (
    <main id="aboutus" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-950 mb-4">
          About Us
        </h2>
        <div className="h-1 w-24 bg-green-800 mx-auto mb-12 rounded-full"></div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* <div className="w-full lg:w-1/2">
            <img
              src="/media/aboutus.jpg"
              alt="Soil Testing Process"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div> */}
          <div className="w-full lg:w-1/2">
  <Image
    src="/media/aboutus.jpg"
    alt="Soil Testing Process"
    width={800} 
    height={500}
    className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
  />
</div>

          <div className="w-full lg:w-1/2 lg:pt-8">
            <p className="text-red-950 text-3xl lg:text-4xl font-bold mb-6">
              Mobile and Instant Soil Testing Services
            </p>
            <p className="text-gray-800 text-lg lg:text-xl leading-relaxed ">
              has been at the forefront of agribusiness, continuously evolving to meet 
              the dynamic needs of modern farming. We uphold values of integrity, 
              sustainability, and a deep-rooted commitment to supporting farmers in 
              their journey towards success.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;