import { useEffect, useRef } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-text-reveal",
        { y: 100, opacity: 0, rotateX: -20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.2, delay: 2.2 } // Delay for preloader
      )
        .fromTo(".hero-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          "-=0.5"
        );

      // Floating Elements Animation
      gsap.to(".floating-shape", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-primary-200/40 to-secondary-200/40 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full blur-3xl floating-shape"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-secondary-200/40 to-accent-200/40 dark:from-secondary-900/20 dark:to-accent-900/20 rounded-full blur-3xl floating-shape"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gradient-radial from-primary-100/30 via-transparent to-transparent dark:from-primary-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div ref={textRef} className="space-y-6">
            <div className="overflow-hidden">
              <h2 className="hero-text-reveal bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400 bg-clip-text text-transparent font-medium tracking-widest uppercase text-sm md:text-base">
                Frontend Developer • UI/UX Designer
              </h2>
            </div>

            <div className="overflow-hidden py-2">
              <h1 className="hero-text-reveal text-6xl md:text-8xl lg:text-9xl font-display font-bold text-luxury-black dark:text-white tracking-tighter leading-[0.9]">
                Crafting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Digital
                </span>
              </h1>
            </div>

            <div className="overflow-hidden py-2">
              <h1 className="hero-text-reveal text-6xl md:text-8xl lg:text-9xl font-display font-bold text-luxury-black dark:text-white tracking-tighter leading-[0.9]">
                Experiences
              </h1>
            </div>

            <div className="overflow-hidden pt-6">
              <p className="hero-text-reveal text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                I build pixel-perfect, engaging, and accessible digital experiences.
                Blending technical expertise with design intuition.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
              <Link
                to="/contact"
                className="hero-btn px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow-lg flex items-center gap-2"
              >
                <Mail size={20} />
                Hire Me
              </Link>
              <Link
                to="/projects"
                className="hero-btn px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-primary-200 dark:border-primary-800 text-luxury-black dark:text-white rounded-full font-medium transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-seamless flex items-center gap-2"
              >
                View Work
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-hero / Summary Section */}
      <section className="py-32 bg-gradient-to-b from-transparent via-primary-50/30 to-secondary-50/30 dark:from-transparent dark:via-luxury-dark/50 dark:to-luxury-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Education & Soft Skills */}
            <div className="group p-8 rounded-2xl bg-white/60 dark:bg-luxury-dark/60 backdrop-blur-sm hover:bg-white dark:hover:bg-luxury-dark transition-all duration-500 border border-primary-100/50 dark:border-primary-900/50 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-seamless">
              <h3 className="text-2xl font-display font-bold mb-6 text-luxury-black dark:text-white">Background</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                A journey fueled by curiosity and a passion for learning. From academic foundations to self-taught mastery in modern web technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-white dark:bg-luxury-dark border border-gray-100 dark:border-gray-800 text-luxury-black dark:text-gray-300 text-xs rounded-full font-medium uppercase tracking-wide">Problem Solving</span>
                <span className="px-4 py-1.5 bg-white dark:bg-luxury-dark border border-gray-100 dark:border-gray-800 text-luxury-black dark:text-gray-300 text-xs rounded-full font-medium uppercase tracking-wide">Communication</span>
              </div>
            </div>

            {/* Tech Stack Summary */}
            <div className="group p-8 rounded-2xl bg-white/60 dark:bg-luxury-dark/60 backdrop-blur-sm hover:bg-white dark:hover:bg-luxury-dark transition-all duration-500 border border-secondary-100/50 dark:border-secondary-900/50 hover:border-secondary-300 dark:hover:border-secondary-700 hover:shadow-seamless">
              <h3 className="text-2xl font-display font-bold mb-6 text-luxury-black dark:text-white">Tech Stack</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Specializing in the MERN stack with a strong focus on frontend excellence using React, Tailwind, and animation libraries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-white dark:bg-luxury-dark border border-gray-100 dark:border-gray-800 text-luxury-black dark:text-gray-300 text-xs rounded-full font-medium uppercase tracking-wide">React</span>
                <span className="px-4 py-1.5 bg-white dark:bg-luxury-dark border border-gray-100 dark:border-gray-800 text-luxury-black dark:text-gray-300 text-xs rounded-full font-medium uppercase tracking-wide">GSAP</span>
                <span className="px-4 py-1.5 bg-white dark:bg-luxury-dark border border-gray-100 dark:border-gray-800 text-luxury-black dark:text-gray-300 text-xs rounded-full font-medium uppercase tracking-wide">Tailwind</span>
              </div>
            </div>

            {/* Current Focus */}
            <div className="group p-8 rounded-2xl bg-white/60 dark:bg-luxury-dark/60 backdrop-blur-sm hover:bg-white dark:hover:bg-luxury-dark transition-all duration-500 border border-accent-100/50 dark:border-accent-900/50 hover:border-accent-300 dark:hover:border-accent-700 hover:shadow-seamless">
              <h3 className="text-2xl font-display font-bold mb-6 text-luxury-black dark:text-white">What I Do</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I bridge the gap between design and engineering. Whether it's a complex web app or a stunning landing page, I bring ideas to life.
              </p>
              <Link to="/services" className="text-luxury-black dark:text-white font-medium text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
