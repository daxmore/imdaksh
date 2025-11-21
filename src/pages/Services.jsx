import { Monitor, PenTool, Users, Rocket, Search, Smartphone } from 'lucide-react';

const Services = () => {

    const services = [
        {
            title: "Web Development",
            description: "Building fast, responsive, and scalable websites using modern technologies like React and Next.js.",
            icon: <Monitor className="w-8 h-8" />,
            features: ["Custom Frontend Architecture", "Performance Optimization", "SEO Best Practices"]
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and visually appealing interfaces that provide seamless user experiences.",
            icon: <PenTool className="w-8 h-8" />,
            features: ["User Research", "Wireframing & Prototyping", "Design Systems"]
        },
        {
            title: "Mobile-First Design",
            description: "Ensuring your website looks and performs perfectly on all devices, from smartphones to desktops.",
            icon: <Smartphone className="w-8 h-8" />,
            features: ["Responsive Layouts", "Touch-Friendly Interfaces", "Adaptive Content"]
        },
        {
            title: "Technical Mentorship",
            description: "Guiding aspiring developers through their learning journey with personalized roadmaps and code reviews.",
            icon: <Users className="w-8 h-8" />,
            features: ["Code Reviews", "Career Guidance", "Pair Programming"]
        },
        {
            title: "Performance Tuning",
            description: "Optimizing existing applications for speed, accessibility, and better search engine ranking.",
            icon: <Rocket className="w-8 h-8" />,
            features: ["Core Web Vitals", "Code Splitting", "Asset Optimization"]
        },
        {
            title: "SEO Strategy",
            description: "Implementing technical SEO foundations to help your website rank higher and reach more users.",
            icon: <Search className="w-8 h-8" />,
            features: ["Meta Tag Optimization", "Semantic HTML", "Sitemap Generation"]
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 bg-luxury-light dark:bg-luxury-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-luxury-black dark:text-white mb-6">
                        Services
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                        Specialized solutions tailored to your digital needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card group p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5"
                        >
                            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl w-fit text-luxury-black dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-display font-bold text-luxury-black dark:text-white mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;
