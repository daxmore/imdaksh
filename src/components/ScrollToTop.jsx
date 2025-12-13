import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setScrollProgress(progress);
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // SVG Circle properties for progress ring
    const circleRadius = 22;
    const circumference = 2 * Math.PI * circleRadius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 group"
                    aria-label="Scroll to top"
                >
                    {/* Outer container with glassmorphism */}
                    <div className="relative w-14 h-14 flex items-center justify-center">

                        {/* Background glass effect */}
                        <div className="absolute inset-0 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-gray-200/50 dark:shadow-black/30 border border-gray-200/50 dark:border-gray-700/50" />

                        {/* Progress ring */}
                        <svg
                            className="absolute inset-0 w-full h-full -rotate-90"
                            viewBox="0 0 56 56"
                        >
                            {/* Background circle */}
                            <circle
                                cx="28"
                                cy="28"
                                r={circleRadius}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-gray-200 dark:text-gray-700"
                            />
                            {/* Progress circle */}
                            <motion.circle
                                cx="28"
                                cy="28"
                                r={circleRadius}
                                fill="none"
                                stroke="url(#progressGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                initial={{ strokeDashoffset: circumference }}
                                animate={{ strokeDashoffset }}
                                transition={{ duration: 0.1, ease: "easeOut" }}
                            />
                            {/* Gradient definition */}
                            <defs>
                                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3b82f6" />
                                    <stop offset="50%" stopColor="#8b5cf6" />
                                    <stop offset="100%" stopColor="#ec4899" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Arrow icon */}
                        <motion.div
                            className="relative z-10 text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                            animate={{ y: [0, -2, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <ArrowUp size={20} strokeWidth={2.5} />
                        </motion.div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent blur-sm" />
                    </div>

                    {/* Tooltip */}
                    <motion.span
                        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        initial={{ x: 10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                    >
                        Back to top
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45" />
                    </motion.span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
