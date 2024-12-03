import React from 'react'


function New() {
  return (
    <div>
       <section className="py-12 bg-white">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800">
          Trusted By 400+ Companies Around The World
        </h3>
        
        {/* Logos */}
        <div className="flex justify-center items-center mt-8 space-x-8">
          {/* Example Logos - Replace 'src' with the actual paths */}
          <img
            src="/asset/Google.png"
            alt="Google"
            className="h-10 object-contain"
          />
          <img
            src="/asset/Hexa.png"
            alt="Hexa"
            className="h-10 object-contain"
          />
          <img
            src="/asset/ideaa.png"
            alt="Ideaa"
            className="h-10 object-contain"
          />
          <img
            src="/asset/meta.png"
            alt="Meta"
            className="h-10 object-contain"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default New
