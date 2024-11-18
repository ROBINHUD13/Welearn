import React, { useState } from 'react';

const Car2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: 'UX & UI Design',
      // description: 'This is the description for Block A.',
      imageUrl: 'https://th.bing.com/th/id/OIP.s5eVvMkstUh-cyHQlwA-KwHaFj?w=250&h=187&c=7&r=0&o=5&dpr=1.2&pid=1.7',
      duration: '3h 18min',
      enrolled: '1,24,000',
      price: '$1,240',
      instructor: 'Ali AL Alvy',
      rating: 5,
      reviews: '1,24,000',
    },
    {
      title: 'Machine Learning',
      // description: 'This is the description for Block B.',
      imageUrl: 'https://th.bing.com/th/id/OIP.Lz6x9qdZZ7YhszPI2qlgfgHaEQ?rs=1&pid=ImgDetMain',
      duration: '3h 18min',
      enrolled: '1,24,000',
      price: '$1,240',
      instructor: 'Ali AL Alvy',
      rating: 5,
      reviews: '1,24,000',
    },
    {
      title: 'Data Science',
      // description: 'This is the description for Block C.',
      imageUrl: 'https://i.ytimg.com/vi/yh2pLdDb87c/maxresdefault.jpg',
      duration: '3h 18min',
      enrolled: '1,24,000',
      price: '$1,240',
      instructor: 'Ali AL Alvy',
      rating: 5,
      reviews: '1,24,000',
    },
    {
      title: 'Java',
      // description: 'This is the description for Block D.',
      imageUrl: 'https://www.finoit.com/wp-content/uploads/2022/09/history-of-java-programming-language.jpg',
      duration: '3h 18min',
      enrolled: '1,24,000',
      price: '$1,240',
      instructor: 'Ali AL Alvy',
      rating: 5,
      reviews: '1,24,000',
    },
    {
      title: 'Python',
      // description: 'This is the description for Block E.',
      imageUrl: 'https://th.bing.com/th/id/OIP.on7ysN0CmNubORb62ZC0PQHaEK?w=1600&h=900&rs=1&pid=ImgDetMain',
      duration: '3h 18min',
      enrolled: '1,24,000',
      price: '$1,240',
      instructor: 'Ali AL Alvy',
      rating: 5,
      reviews: '1,24,000',
    },
  ];
  

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-2">
    {/* Carousel Container */}
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col items-center justify-center bg-gray-100 h-auto rounded-xl text-center p-4 sm:p-6 space-y-4"
          >
            {/* Slide Image */}
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full max-w-xs sm:max-w-sm h-40 sm:h-48 object-cover rounded-lg"
            />
            
            {/* Slide Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-black">
              {slide.title}
            </h2>
            
            {/* Slide Description */}
            <p className="text-sm sm:text-base text-gray-300">{slide.description}</p>
            
            {/* Additional Details */}
            <p className="text-sm text-gray-800">Duration: {slide.duration}</p>
            <p className="text-sm text-gray-800">Enrolled: {slide.enrolled}</p>
            <p className="text-lg font-semibold text-purple-400">Price: {slide.price}</p>
            
            {/* Instructor Info */}
            <div>
              <p className="text-sm text-gray-600">Conducted by:</p>
              <p className="text-black font-semibold">{slide.instructor}</p>
              <p className="text-yellow-400">
                ⭐ {slide.rating} ({slide.reviews} reviews)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    {/* Left Button */}
    <button
      onClick={prevSlide}
      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 hover:bg-red-200 transition duration-300 text-sm sm:text-base"
    >
      <i className="fas fa-chevron-left text-red-200">◀</i> 
    </button>
  
    {/* Right Button */}
    <button
      onClick={nextSlide}
      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 hover:bg-red-200 transition duration-300 text-sm sm:text-base"
    >
      <i className="fas fa-chevron-right text-red-200">▶</i>
    </button>
  
    {/* Dots Navigation */}
    <div className="flex justify-center space-x-2 mt-4">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
            currentIndex === index
              ? 'bg-red-200'
              : 'bg-gray-400 hover:bg-red-200'
          }`}
        />
      ))}
    </div>
    <div className="flex flex-col mt-10 items-center justify-center gap-4 mb-10">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-purple-700 transition">
            View More
          </button>
          </div>
  </div>
  
  
  );
};

export default Car2;
