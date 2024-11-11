import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Homepage = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/media/agriculture.jpg"
          alt="Agricultural field with farmers"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Welcome to Mobile Soil Tests
            <span className="block mt-2">
              Your Trusted Partner in Instant Soil Analysis!
            </span>
          </h1>
          
          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            At Mobile and Instant Soil Testing Services, we are dedicated to 
            revolutionizing agriculture through cutting-edge soil testing solutions. 
            Our team of certified agronomists and soil health experts is committed 
            to providing farmers with quick, reliable, and insightful soil analysis services.
          </p>

          <Link href="#form" className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-green-800 rounded-lg hover:bg-green-500 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black/60">
      Join us today
    </Link>

        </div>
      </div>
    </div>
  );
};

export default Homepage;