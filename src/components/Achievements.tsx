import React from 'react';
import { Trophy, Medal, Award, Star, Users, Target } from 'lucide-react';

const Achievements = () => {
  const majorAchievements = [
    {
      icon: Trophy,
      title: "Dean's Top 10% Students",
      description: "Recognized among the top 10% students at university for academic performance and extra-curricular activities",
      date: "February 2025",
      color: "from-yellow-500 to-orange-500",
      category: ["Academic", "University Recognition"]
    },
    {
      icon: Medal,
      title: "Champion of Code-A-Haunt",
      description: "Outperformed 150+ teams in a 24-hour hackathon organized by Coding Blocks",
      date: "March 2024",
      color: "from-purple-500 to-indigo-500",
      category: ["Hackathon", "Competition"]
    },
    {
      icon: Award,
      title: "1st Runner-up in Build-A-Thon",
      description: "Secured top 3 position among numerous teams, demonstrating exceptional design and development skills",
      date: "April 2024",
      color: "from-blue-500 to-cyan-500",
      category: ["Competition", "Hackathon"]
    },
    {
      icon: Star,
      title: "3rd Runner-up Code Cubicle 2.0",
      description: "Achieved 4th place among 1,000+ participants in national-level hackathon",
      date: "July 2024",
      color: "from-green-500 to-emerald-500",
      category: ["National Event", "Hackathon"]
    }
  ];

  const sportsAchievements = [
    "2nd position in Long Jump (2015-16)",
    "3rd position in Long Jump (2017-18, 2018-19, 2019-20)",
    "1st position in Math's Exhibition (2018-19)",
    "3rd position in 1500mt & 800mt races (2018-19)",
    "Runners-up in Handball (2019-20)",
    "BSF Marathon - 942/1842 participants (2022)"
  ];

  const hackathonStats = [
    { label: "Hackathons Won", value: "3", icon: Trophy },
    { label: "Teams Competed Against", value: "1000+", icon: Users },
    { label: "Hours of Coding", value: "72+", icon: Target },
    { label: "Recognition Events", value: "10+", icon: Star }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A track record of excellence in academics, competitions, and leadership, 
            demonstrating consistent performance and recognition across various domains.
          </p>
        </div>

        {/* Major Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {majorAchievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${achievement.color} flex-shrink-0`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {achievement.category.map((cat, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} text-white mr-2`}>
                          {cat}
                        </span>
                      ))}
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-auto">{achievement.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8 mb-16 border border-blue-100 dark:border-blue-800 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Competition Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hackathonStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-4">
                    <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sports & Other Achievements */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sports Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50">
                <Medal className="text-orange-600 dark:text-orange-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                Sports & Athletics
              </h3>
            </div>
            <div className="space-y-4">
              {sportsAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Recognition */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50">
                <Award className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                Academic Excellence
              </h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Current Academic Standing</h4>
                <p className="text-green-700 dark:text-green-400 text-sm">CGPA: 8.00/10.0 - Consistently maintaining high academic performance</p>
              </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">University Recognition</h4>
                <p className="text-blue-700 dark:text-blue-400 text-sm">Among Dean's top 10% students for academic and extra-curricular excellence</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Research & Innovation</h4>
                <p className="text-purple-700 dark:text-purple-400 text-sm">Active participation in coding competitions and hackathons</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-white transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Add Value to Your Team
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              With a proven track record of excellence in competitions, academics, and real-world projects, 
              I'm excited to bring this same level of dedication and innovation to your organization.
            </p>
            <button
                onClick={() => window.open('https://www.linkedin.com/in/sushilverma1125/', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                Let's Connect
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
