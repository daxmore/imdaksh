import { useEffect, useRef } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SelectedWork = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax background effect
            gsap.to('.parallax-bg', {
                y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
                ease: 'none',
                scrollTrigger: {
                    start: 0,
                    end: 'max',
                    invalidateOnRefresh: true,
                    scrub: 0
                }
            });

            // Project cards scroll animations
            const cards = gsap.utils.toArray('.work-card');

            cards.forEach((card) => {
                // Clip-path image reveal
                gsap.fromTo(card.querySelector('.work-image'),
                    {
                        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                        scale: 1.2
                    },
                    {
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        scale: 1,
                        duration: 1.4,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Card entrance with depth
                gsap.fromTo(card,
                    {
                        y: 100,
                        opacity: 0,
                        rotateX: 15
                    },
                    {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Content fade and slide
                gsap.fromTo(card.querySelector('.work-content'),
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: 0.3,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Tech tags stagger animation
                gsap.fromTo(card.querySelectorAll('.tech-tag'),
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.08,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            title: "E-Commerce Dashboard",
            category: "Web Application",
            description: "A comprehensive analytics dashboard for online retailers. Features real-time data visualization, inventory management, and sales reporting with an intuitive interface.",
            tech: ["React", "Tailwind", "Recharts", "Node.js"],
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            glowColor: "rgba(14, 165, 233, 0.4)",
            accentColor: "primary-500",
            links: { demo: "#", github: "#" },
            featured: true
        },
        {
            title: "Task Management App",
            category: "Productivity Tool",
            description: "A collaborative task manager with drag-and-drop functionality, team workspaces, and real-time updates. Built for modern teams.",
            tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            glowColor: "rgba(168, 85, 247, 0.4)",
            accentColor: "secondary-500",
            links: { demo: "#", github: "#" },
            featured: true
        },
        {
            title: "Portfolio v1",
            category: "Personal Website",
            description: "My previous portfolio website built with vanilla JavaScript and SCSS. Showcases my evolution as a developer through clean design and smooth animations.",
            tech: ["HTML", "SCSS", "JavaScript", "GSAP"],
            gradient: "from-indigo-500 via-violet-500 to-purple-500",
            glowColor: "rgba(99, 102, 241, 0.4)",
            accentColor: "accent-500",
            links: { demo: "#", github: "#" },
            featured: true
        }
    ];

    return (
        <div id="projects" ref={containerRef} className="relative min-h-screen pt-32 pb-32 overflow-hidden">

            {/* Parallax Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="parallax-bg absolute top-0 left-0 w-full h-full opacity-30"
                    data-speed="0.3"
                    style={{
                        background: 'radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)'
                    }}
                />
                <div
                    className="parallax-bg absolute top-0 right-0 w-full h-full opacity-30"
                    data-speed="0.5"
                    style={{
                        background: 'radial-gradient(circle at 80% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)'
                    }}
                />
                <div
                    className="parallax-bg absolute bottom-0 left-1/2 w-full h-full opacity-20"
                    data-speed="0.4"
                    style={{
                        background: 'radial-gradient(circle at 50% 90%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="mb-20">
                    <div className="flex items-center gap-6 mb-2 md:mb-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
                        <h1 className="text-5xl text-center md:text-7xl font-display font-bold">
                            Selected Work
                        </h1>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
                    </div>
                    <p className="max-sm:px-6 text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A curated collection of projects showcasing my expertise in front-end development and UI/UX design
                    </p>
                </div>

                {/* Asymmetric Grid */}
                <div className="space-y-24">
                    {projects.map((project, index) => {
                        const isLarge = project.featured;
                        const isReversed = index % 2 === 1;

                        return (
                            <div
                                key={index}
                                className={`work-card group relative ${isLarge ? 'lg:grid lg:grid-cols-12 gap-8' : 'max-w-4xl mx-auto'
                                    }`}
                            >
                                {/* Card Container with Neon Border */}
                                <div className={`
                                    relative rounded-3xl overflow-hidden
                                    bg-white dark:bg-luxury-dark
                                    border-2 border-transparent
                                    ${isLarge ? 'lg:col-span-12' : ''}
                                `}>

                                    {/* Animated Neon Border */}
                                    <div
                                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background: `linear-gradient(135deg, ${project.glowColor}, transparent)`,
                                            padding: '2px',
                                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            WebkitMaskComposite: 'xor',
                                            maskComposite: 'exclude'
                                        }}
                                    />

                                    {/* Gradient Glow Effect */}
                                    <div
                                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                                        style={{
                                            background: `linear-gradient(135deg, ${project.glowColor}, transparent)`
                                        }}
                                    />

                                    <div className={`grid ${isLarge ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>

                                        {/* Project Image */}
                                        <div className={`relative overflow-hidden ${isLarge && isReversed ? 'lg:order-2' : ''}`}>
                                            <div className="work-image relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
                                                {/* Gradient Background */}
                                                <div className={`
                                                    absolute inset-0 bg-gradient-to-br ${project.gradient}
                                                    transition-transform duration-700 group-hover:scale-110
                                                `}>
                                                    {/* Pattern Overlay */}
                                                    <div className="absolute inset-0 opacity-20">
                                                        <div className="absolute inset-0" style={{
                                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                                            backgroundSize: '30px 30px'
                                                        }} />
                                                    </div>

                                                    {/* Project Number */}
                                                    <div className="absolute top-8 right-8 text-white/10 text-9xl font-display font-bold select-none">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </div>

                                                    {/* Soft Lighting Effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Content */}
                                        <div className={`work-content p-4 lg:p-12 flex flex-col justify-center ${isLarge && isReversed ? 'lg:order-1' : ''}`}>

                                            {/* Category Badge */}
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className={`w-12 h-[2px] bg-gradient-to-r ${project.gradient}`} />
                                                <span className="text-sm font-medium tracking-wider uppercase bg-gradient-to-r bg-clip-text text-transparent from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                                                    {project.category}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                                {project.title}
                                            </h2>

                                            {/* Description */}
                                            <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed mb-8">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-3 mb-10">
                                                {project.tech.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="tech-tag px-4 py-2 bg-gray-50 dark:bg-luxury-gray text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 cursor-default"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Links */}
                                            <div className="flex flex-wrap gap-6">
                                                <a
                                                    href={project.links.demo}
                                                    className="group/link flex items-center gap-2 text-luxury-black dark:text-white font-semibold hover:gap-3 transition-all duration-300"
                                                >
                                                    <span className="relative">
                                                        Live Demo
                                                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${project.gradient} group-hover/link:w-full transition-all duration-300`} />
                                                    </span>
                                                    <ArrowUpRight
                                                        size={20}
                                                        className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform duration-300"
                                                    />
                                                </a>

                                                <a
                                                    href={project.links.github}
                                                    className="group/link flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-luxury-black dark:hover:text-white font-medium transition-colors duration-300"
                                                >
                                                    <Github size={20} className="group-hover/link:rotate-12 transition-transform duration-300" />
                                                    <span>Source Code</span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Depth Layers */}
                                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-luxury-gray/50 dark:to-luxury-black/50 -z-20 blur-sm opacity-50" />
                                <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-gray-50 to-transparent dark:from-luxury-gray/30 dark:to-transparent -z-30 blur-md opacity-30" />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 border border-primary-500/20 dark:border-primary-500/30">
                        <span className="text-gray-600 dark:text-gray-400">Want to see more?</span>
                        <a
                            href="#contact"
                            className="font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent hover:from-primary-500 hover:to-secondary-500 transition-all duration-300"
                        >
                            Let's talk →
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SelectedWork;
