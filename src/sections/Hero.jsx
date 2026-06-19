import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background  */}
      <div className="absolute inset-0">
        <img
          src="./hero-bg.jpg"
          alt="hero image"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "rgb(32, 178, 166)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
