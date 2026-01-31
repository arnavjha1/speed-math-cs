import { useEffect, useState } from "react";

const words = ["programmers", "engineers", "creators", "innovators", "builders"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
          <span className="text-foreground">Empowering the next generation of</span>
          <br />
          <span 
            className={`text-gradient-speed inline-block transition-all duration-300 ${
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {words[currentIndex]}
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto font-mono">
          Free coding education for students of all backgrounds
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-8 md:gap-16 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-display font-bold text-gradient-speed">500+</div>
          <div className="text-sm md:text-base text-muted-foreground mt-1">Students Taught</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display font-bold text-gradient-speed">4</div>
          <div className="text-sm md:text-base text-muted-foreground mt-1">Course Levels</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display font-bold text-gradient-speed">$5K+</div>
          <div className="text-sm md:text-base text-muted-foreground mt-1">Raised</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
