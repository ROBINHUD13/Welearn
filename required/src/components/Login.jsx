
import { SignInButton } from '@clerk/clerk-react';
import React, { useState, useEffect } from 'react';



function Login() {

    const slogan = "Track, Play, Dominate!";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 100 : 150; // Typing speed

        const timeout = setTimeout(() => {
            if (!isDeleting && index < slogan.length) {
                // Adding letters
                setDisplayedText((prev) => prev + slogan[index]);
                setIndex((prev) => prev + 1);
            } else if (isDeleting && index > 0) {
                // Deleting letters
                setDisplayedText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            } else if (index === slogan.length && !isDeleting) {
                // Start deleting after pause
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && index === 0) {
                // Start re-typing after pause
                setIsDeleting(false);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout); // Cleanup
    }, [index, isDeleting, slogan]);
    return (
        <>
            {/* Main container */}
            <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://wallpaperaccess.com/full/5053236.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover"

                }}
            >
                {/* Blurred Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

                {/* Login Content */}
                <div className="relative z-10 lg:flex p-3 w-full">
                    {/* Main Section */}
                    <main className="flex flex-1 flex-col items-center justify-center text-center p-8 min-h-screen">
            {/* Slogan */}
            <h1 className="text-4xl font-bold mb-4 text-white">
                {displayedText}
                <span className="blinking-cursor">|</span>
            </h1>
            <p className="text-lg mb-6 text-gray-300">
                Your ultimate solution for tracking e-sports tournaments.
            </p>
            <button className="bg-teal-400 text-gray-900 py-2 px-6 rounded-lg hover:bg-teal-500">
           
            </button>
        </main>

                  
                </div>
            </div>
        </>
    );
}

export default Login;
