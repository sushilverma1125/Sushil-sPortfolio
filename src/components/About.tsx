import React from 'react';
import { User, Heart, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Passionate Designer",
      description: "Driven by the desire to create meaningful user experiences that solve real problems"
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Achieved 15% increase in user engagement through strategic UI/UX improvements"
    },
    {
      icon: Lightbulb,
      title: "Innovation Minded",
      description: "Always exploring new design trends and technologies to stay ahead of the curve"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate UI/UX Designer and Full-Stack Developer currently pursuing Computer Science Engineering at Lovely Professional University. 
            I specialize in creating intuitive, beautiful digital experiences that users love.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-300">
              <div className="flex items-center mb-4">
                <User className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Journey</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Recently completed a UI/UX Design trial internship at Busibud, where I successfully revamped live chat software UI, 
                leading to a 15% increase in user engagement. My approach combines technical expertise with creative design thinking.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With experience in multiple programming languages and design tools, I bridge the gap between design and development, 
                ensuring pixel-perfect implementations that deliver exceptional user experiences.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-800 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What Drives Me</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe great design is invisible - it solves problems so elegantly that users don't even notice it's there. 
                My goal is to create digital experiences that are not only beautiful but also intuitive, accessible, and impactful.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-xl">
                      <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Quick Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
                <div className="text-gray-600 dark:text-gray-400">Users Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Design Changes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-500 dark:text-teal-400 mb-2">15%</div>
                <div className="text-gray-600 dark:text-gray-400">Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-2">7.76</div>
                <div className="text-gray-600 dark:text-gray-400">Current CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;