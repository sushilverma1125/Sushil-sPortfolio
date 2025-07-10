import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import photo from '../assets/photo.jpeg'; // <-- import your image here

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl overflow-hidden">
              <img
                src={photo} // Use the imported photo here
                alt="Your Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Sushil Kumar Verma
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            UI/UX Designer & Full-Stack Developer passionate about creating
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {' '}
              beautiful, user-centered digital experiences
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
            onClick={() => window.location.href = 'mailto:sushilverma1125@gmail.com'}
            className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2"
          >
            <Mail size={20} />
            <span>Get in Touch</span>
          </button>
            <a
              href="https://drive.google.com/file/d/1_g2ylNi0-R0kXiro21UkH4bl8xZTHmud/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/sushilverma1125"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group"
            >
              <Github
                size={24}
                className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              />
            </a>
            <a
              href="https://linkedin.com/in/sushilverma1125/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group"
            >
              <Linkedin
                size={24}
                className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              />
            </a>
            <a
              href="mailto:sushilverma1125@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group"
            >
              <Mail
                size={24}
                className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-200"
        >
          <ArrowDown size={24} className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
