import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Study Buddy",
      period: "March 2024 - June 2024",
      description: "An AI-powered full-stack platform designed for aspiring developers to master coding, prepare for interviews, and build optimized resumes with personalized career roadmaps and job tracking.",
      highlights: [
        "Architected a modular system integrating Streamlit frontend with FastAPI/Flask backend",
        "Enabled real-time code execution and AI-driven chat interactions",
        "Implemented ATS detection and LinkedIn scraping for profile optimization",
        "Built dynamic, personalized roadmaps and profile builders",
        "Aggregated job listings, hackathons, and learning resources into one dashboard"
      ],
      technologies: ["Streamlit", "FastAPI", "Flask", "Python", "JavaScript", "CodeMirror", "RAG-based NLP Models"],
      metrics: {
        users: "5000+",
        features: "15+",
        interviewReadinessImprovement: "30%"
      },
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveDemo: "https://college--buddy34.streamlit.app/",
      codeLink: "https://github.com/sushilverma1125/studybuddy/"
    },
    {
      title: "TechXpert",
      period: "February 2024 - March 2024",
      description: "Back-end system for an Ed-Tech platform developed during a 24-hour hackathon, supporting 200+ participants with optimized video conferencing.",
      highlights: [
        "Built during 24-hour hackathon",
        "30% improvement in video performance",
        "Real-time chat and screen sharing",
        "200+ participants supported"
      ],
      technologies: ["HTML", "CSS", "Node.js", "GeminiAPI", "MongoDB"],
      metrics: {
        participants: "200+",
        performance: "30%",
        duration: "24hrs"
      },
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveDemo: "https://techxpert.onrender.com/",
      codeLink: "https://github.com/sushilverma1125/TechXpert/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions and technical excellence through impactful projects 
            that demonstrate my ability to deliver scalable, user-focused applications.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white/90 text-gray-900 px-4 py-2 rounded-lg hover:bg-white transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="font-medium">Live Demo</span>
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-900/90 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <Github size={16} />
                        <span className="font-medium">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-300">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    {project.period}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <TrendingUp size={16} className="mr-2 text-green-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-800 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Want to see more projects?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out my GitHub profile for additional projects and contributions to open source.
            </p>
            <a 
              href="https://github.com/sushilverma1125"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
