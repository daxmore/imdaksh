import { Github, Linkedin, Twitter, ArrowRight, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        {
            name: 'X',
            href: 'https://twitter.com',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
            )
        },
        {
            name: 'Dribbble',
            href: 'https://dribbble.com',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            href: 'https://github.com',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        },
    ];

    return (
        <footer className="relative bg-gray-100 dark:bg-gray-950 pt-8 pb-8">
            <div className="max-w-full px-4 sm:px-6">

                {/* CTA Banner */}
                <div className="mb-8 p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-luxury-black dark:text-white text-center md:text-left">
                        Excited? <span className="opacity-60">Us too.</span> Let's get moving.
                    </h2>
                    <a
                        href="#contact"
                        className="btn-multilayer group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold whitespace-nowrap hover:bg-blue-700 transition-colors"
                    >
                        <span className="layer-1"></span>
                        <span className="layer-2"></span>
                        <span className="layer-3"></span>
                        <span className="btn-multilayer-text flex items-center gap-2">
                            Schedule a Call
                            <Video size={18} />
                        </span>
                    </a>
                </div>

                {/* Main Footer Grid - Bento Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">

                    {/* Logo Card - Large */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[250px]">
                        <div>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                                imdaksh<span className="text-blue-300">.</span>
                            </h3>
                            <p className="text-blue-200 text-lg">Full-Stack Developer</p>
                        </div>
                        <div className="flex items-center gap-2 mt-6">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-white/80 text-sm">Available for work</span>
                        </div>
                    </div>

                    {/* Navigation & Info Card */}
                    <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                        {/* Navigation Links */}
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wide"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="h-px bg-gray-200 dark:bg-gray-800 my-6" />

                        {/* Copyright & Legal */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                © {currentYear} imdaksh. All rights reserved.
                            </p>
                            <div className="flex gap-4">
                                <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                                    Terms
                                </Link>
                                <Link to="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                                    Privacy
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Social Links - Grid of Cards */}
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group"
                            aria-label={social.name}
                        >
                            <div className="transform group-hover:scale-110 transition-transform">
                                {social.icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
