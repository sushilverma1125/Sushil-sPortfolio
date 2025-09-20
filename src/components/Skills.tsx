import React from 'react';
import { Code2, Palette, Database, PenTool as Tool, Eye, MessageCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design Skills",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", level: 95 },
        { name: "UI/UX Design", level: 88 },
        { name: "Wireframing", level: 85 },
        { name: "Prototyping", level: 87 },
        { name: "Sketch", level: 75 }
      ]
    },
    {
      icon: Eye,
      title: "Visual Design",
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Typography", level: 88 },
        { name: "Color Theory", level: 85 },
        { name: "Layout Design", level: 90 },
        { name: "Visual Hierarchy", level: 87 },
        { name: "Brand Identity", level: 80 }
      ]
    },
    {
      icon: Code2,
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 92 },
        { name: "Bootstrap", level: 80 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 78 },
        { name: "API Development", level: 82 }
      ]
    },
    {
      icon: Tool,
      title: "Tools & Others",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "C/C++", level: 80 },
        { name: "Problem Solving", level: 88 },
        { name: "User Research", level: 85 }
      ]
    },
    {
      icon: MessageCircle,
      title: "UX & Communication",
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "User Flows", level: 87 },
        { name: "Usability Testing", level: 83 },
        { name: "Clear Communication", level: 90 },
        { name: "Feedback Reception", level: 88 },
        { name: "Team Collaboration", level: 90 }
      ]
    }
  ];

  const softSkills = [
    "Driven", "Resilient", "Innovative", "Perceptive", "Detail-oriented"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning design, development, and problem-solving, 
            with a focus on creating exceptional user experiences and clear communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700 font-medium hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/50 dark:hover:to-cyan-900/50 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
