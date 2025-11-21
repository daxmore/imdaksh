import { useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const projects = gsap.utils.toArray('.project-card');

            projects.forEach((project, i) => {
                // Image Reveal
                gsap.fromTo(project.querySelector('.project-image'),
                    { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                    {
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: project,
                            start: "top 75%",
                        }
                    }
                );

                // Content Slide
                gsap.fromTo(project.querySelector('.project-content'),
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: project,
                            start: "top 75%",
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
            description: "A comprehensive analytics dashboard for online retailers. Features real-time data visualization, inventory management, and sales reporting.",
            tech: ["React", "Tailwind", "Recharts", "Node.js"],
            image: "bg-blue-100 dark:bg-blue-900/20", // Placeholder color
            links: { demo: "#", github: "#" }
        },
        {
            title: "Task Management App",
            category: "Productivity Tool",
            description: "A collaborative task manager with drag-and-drop functionality, team workspaces, and real-time updates.",
            tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
            image: "bg-purple-100 dark:bg-purple-900/20", // Placeholder color
            links: { demo: "#", github: "#" }
        },
        {
            title: "Portfolio v1",
            category: "Personal Website",
            description: "My previous portfolio website built with vanilla JavaScript and SCSS. Showcases my growth as a developer.",
            tech: ["HTML", "SCSS", "JavaScript", "GSAP"],
            image: "bg-gray-100 dark:bg-gray-800", // Placeholder color
            links: { demo: "#", github: "#" }
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen pt-24 pb-20 bg-white dark:bg-luxury-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-24">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-luxury-black dark:text-white mb-6">
                        Selected Work
                    </h1>
                    <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-800"></div>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Project Image (Layered) */}
                            <div className={`lg:col-span-7 relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
                                    <div className={`project-image absolute inset-0 w-full h-full ${project.image} transition-transform duration-700 group-hover:scale-105`}>
                                        {/* Placeholder Content */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 font-display text-4xl font-bold opacity-20">
                                            {project.title}
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative Layer */}
                                <div className="absolute -inset-4 border border-gray-100 dark:border-gray-800 rounded-3xl -z-10 hidden lg:block"></div>
                            </div>

                            {/* Project Content */}
                            <div className="lg:col-span-5 project-content">
                                <span className="text-blue-600 font-medium tracking-wider uppercase text-sm mb-4 block">
                                    {project.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-luxury-black dark:text-white mb-6">
                                    {project.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800 text-luxury-black dark:text-gray-300 text-sm rounded-full border border-gray-100 dark:border-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6">
                                    <a href={project.links.demo} className="flex items-center gap-2 text-luxury-black dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                                        Live Demo <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a href={project.links.github} className="flex items-center gap-2 text-gray-500 hover:text-luxury-black dark:hover:text-white transition-colors">
                                        <Github size={20} /> Source Code
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Projects;
