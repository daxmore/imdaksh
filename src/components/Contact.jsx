import { useEffect, useRef } from 'react';
import { Mail, Send, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".contact-reveal",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={containerRef} className="relative py-20 md:py-32 overflow-hidden">

            {/* Background subtle pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }} />

            <div className="max-w-full px-4 sm:px-6 relative z-10">

                {/* Main CTA Card */}
                <div className="contact-reveal bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left: Headline */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                                <Mail className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-semibold text-blue-600">Let's Connect</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-luxury-black dark:text-white leading-tight">
                                Have a project in mind?
                            </h2>

                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            {/* Quick Contact Info */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="mailto:hello@imdaksh.dev"
                                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    hello@imdaksh.dev
                                </a>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-luxury-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-luxury-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Project Inquiry"
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-luxury-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-luxury-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-multilayer group px-6 py-4 bg-luxury-black dark:bg-white text-white dark:text-luxury-black rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                                >
                                    <span className="layer-1"></span>
                                    <span className="layer-2"></span>
                                    <span className="layer-3"></span>
                                    <span className="btn-multilayer-text flex items-center gap-2">
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Alternative Contact Methods */}
                <div className="contact-reveal mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                        href="mailto:hello@imdaksh.dev"
                        className="group p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 transition-all flex items-center gap-4"
                    >
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                            <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Email me at</p>
                            <p className="font-semibold text-luxury-black dark:text-white group-hover:text-blue-600 transition-colors">hello@imdaksh.dev</p>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 transition-all flex items-center gap-4"
                    >
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Connect on</p>
                            <p className="font-semibold text-luxury-black dark:text-white group-hover:text-blue-600 transition-colors">LinkedIn</p>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </a>

                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-500/30 transition-all flex items-center gap-4"
                    >
                        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Check out my</p>
                            <p className="font-semibold text-luxury-black dark:text-white group-hover:text-gray-600 transition-colors">GitHub</p>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
