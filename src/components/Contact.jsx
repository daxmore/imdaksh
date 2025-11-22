import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered grid block reveals
            gsap.fromTo(".contact-block",
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );

            // Stroke animations for borders
            gsap.fromTo(".stroke-animate",
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const MagneticButton = ({ children, className }) => {
        const ref = useRef(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            setPosition({ x, y });
        };

        const handleMouseLeave = () => {
            setPosition({ x: 0, y: 0 });
        };

        const { x, y } = position;

        return (
            <motion.button
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ x: x * 0.2, y: y * 0.2 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                className={className}
            >
                {children}
            </motion.button>
        );
    };

    return (
        <div id="contact" ref={containerRef} className="relative min-h-screen pt-24 pb-20 bg-luxury-light dark:bg-luxury-black overflow-hidden">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
                backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Editorial Header */}
                <div className="mb-20">
                    <div className="contact-block inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full border border-purple-500/10 mb-8">
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400 tracking-wider uppercase">Get In Touch</span>
                    </div>

                    <h1 className="contact-block text-6xl md:text-7xl lg:text-8xl font-display font-bold text-luxury-black dark:text-white leading-[0.9] mb-8">
                        Let's Create<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Together.</span>
                    </h1>

                    <div className="stroke-animate h-px bg-gradient-to-r from-gray-300 via-gray-400 to-transparent dark:from-gray-700 dark:via-gray-600 dark:to-transparent origin-left" />
                </div>

                {/* Magazine Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">

                    {/* Contact Info Cards - Asymmetric Layout */}
                    <div className="md:col-span-5 lg:col-span-4 space-y-6">

                        {/* Email Block */}
                        <div className="contact-block group p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</h3>
                            <p className="text-lg font-bold text-luxury-black dark:text-white">hello@example.com</p>
                        </div>

                        {/* Phone Block */}
                        <div className="contact-block group p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                    <Phone className="w-5 h-5 text-purple-600" />
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</h3>
                            <p className="text-lg font-bold text-luxury-black dark:text-white">+1 (555) 123-4567</p>
                        </div>

                        {/* Location Block */}
                        <div className="contact-block group p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-green-500/30 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                                    <MapPin className="w-5 h-5 text-green-600" />
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Location</h3>
                            <p className="text-lg font-bold text-luxury-black dark:text-white">San Francisco, CA</p>
                        </div>
                    </div>

                    {/* Contact Form - Large Block */}
                    <div className="md:col-span-7 lg:col-span-8 contact-block">
                        <div className="h-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-8 lg:p-12">
                            <h2 className="text-3xl font-display font-bold text-luxury-black dark:text-white mb-8">Send a Message</h2>

                            <form ref={formRef} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-3 text-lg text-luxury-black dark:text-white focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Email</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-3 text-lg text-luxury-black dark:text-white focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-3 text-lg text-luxury-black dark:text-white focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400 resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <MagneticButton className="group px-8 py-4 bg-luxury-black dark:bg-white text-white dark:text-luxury-black font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 border-2 border-luxury-black dark:border-white">
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </MagneticButton>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Social Links Block */}
                    <div className="md:col-span-12 contact-block">
                        <div className="p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Connect With Me</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400">Follow my journey and stay updated with my latest work.</p>
                                </div>

                                <div className="flex gap-4">
                                    <a href="#" className="group p-4 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-600 text-luxury-black dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="group p-4 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-600 text-luxury-black dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="group p-4 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-600 text-luxury-black dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;
