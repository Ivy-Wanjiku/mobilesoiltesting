import React from 'react';
import Image from 'next/image';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      src: '/media/field-training-1.jpeg',
      alt: 'Field soil testing session with farmers',
      title: 'On-Site Training',
      description: 'Hands-on soil testing demonstrations with local farming communities'
    },
    {
      id: 2,
      src: '/media/crop-inspection.jpeg',
      alt: 'Maize field inspection',
      title: 'Crop Assessment',
      description: 'Expert evaluation of crop health and soil conditions'
    },
    {
      id: 3,
      src: '/media/outdoor-workshop.jpg',
      alt: 'Outdoor workshop session',
      title: 'Community Workshops',
      description: 'Educational sessions on soil management practices'
    },
    {
      id: 4,
      src: '/media/field-assessment.jpg',
      alt: 'Field assessment with farmers',
      title: 'Field Assessment',
      description: 'Collaborative soil analysis with local farmers'
    },
    {
      id: 5,
      src: '/media/indoor-training.jpg',
      alt: 'Indoor training session',
      title: 'Technical Training',
      description: 'Detailed instruction on soil testing methods'
    },
    {
      id: 6,
      src: '/media/practical-demo.jpg',
      alt: 'Practical demonstration in field',
      title: 'Practical Demonstrations',
      description: 'Real-world application of soil testing techniques'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-950 mb-4">
          Gallery
        </h2>
        <div className="h-1 w-24 bg-green-800 mx-auto mb-12 rounded-full"></div>
          <p className="text-lg  max-w-3xl mx-auto">
          Explore Our Agricultural Journey Through Captivating Moments.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;