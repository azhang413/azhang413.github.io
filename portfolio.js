import React, { useState } from 'react';
import { Linkedin, Github, FileText, Moon, Sun, Music } from 'lucide-react';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sample job experiences data
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Led development of scalable web applications using React and Node.js, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description: "Built responsive web applications from ground up, collaborated with design team, and optimized database performance."
    },
    {
      title: "Software Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed client websites and web applications, maintained legacy codebases, and integrated third-party APIs."
    }
  ];

  // Mock Spotify data
  const currentTrack = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    albumCover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
  };

  const themeClasses = isDarkMode 
    ? 'bg-slate-900 text-amber-50' 
    : 'bg-amber-50 text-slate-900';

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`} 
         style={{ fontFamily: 'Cinzel, serif' }}>
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-4">
            {/* Social Icons */}
            <a href="https://linkedin.com" 
               className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                 isDarkMode ? 'bg-slate-800/70 hover:bg-slate-700/70' : 'bg-white/70 hover:bg-white/90'
               }`}>
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" 
               className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                 isDarkMode ? 'bg-slate-800/70 hover:bg-slate-700/70' : 'bg-white/70 hover:bg-white/90'
               }`}>
              <Github size={24} />
            </a>
            <a href="/resume.pdf" 
               className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                 isDarkMode ? 'bg-slate-800/70 hover:bg-slate-700/70' : 'bg-white/70 hover:bg-white/90'
               }`}>
              <FileText size={24} />
            </a>
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
              isDarkMode ? 'bg-slate-800/70 hover:bg-slate-700/70' : 'bg-white/70 hover:bg-white/90'
            }`}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-wide">
                Your Name
              </h1>
              <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
                A passionate software engineer crafting elegant solutions to complex problems. 
                I specialize in full-stack development with a keen eye for design and user experience.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-30 ${
                  isDarkMode ? 'bg-amber-200' : 'bg-slate-900'
                }`}></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover border-4 border-white/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-wide">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} 
                   className={`p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] ${
                     isDarkMode ? 'bg-slate-800/30' : 'bg-white/30'
                   }`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <h4 className="text-xl opacity-80">{exp.company}</h4>
                  </div>
                  <span className={`text-lg font-medium mt-2 lg:mt-0 ${
                    isDarkMode ? 'text-amber-200' : 'text-slate-600'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg leading-relaxed opacity-90">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`p-8 rounded-2xl backdrop-blur-md ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-white/30'
          }`}>
            <div className="flex items-center justify-center mb-6">
              <Music className="mr-3" size={32} />
              <h3 className="text-2xl font-semibold">Currently Playing</h3>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              <img
                src={currentTrack.albumCover}
                alt={currentTrack.album}
                className="w-32 h-32 rounded-lg shadow-lg"
              />
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-semibold mb-2">{currentTrack.title}</h4>
                <p className="text-lg opacity-80 mb-1">{currentTrack.artist}</p>
                <p className="opacity-60">{currentTrack.album}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center opacity-60">
        <p className="text-lg">
          © 2025 Your Name. Crafted with passion and precision.
        </p>
      </footer>

      {/* Load Cinzel font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default Portfolio;