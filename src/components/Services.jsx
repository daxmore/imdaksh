import { Monitor, PenTool, Users, Rocket, Search, Smartphone, Sparkles } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const servicesRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered card reveal
            gsap.fromTo(".service-card",
                { y: 100, opacity: 0, rotateX: 15 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Light sweep animation on scroll
            gsap.to(".light-sweep", {
                x: "200%",
                duration: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: servicesRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse"
                }
            });

        }, servicesRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            title: "Web Development",
            description: "Building fast, responsive, and scalable websites using modern technologies like React and Next.js.",
            icon: <Monitor className="w-8 h-8" />,
            gradient: "from-blue-500 to-cyan-500",
            features: ["Custom Frontend Architecture", "Performance Optimization", "SEO Best Practices"]
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and visually appealing interfaces that provide seamless user experiences.",
            icon: <PenTool className="w-8 h-8" />,
            gradient: "from-purple-500 to-pink-500",
            features: ["User Research", "Wireframing & Prototyping", "Design Systems"]
        },
        {
            title: "Mobile-First Design",
            description: "Ensuring your website looks and performs perfectly on all devices, from smartphones to desktops.",
            icon: <Smartphone className="w-8 h-8" />,
            gradient: "from-green-500 to-emerald-500",
            features: ["Responsive Layouts", "Touch-Friendly Interfaces", "Adaptive Content"]
        },
        {
            title: "Technical Mentorship",
            description: "Guiding aspiring developers through their learning journey with personalized roadmaps and code reviews.",
            icon: <Users className="w-8 h-8" />,
            gradient: "from-orange-500 to-yellow-500",
            features: ["Code Reviews", "Career Guidance", "Pair Programming"]
        },
        {
            title: "Performance Tuning",
            description: "Optimizing existing applications for speed, accessibility, and better search engine ranking.",
            icon: <Rocket className="w-8 h-8" />,
            gradient: "from-pink-500 to-rose-500",
            features: ["Core Web Vitals", "Code Splitting", "Asset Optimization"]
        },
        {
            title: "SEO Strategy",
            description: "Implementing technical SEO foundations to help your website rank higher and reach more users.",
            icon: <Search className="w-8 h-8" />,
            gradient: "from-indigo-500 to-purple-500",
            features: ["Meta Tag Optimization", "Semantic HTML", "Sitemap Generation"]
        }
    ];

    return (
        <div id="services" ref={servicesRef} className="relative min-h-screen pt-24 pb-20 bg-luxury-light dark:bg-luxury-black overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400 tracking-wider uppercase">What I Offer</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-luxury-black dark:text-white mb-6">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">Services</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body leading-relaxed">
                        Specialized solutions that blend <span className="text-purple-600 dark:text-purple-400 font-semibold">creative design</span> with <span className="text-blue-600 dark:text-blue-400 font-semibold">technical excellence</span>, tailored to elevate your digital presence.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card group relative"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-35 blur-xl transition-all duration-500`} />

                            {/* Glass Card */}
                            <div className="relative h-full p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-500 overflow-hidden">

                                {/* Light Sweep Effect */}
                                <div className="light-sweep absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full pointer-events-none" />

                                {/* Gradient Background Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        {service.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-display font-bold text-luxury-black dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} group-hover:scale-150 transition-transform duration-300`} />
                                                <span className="group-hover:text-luxury-black dark:group-hover:text-white transition-colors duration-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Decorative Corner Element */}
                                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <p className="text-gray-500 dark:text-gray-500 font-body">
                        Ready to bring your vision to life? Let's collaborate and create something extraordinary.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Services;
