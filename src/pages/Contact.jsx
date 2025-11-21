import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".contact-reveal",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
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
        <div ref={containerRef} className="min-h-screen pt-24 pb-20 bg-white dark:bg-luxury-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="contact-reveal">
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-luxury-black dark:text-white mb-6">
                                Let's work <br /> together.
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                                Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
                            </p>
                        </div>

                        <div className="space-y-8 contact-reveal">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-luxury-black dark:text-white mb-1">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-400">hello@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                                    <Phone className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-luxury-black dark:text-white mb-1">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                                    <MapPin className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-luxury-black dark:text-white mb-1">Location</h3>
                                    <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 contact-reveal">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Follow Me</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-gray-50 dark:bg-gray-900 rounded-full text-luxury-black dark:text-white hover:bg-blue-600 hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="p-3 bg-gray-50 dark:bg-gray-900 rounded-full text-luxury-black dark:text-white hover:bg-blue-600 hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="p-3 bg-gray-50 dark:bg-gray-900 rounded-full text-luxury-black dark:text-white hover:bg-blue-600 hover:text-white transition-colors">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-reveal bg-gray-50 dark:bg-gray-900/50 p-8 md:p-12 rounded-3xl">
                        <form ref={formRef} className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-luxury-black dark:text-white uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-4 text-lg text-luxury-black dark:text-white focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-luxury-black dark:text-white uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-4 text-lg text-luxury-black dark:text-white focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-luxury-black dark:text-white uppercase tracking-wider">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-4 text-lg text-luxury-black dark:text-white focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400 resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <MagneticButton className="w-full py-5 bg-luxury-black dark:bg-white text-white dark:text-luxury-black rounded-full font-bold text-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2">
                                    Send Message <Send size={20} />
                                </MagneticButton>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;
