import React from 'react';
import { Building2, Calendar, TrendingUp, Users, Zap } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: "Busibud",
    position: "UI/UX Design Intern",
    period: "November 2024 - December 2024",
    location: "Remote",
    description: "Completed a one-week trial internship where I revamped Chauffeur's live chat software UI, improving usability and visual appeal, leading to a 15% increase in user engagement.",
    achievements: [
      {
        icon: TrendingUp,
        title: "15% User Engagement Increase",
        description: "Improved usability and visual appeal of live chat software UI"
      },
      {
        icon: Users,
        title: "10+ Design Changes Implemented",
        description: "Collaborated with developers and stakeholders to refine designs"
      },
      {
        icon: Zap,
        title: "Enhanced User Experience",
        description: "Applied design thinking principles and usability testing"
      }
    ],
    skills: [
      "Wireframing & Prototyping",
      "User Research",
      "Usability Testing",
      "Design Systems",
      "Cross-functional Collaboration"
    ],
    tools: ["Figma", "Zulip"]
  };

  const certificates = [
    {
      title: "Learn to code with AI",
      provider: "Scrimba",
      date: "April 2024",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Masterclass on Figma Mastery",
      provider: "Physics Wallah",
      date: "February 2024",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Building web applications in PHP",
      provider: "Coursera",
      date: "December 2023",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Learning
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Gaining hands-on experience in UI/UX design while continuously learning 
            and staying updated with the latest industry trends and technologies.
          </p>
        </div>

        {/* Experience */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16 transition-colors duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8">
            <div className="flex items-center text-white mb-4">
              <Building2 size={24} className="mr-3" />
              <h3 className="text-2xl font-bold">{experience.company}</h3>
            </div>
            <h4 className="text-xl font-semibold text-blue-100 mb-2">
              {experience.position}
            </h4>
            <div className="flex items-center text-blue-100">
              <Calendar size={16} className="mr-2" />
              <span>{experience.period}</span>
              <span className="mx-2">•</span>
              <span>{experience.location}</span>
            </div>
          </div>

          <div className="p-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {experience.description}
            </p>

            {/* Key Achievements */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {experience.achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-xl mb-4">
                      <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Skills & Tools */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Skills Developed</h5>
                <div className="space-y-2">
                  {experience.skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Tools Used</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certificates & Continuous Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-full h-32 bg-gradient-to-r ${cert.color} rounded-xl mb-6 flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-1">CERT</div>
                    <div className="text-sm opacity-90">Certificate</div>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{cert.provider}</p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
