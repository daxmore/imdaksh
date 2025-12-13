import { useEffect, useRef } from 'react';
import { User, Code, Palette, ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax for the main image
            gsap.to(imageRef.current, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Staggered Text Reveal
            const textElements = gsap.utils.toArray('.about-reveal');
            gsap.fromTo(textElements,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Floating shapes animation
            gsap.to('.floating-shape', {
                y: -20,
                rotation: 10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    amount: 1.5,
                    from: "random"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="about" ref={containerRef} className="relative min-h-screen py-24 bg-luxury-light dark:bg-luxury-black overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Magazine Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
                    <div className="lg:col-span-8 about-reveal">
                        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Who I Am
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-luxury-black dark:text-white leading-[0.9]">
                            Creative <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Developer.</span>
                        </h1>
                    </div>
                    <div className="lg:col-span-4 pb-2 about-reveal">
                        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium border-l-4 border-blue-500 pl-6">
                            Crafting digital experiences where <span className="text-luxury-black dark:text-white font-bold">logic meets aesthetics</span>.
                        </p>
                    </div>
                </div>

                {/* Asymmetric Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Image & Stats */}
                    <div className="lg:col-span-5 space-y-12">
                        {/* Hero Image Container */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
                            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                                <div ref={imageRef} className="absolute inset-0 w-full h-[120%] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                    {/* Placeholder for actual image */}
                                    <User className="w-40 h-40 text-gray-400 dark:text-gray-600" />
                                </div>
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white floating-shape">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-xs uppercase tracking-wider opacity-80 mb-1">Current Status</p>
                                            <p className="font-bold text-lg">Open to Work</p>
                                        </div>
                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative floating elements */}
                            <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/20 rounded-full blur-xl floating-shape" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute -bottom-12 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-xl floating-shape" style={{ animationDelay: '2s' }}></div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 about-reveal">
                            <div className="p-6 bg-white dark:bg-luxury-gray rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 transition-colors group">
                                <h3 className="text-4xl font-display font-bold text-blue-600 mb-2 transition-transform origin-left">3+</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years of<br />Experience</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-luxury-gray rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-purple-500/30 transition-colors group">
                                <h3 className="text-4xl font-display font-bold text-purple-600 mb-2 transition-transform origin-left">5+</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects<br />Completed</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio & Skills */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-12" ref={textRef}>

                        {/* Drop Cap Bio */}
                        <div className="prose prose-lg dark:prose-invert max-w-none about-reveal">
                            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                <span className="float-left text-7xl font-display font-bold text-luxury-black dark:text-white mr-4 mt-[-10px] leading-[0.8]">I</span>
                                am a passionate Frontend Developer and UI/UX Designer with a keen eye for detail. My journey started with a curiosity for how things work on the web, which quickly turned into a career obsession. I believe that great software is not just about code; it's about the <span className="text-blue-600 font-semibold">experience</span> it provides to the user.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mt-6">
                                I bridge the gap between design and engineering, ensuring that the final product not only looks beautiful but also functions flawlessly. My approach is user-centric, data-driven, and always evolving with the latest technologies.
                            </p>
                        </div>

                        {/* Skills / Roles */}
                        <div className="space-y-8 about-reveal">
                            <div className="group">
                                <div className="flex flex-col md:flex-row text-balance items-start gap-6 p-6 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors duration-300">
                                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600  transition-transform duration-300">
                                        <Code className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-luxury-black dark:text-white mb-2 flex items-center gap-2">
                                            Frontend Development
                                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Building responsive, accessible, and performant web applications using React, Tailwind CSS, and modern JavaScript.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex flex-col md:flex-row text-balance items-start gap-6 p-6 rounded-2xl hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-colors duration-300">
                                    <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 transition-transform duration-300">
                                        <Palette className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-luxury-black dark:text-white mb-2 flex items-center gap-2">
                                            UI/UX Design
                                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Designing intuitive interfaces and delightful user experiences. I use Figma to prototype and validate ideas before coding.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
