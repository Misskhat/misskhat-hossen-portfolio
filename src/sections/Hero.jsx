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
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Jr. Full Stack Developer • MERN Specialist
              </span>
            </div>
            {/* Headline  */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experience with <br />{" "}
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-mute-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Misskhat Hossen Milon - a Jr. Web developer specializing
                in MERN stack and now exploring Nest.js, PostgresSQL and
                Supabase. I build scalable,performant web application that users
                love.
                <span>Misskhat</span>
              </p>
            </div>
          </div>
          {/* Right column - profile image */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
