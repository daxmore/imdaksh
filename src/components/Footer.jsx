import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-white dark:bg-luxury-black border-t-2 border-luxury-black dark:border-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

                    {/* Brand Section */}
                    <div className="lg:col-span-5">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-luxury-black dark:text-white mb-6 leading-tight">
                            Let's Build<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Something Great.</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                            Ready to bring your vision to life? Let's collaborate and create digital experiences that matter.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#about" className="group flex items-center gap-2 text-lg font-medium text-luxury-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    About
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="group flex items-center gap-2 text-lg font-medium text-luxury-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Skills
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="group flex items-center gap-2 text-lg font-medium text-luxury-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Services
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="group flex items-center gap-2 text-lg font-medium text-luxury-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Contact
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Get In Touch</h3>
                        <div className="space-y-4">
                            <a href="mailto:hello@example.com" className="block text-lg font-medium text-luxury-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                hello@example.com
                            </a>
                            <a href="tel:+15551234567" className="block text-lg font-medium text-luxury-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                +1 (555) 123-4567
                            </a>
                            <p className="text-gray-600 dark:text-gray-400">
                                San Francisco, CA
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="pt-8 border-t-2 border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="group p-4 border-2 border-gray-200 dark:border-gray-800 hover:border-luxury-black dark:hover:border-white hover:bg-luxury-black dark:hover:bg-white transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5 text-luxury-black dark:text-white group-hover:text-white dark:group-hover:text-luxury-black transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="group p-4 border-2 border-gray-200 dark:border-gray-800 hover:border-luxury-black dark:hover:border-white hover:bg-luxury-black dark:hover:bg-white transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-luxury-black dark:text-white group-hover:text-white dark:group-hover:text-luxury-black transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="group p-4 border-2 border-gray-200 dark:border-gray-800 hover:border-luxury-black dark:hover:border-white hover:bg-luxury-black dark:hover:bg-white transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5 text-luxury-black dark:text-white group-hover:text-white dark:group-hover:text-luxury-black transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="group p-4 border-2 border-gray-200 dark:border-gray-800 hover:border-luxury-black dark:hover:border-white hover:bg-luxury-black dark:hover:bg-white transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5 text-luxury-black dark:text-white group-hover:text-white dark:group-hover:text-luxury-black transition-colors" />
                            </a>
                        </div>

                        {/* Copyright */}
                        <div className="text-gray-500 dark:text-gray-400 text-sm">
                            <p>© {new Date().getFullYear()} All rights reserved. Crafted with passion.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
