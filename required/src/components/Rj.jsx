import React from 'react'

const Rj = () => {
  return (
    <div>
         <section className="flex flex-col lg:flex-row lg:mt-20 items-center justify-between px-6 lg:px-16 py-12 max-w-screen-xl mx-auto">
      {/* Left Content */}
      <div className="text-center lg:text-left lg:max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          <span className="text-purple-600">Studying Online</span> Is Much Easier Now!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This is the future of learning. <br />
          Learn right & Grow!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-purple-700 transition">
            Get Started
          </button>
          <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-md text-lg font-medium hover:bg-purple-50 transition">
            Try Free
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="mt-8 lg:mt-0">
        <img
          src="/asset/heroImage.png"
          alt="Online Learning"
          className="w-full max-w-md lg:max-w-lg"
        />
      </div>
    </section>
      
    </div>
  )
}

export default Rj
