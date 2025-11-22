import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Initial Reveal
            tl.fromTo(".hero-line",
                { scaleX: 0, transformOrigin: "left" },
                { scaleX: 1, duration: 1.5, stagger: 0.2 }
            )
                .fromTo(".hero-text-char",
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, stagger: 0.02 },
                    "-=1"
                )
                .fromTo(".hero-meta",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
                    "-=0.5"
                )
                .fromTo(".hero-image-reveal",
                    { clipPath: "inset(100% 0 0 0)" },
                    { clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power2.inOut" },
                    "-=1"
                );

            // Parallax Effect
            gsap.to(".hero-parallax", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen pt-20 overflow-hidden bg-luxury-light dark:bg-luxury-black text-luxury-black dark:text-white">

            {/* Magazine Grid Layout */}
            <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-10">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-full border-r border-current last:border-r-0"></div>
                ))}
            </div>

            <div className="relative z-10 max-w-[95%] mx-auto h-full flex flex-col justify-between pb-12">

                {/* Header Meta */}
                <div className="flex justify-between items-end border-b border-current pb-4 mb-12 hero-line">
                    <div className="hero-meta">
                        <span className="block text-xs font-bold tracking-[0.2em] uppercase">Portfolio</span>
                        <span className="block text-sm font-serif italic">Vol. 2024</span>
                    </div>
                    <div className="hero-meta text-right hidden md:block">
                        <span className="block text-xs font-bold tracking-[0.2em] uppercase">Location</span>
                        <span className="block text-sm font-serif italic">Worldwide / Remote</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column: Massive Title */}
                    <div className="lg:col-span-8 space-y-8">
                        <div ref={titleRef} className="font-display font-black uppercase leading-[0.85] tracking-tighter mix-blend-difference">
                            <div className="overflow-hidden">
                                <h1 className="text-[12vw] lg:text-[10vw] hero-text-char">Creative</h1>
                            </div>
                            <div className="overflow-hidden flex items-center gap-4">
                                <span className="h-[1px] flex-grow bg-current hero-line"></span>
                                <h1 className="text-[12vw] lg:text-[10vw] hero-text-char italic font-serif font-light text-accent-600 dark:text-accent-400">Dev</h1>
                            </div>
                            <div className="overflow-hidden text-right">
                                <h1 className="text-[12vw] lg:text-[10vw] hero-text-char">& Design</h1>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center pt-8">
                            <Link
                                to="/projects"
                                className="group relative px-8 py-4 bg-luxury-black dark:bg-white text-white dark:text-luxury-black rounded-full overflow-hidden hero-meta"
                            >
                                <span className="relative z-10 flex items-center gap-2 font-bold tracking-wide">
                                    View Selected Works <ArrowRight size={18} />
                                </span>
                                <div className="absolute inset-0 bg-accent-600 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
                            </Link>

                            <p className="max-w-md text-sm md:text-base font-medium leading-relaxed opacity-80 hero-meta border-l-2 border-accent-500 pl-4">
                                Crafting digital experiences that blend technical precision with aesthetic excellence.
                                Specializing in React, GSAP, and immersive web design.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Editorial Image/Visual */}
                    <div className="lg:col-span-4 relative h-[50vh] lg:h-[70vh] w-full">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxury-light dark:to-luxury-black z-10 opacity-20"></div>
                        <div className="h-full w-full bg-gray-200 dark:bg-gray-800 overflow-hidden hero-image-reveal relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay"></div>
                            {/* Abstract Geometric Shapes representing 'Code & Art' */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent-500/30 to-transparent hero-parallax"></div>

                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-lg">
                                    <div className="text-xs font-bold tracking-widest uppercase mb-2 opacity-70">Featured Project</div>
                                    <div className="text-xl font-display font-bold">Immersive Portfolio</div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-xs opacity-60">2024 Edition</span>
                                        <ArrowRight size={16} className="-rotate-45" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Meta */}
                <div className="mt-12 pt-4 border-t border-current flex justify-between items-center hero-line">
                    <div className="flex gap-8 text-xs font-bold tracking-widest uppercase opacity-60">
                        <span>[ React ]</span>
                        <span>[ Tailwind ]</span>
                        <span>[ GSAP ]</span>
                    </div>
                    <div className="animate-bounce">
                        <ArrowDown size={20} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
