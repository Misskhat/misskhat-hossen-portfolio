import { ArrowRight, ChevronDown, Download } from "lucide-react";
import Button from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Nest.js",
  "TypeScript",
  "Firebase",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
  "Figma",
  "Git",
  "GitHub Actions",
  "Prompt Engineering",
];

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
        <div className="grid lg:grid-cols-2 gap-15 items-center">
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
              </p>
            </div>
            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" className="flex items-center gap-1.5">
                <a href="#contact">Contact Me</a>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                <a
                  href="https://drive.google.com/file/d/1llCxnAYsdVvLEc98XTiU0E2jeUCEarYL/view?usp=sharing"
                  target="_blank"
                >
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <div className=" text-mute-foreground flex items-center justify-center gap-4">
                <p>Follow me:</p>
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://github.com/Misskhat"
                    className="p-2 rounded-full glass  hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <TbBrandGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-misskhat-hossen"
                    className="p-2 rounded-full glass  hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <AiOutlineLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/MisskhatHossen"
                    className="p-2 rounded-full glass  hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right column - profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"></div>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Misskhat Hossen"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass  rounded-xl px-4 py-3 animate-float ">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work.
                    </span>
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">Ai</div>
                  <div className="text-sm text-white">
                    Driven Web Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-mute-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-mute-foreground/50 hover:text-mute-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-mute-foreground hover:text-primary"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce"></ChevronDown>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
