import { useEffect, useRef } from 'react';
import { User, Code, Palette, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image Parallax
            gsap.to(imageRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Text Reveals
            const textElements = gsap.utils.toArray('.about-text-reveal');
            textElements.forEach((el) => {
                gsap.fromTo(el,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen pt-24 pb-20 bg-white dark:bg-luxury-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-20 text-center">
                    <h1 className="about-text-reveal text-4xl md:text-6xl font-display font-bold text-luxury-black dark:text-white mb-6">
                        About Me
                    </h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto about-text-reveal"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Image Section (Split Layout) */}
                    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 about-text-reveal">
                        {/* Placeholder for Portrait */}
                        <div ref={imageRef} className="absolute inset-0 w-full h-[120%] bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                            <User className="w-32 h-32 text-blue-200 dark:text-blue-800/50" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 right-8 bg-white/90 dark:bg-luxury-black/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 max-w-xs">
                            <p className="font-display font-bold text-2xl text-blue-600 mb-1">3+</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">Years of Experience</p>
                        </div>
                    </div>

                    {/* Text Content (Magazine Style) */}
                    <div className="space-y-12">

                        <div className="about-text-reveal">
                            <h2 className="text-3xl font-display font-bold text-luxury-black dark:text-white mb-6 leading-tight">
                                Bridging the gap between <span className="text-blue-600">design</span> and <span className="text-purple-600">engineering</span>.
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-body">
                                I am a passionate Frontend Developer and UI/UX Designer with a keen eye for detail. My journey started with a curiosity for how things work on the web, which quickly turned into a career obsession. I believe that great software is not just about code; it's about the experience it provides to the user.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 about-text-reveal">
                            <div>
                                <h3 className="text-xl font-bold text-luxury-black dark:text-white mb-4 flex items-center gap-2">
                                    <Code className="w-5 h-5 text-blue-500" />
                                    Development
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Clean, scalable, and performant code. I specialize in the React ecosystem and modern CSS frameworks.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-luxury-black dark:text-white mb-4 flex items-center gap-2">
                                    <Palette className="w-5 h-5 text-purple-500" />
                                    Design
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Intuitive interfaces and delightful interactions. I use Figma to prototype and validate ideas before coding.
                                </p>
                            </div>
                        </div>

                        <div className="about-text-reveal pt-8 border-t border-gray-100 dark:border-gray-800">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Experience</h3>

                            <div className="space-y-8">
                                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-luxury-black"></div>
                                    <h4 className="text-lg font-bold text-luxury-black dark:text-white">Frontend Developer</h4>
                                    <p className="text-blue-600 text-sm font-medium mb-2">2023 - Present</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Leading frontend initiatives, optimizing performance, and mentoring junior developers.
                                    </p>
                                </div>
                                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-luxury-black"></div>
                                    <h4 className="text-lg font-bold text-luxury-black dark:text-white">Web Designer</h4>
                                    <p className="text-blue-600 text-sm font-medium mb-2">2021 - 2023</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Designed user interfaces for various clients, focusing on usability and brand consistency.
                                    </p>
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
