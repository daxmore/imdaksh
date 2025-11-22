import { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const navCards = [
        {
            title: 'About',
            links: [
                { name: 'My Story', href: '#about' },
                { name: 'Experience', href: '#about' },
                { name: 'Skills', href: '#skills' }
            ]
        },
        {
            title: 'Work',
            links: [
                { name: 'Selected Projects', href: '#work' },
                { name: 'Case Studies', href: '#work' },
                { name: 'Featured', href: '#work' }
            ]
        },
        {
            title: 'Services',
            links: [
                { name: 'Web Development', href: '#services' },
                { name: 'UI/UX Design', href: '#services' },
                { name: 'Consulting', href: '#services' }
            ]
        },
        {
            title: 'Contact',
            links: [
                { name: 'Email', href: '#contact' },
                { name: 'LinkedIn', href: '#contact' },
                { name: 'Twitter', href: '#contact' }
            ]
        }
    ];

    const handleLinkClick = (href) => {
        setIsOpen(false);
        setTimeout(() => {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    return (
        <>
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-[60] bg-transparent">
                <div className="max-w-[95%] mx-auto py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="text-2xl font-display font-bold text-luxury-black dark:text-white">
                        imdaksh<span className="text-blue-600">.</span>
                    </a>

                    <div className="flex items-center gap-4">

                        {/* Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2.5 text-luxury-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Desktop: Dropdown Cards */}
                        <motion.div
                            ref={menuRef}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="hidden md:block fixed top-20 left-[10%] z-[60] w-[80%] max-w-6xl"
                        >
                            <div className="bg-white dark:bg-luxury-gray rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                {/* Navigation Cards Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800">
                                    {navCards.map((card, index) => (
                                        <motion.div
                                            key={card.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                            className="p-8 bg-gray-900 dark:bg-gray-950 hover:bg-gray-800 dark:hover:bg-gray-900 transition-colors duration-300"
                                        >
                                            {/* Card Title */}
                                            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                                                {card.title}
                                            </h2>

                                            {/* Card Links */}
                                            <ul className="space-y-3">
                                                {card.links.map((link) => (
                                                    <li key={link.name}>
                                                        <a
                                                            href={link.href}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleLinkClick(link.href);
                                                            }}
                                                            className="group/link flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                                                        >
                                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                                            <span className="text-base">{link.name}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Mobile: Full-Screen Simple Menu */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden fixed inset-0 z-[60] bg-gray-950"
                        >
                            <div className="h-full flex flex-col">
                                {/* Mobile Header */}
                                <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                                    <a href="/" className="text-2xl font-display font-bold text-white">
                                        imdaksh<span className="text-blue-600">.</span>
                                    </a>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-white hover:bg-gray-900 rounded-full transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Mobile Navigation */}
                                <nav className="flex-1 overflow-y-auto px-6 py-8">
                                    {navCards.map((section, index) => (
                                        <motion.div
                                            key={section.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                            className="mb-10"
                                        >
                                            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                                                {section.title}
                                            </h2>
                                            <ul className="space-y-1">
                                                {section.links.map((link) => (
                                                    <li key={link.name}>
                                                        <a
                                                            href={link.href}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleLinkClick(link.href);
                                                            }}
                                                            className="block py-3 text-xl font-medium text-white hover:text-blue-400 transition-colors"
                                                        >
                                                            {link.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Mobile Footer */}
                                <div className="border-t border-gray-800 px-6 py-6">
                                    <a
                                        href="#contact"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick('#contact');
                                        }}
                                        className="block w-full py-4 bg-white text-luxury-black text-center rounded-full font-bold hover:opacity-80 transition-opacity"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
