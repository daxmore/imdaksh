import { Code, Database, Layout, Settings, Terminal, Cpu } from 'lucide-react';

const Skills = () => {

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      skills: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "TypeScript", "HTML5/CSS3"]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST APIs"]
    },
    {
      title: "Tools",
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      skills: ["Git/GitHub", "VS Code", "Webpack", "Vite", "Postman", "Docker"]
    },
    {
      title: "Design",
      icon: <Cpu className="w-6 h-6 text-pink-500" />,
      skills: ["Figma", "Adobe XD", "UI/UX Principles", "Wireframing", "Prototyping"]
    },
    {
      title: "Soft Skills",
      icon: <Settings className="w-6 h-6 text-orange-500" />,
      skills: ["Problem Solving", "Communication", "Teamwork", "Mentoring", "Agile/Scrum"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-luxury-light dark:bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-luxury-black dark:text-white mb-6">
            Skills & Expertise
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            A curated set of technologies and tools I use to build digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card group p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-blue-900/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-luxury-black dark:text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
