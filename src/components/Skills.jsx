import { Database, Layout, Terminal, Palette, Sparkles, Zap } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered card reveal
      gsap.fromTo(".skill-card",
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-7 h-7" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "TypeScript", "HTML5/CSS3"]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-7 h-7" />,
      gradient: "from-purple-500 to-pink-500",
      skills: ["Figma", "Adobe XD", "UI/UX Principles", "Wireframing", "Prototyping"]
    },
    {
      title: "Backend",
      icon: <Database className="w-7 h-7" />,
      gradient: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST APIs"]
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal className="w-7 h-7" />,
      gradient: "from-orange-500 to-yellow-500",
      skills: ["Git/GitHub", "VS Code", "Webpack", "Vite", "Postman", "Docker"]
    },
    {
      title: "Soft Skills",
      icon: <Zap className="w-7 h-7" />,
      gradient: "from-pink-500 to-rose-500",
      skills: ["Problem Solving", "Communication", "Teamwork", "Mentoring", "Agile/Scrum"]
    }
  ];

  return (
    <div id="skills" ref={skillsRef} className="relative min-h-screen py-24 bg-luxury-light dark:bg-luxury-black overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">Hybrid Developer + Designer</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-luxury-black dark:text-white mb-6">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Expertise</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body leading-relaxed">
            A powerful fusion of <span className="text-blue-600 dark:text-blue-400 font-semibold">technical mastery</span> and <span className="text-purple-600 dark:text-purple-400 font-semibold">creative vision</span>, enabling me to build digital products that are both beautiful and functional.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 auto-rows-fr">

          {/* Frontend Development - Large (spans 3 cols, 2 rows) */}
          <div className="skill-card group relative md:col-span-2 lg:col-span-3">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillCategories[0].gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
            <div className="relative h-full p-8 bg-white dark:bg-luxury-gray rounded-2xl border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/10" />
              <div className="relative z-10">
                <div>
                  <div className={`skill-icon inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${skillCategories[0].gradient} text-white mb-6 shadow-lg`}>
                    {skillCategories[0].icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-luxury-black dark:text-white mb-6">
                    {skillCategories[0].title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[0].skills.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 text-sm font-medium bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* UI/UX Design - Large (spans 3 cols, 2 rows) */}
          <div className="skill-card group relative md:col-span-2 lg:col-span-3">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillCategories[1].gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
            <div className="relative h-full p-8 bg-white dark:bg-luxury-gray rounded-2xl border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/30 dark:from-purple-950/20 dark:via-transparent dark:to-pink-950/10" />
              <div className="relative z-10">
                <div className={`skill-icon inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${skillCategories[1].gradient} text-white mb-6 shadow-lg`}>
                  {skillCategories[1].icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-luxury-black dark:text-white mb-6">
                  {skillCategories[1].title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[1].skills.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 text-sm font-medium bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Backend - Medium */}
          <div className="skill-card group relative md:col-span-2 lg:col-span-2">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillCategories[2].gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
            <div className="relative h-full p-6 bg-white dark:bg-luxury-gray rounded-2xl border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-emerald-50/30 dark:from-green-950/20 dark:via-transparent dark:to-emerald-950/10" />
              <div className="relative z-10">
                <div className={`skill-icon inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${skillCategories[2].gradient} text-white mb-4 shadow-lg`}>
                  {skillCategories[2].icon}
                </div>
                <h3 className="text-xl font-display font-bold text-luxury-black dark:text-white mb-4">
                  {skillCategories[2].title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[2].skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-xs font-medium bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-500/50 hover:bg-green-50/50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Workflow - Medium */}
          <div className="skill-card group relative md:col-span-2 lg:col-span-2">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillCategories[3].gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
            <div className="relative h-full p-6 bg-white dark:bg-luxury-gray rounded-2xl border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-yellow-50/30 dark:from-orange-950/20 dark:via-transparent dark:to-yellow-950/10" />
              <div className="relative z-10">
                <div className={`skill-icon inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${skillCategories[3].gradient} text-white mb-4 shadow-lg`}>
                  {skillCategories[3].icon}
                </div>
                <h3 className="text-xl font-display font-bold text-luxury-black dark:text-white mb-4">
                  {skillCategories[3].title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[3].skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-xs font-medium bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 hover:bg-orange-50/50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills - Medium */}
          <div className="skill-card group relative md:col-span-2 lg:col-span-2">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillCategories[4].gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
            <div className="relative h-full p-6 bg-white dark:bg-luxury-gray rounded-2xl border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-rose-50/30 dark:from-pink-950/20 dark:via-transparent dark:to-rose-950/10" />
              <div className="relative z-10">
                <div className={`skill-icon inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${skillCategories[4].gradient} text-white mb-4 shadow-lg`}>
                  {skillCategories[4].icon}
                </div>
                <h3 className="text-xl font-display font-bold text-luxury-black dark:text-white mb-4">
                  {skillCategories[4].title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[4].skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-xs font-medium bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-pink-500/50 hover:bg-pink-50/50 dark:hover:bg-pink-900/20 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-500 font-body">
            Always learning, always growing. Let's build something amazing together.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
