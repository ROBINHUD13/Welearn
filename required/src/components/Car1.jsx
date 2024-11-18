import React from 'react'

const Car1 = () => {
  return (
<>
<h1 className="flex justify-center items-center text-center m-10 mb-20 text-3xl font-bold">
  Our Top Instructors
</h1>
<div className="flex flex-wrap justify-evenly gap-y-6 mb-10">
  
<div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md max-w-xs">
      {/* Profile Image */}
      <div className="relative w-24 h-24">
        <img
          src="/asset/instructor2.png" // Replace with the actual image URL
          alt="Profile"
          className="rounded-full border-4 border-purple-500 object-cover"
        />
      </div>
      {/* Name */}
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        Akhilesh Verma
      </h2>
    </div>
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md max-w-xs">
      {/* Profile Image */}
      <div className="relative w-24 h-24">
        <img
          src="/asset/instructor3.png" // Replace with the actual image URL
          alt="Profile"
          className="rounded-full border-4 border-purple-500 object-cover"
        />
      </div>
      {/* Name */}
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        Raunak Singh
      </h2>
    </div>
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md max-w-xs">
      {/* Profile Image */}
      <div className="relative w-24 h-24">
        <img
          src="/asset/instructor4.png" // Replace with the actual image URL
          alt="Profile"
          className="rounded-full border-4 border-purple-500 object-cover"
        />
      </div>
      {/* Name */}
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        Hariom 
      </h2>
    </div>
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md max-w-xs">
      {/* Profile Image */}
      <div className="relative w-24 h-24">
        <img
          src="/asset/instructor2.png" // Replace with the actual image URL
          alt="Profile"
          className="rounded-full border-4 border-purple-500 object-cover"
        />
      </div>
      {/* Name */}
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        Vikas Rathore
      </h2>
    </div>
</div>
<div className="flex flex-col  items-center justify-center gap-4 mb-10">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-purple-700 transition">
            View More
          </button>
          </div>


</>


  )
}

export default Car1
