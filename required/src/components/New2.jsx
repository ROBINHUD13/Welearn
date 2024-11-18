import React from 'react'

const New2 = () => {
  return (
    <div>
      <section className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:ml-0 ml-10">
          <img
            src="/asset/courseOutlet.png"
            alt="Online Learning"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 m-10 lg:m-0" >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 lg:ml-0 ml-10">
            You Can Learn, Wherever You Want
          </h2>
          <p className="text-gray-600 mb-6 lg:ml-0 ml-10">
            We provide you the best course modules with the most experienced
            instructors so that you can learn the lessons easily even in your
            own house!
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 lg:ml-0 ml-10">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white">
                ✓
              </span>
              <p className="text-gray-700">Online Resources</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white">
                ✓
              </span>
              <p className="text-gray-700">Weekly Sessions</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white">
                ✓
              </span>
              <p className="text-gray-700">Live Classes</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white">
                ✓
              </span>
              <p className="text-gray-700">Quiz & Practices</p>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-purple-700 transition">
            Register Now
          </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default New2
