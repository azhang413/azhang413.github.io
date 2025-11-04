const { useState } = React;
const { Linkedin, Github, FileText, Moon, Sun, Music } = lucide;

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

  return React.createElement('div', {
    className: `min-h-screen transition-all duration-500 ${themeClasses}`,
    style: { fontFamily: 'Cinzel, serif' }
  }, [
    // Navigation Bar
    React.createElement('nav', { 
      key: 'nav',
      className: 'fixed top-0 left-0 right-0 z-50 p-6' 
    }, 
      React.createElement('div', { className: 'flex justify-between items-center max-w-7xl mx-auto' }, [
        React.createElement('div', { 
          key: 'social-icons',
          className: 'flex space-x-4' 
        }, [
          React.createElement('a', {
            key: 'linkedin',
            href: 'https://linkedin.com',
            className: `p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
              isDarkMode ? 'bg-slate-800/70 hover:bg-slate-700/70' : 'bg-white/70 hover:bg-white/90'
            }`
          }, React.createElement(Linkedin, { size: 24 })),
          
          React.createElement('a', {
            key: 'github',
            href: 'https://github.com',
            className: `p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
              isDarkMode ? 'bg-slate-800/70 hover:bg-slate-700/70' : 'bg-white/70 hover:bg-white/90'
            }`
          }, React.createElement(Github, { size: 24 })),
          
          React.createElement('a', {
            key: 'resume',
            href: './resume.pdf',
            className: `p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
              isDarkMode ? 'bg-slate-800/70 hover:bg-slate-700/70' : 'bg-white/70 hover:bg-white/90'
            }`
          }, React.createElement(FileText, { size: 24 }))
        ]),
        
        React.createElement('button', {
          key: 'theme-toggle',
          onClick: () => setIsDarkMode(!isDarkMode),
          className: `p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
            isDarkMode ? 'bg-slate-800/70 hover:bg-slate-700/70' : 'bg-white/70 hover:bg-white/90'
          }`
        }, isDarkMode ? React.createElement(Sun, { size: 24 }) : React.createElement(Moon, { size: 24 }))
      ])
    ),

    // Hero Section
    React.createElement('section', { 
      key: 'hero',
      className: 'pt-32 pb-20 px-6' 
    },
      React.createElement('div', { className: 'max-w-7xl mx-auto' },
        React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-3 gap-12 items-center' }, [
          React.createElement('div', { 
            key: 'intro',
            className: 'lg:col-span-2 text-left' 
          }, [
            React.createElement('h1', { 
              key: 'name',
              className: 'text-5xl lg:text-7xl font-bold mb-6 tracking-wide' 
            }, 'Your Name'),
            React.createElement('p', { 
              key: 'description',
              className: 'text-xl lg:text-2xl leading-relaxed opacity-90' 
            }, 'A passionate software engineer crafting elegant solutions to complex problems. I specialize in full-stack development with a keen eye for design and user experience.')
          ]),
          
          React.createElement('div', { 
            key: 'profile-pic',
            className: 'flex justify-center lg:justify-start' 
          },
            React.createElement('div', { className: 'relative' }, [
              React.createElement('div', {
                key: 'blur',
                className: `absolute inset-0 rounded-2xl blur-2xl opacity-30 ${
                  isDarkMode ? 'bg-amber-200' : 'bg-slate-900'
                }`
              }),
              React.createElement('img', {
                key: 'img',
                src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
                alt: 'Profile',
                className: 'relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover border-4 border-white/20 shadow-2xl'
              })
            ])
          )
        ])
      )
    ),

    // Experience Section
    React.createElement('section', { 
      key: 'experience',
      className: 'py-20 px-6' 
    },
      React.createElement('div', { className: 'max-w-7xl mx-auto' }, [
        React.createElement('h2', { 
          key: 'exp-title',
          className: 'text-4xl font-bold text-center mb-16 tracking-wide' 
        }, 'Professional Experience'),
        React.createElement('div', { 
          key: 'exp-list',
          className: 'space-y-8' 
        }, 
          experiences.map((exp, index) => 
            React.createElement('div', {
              key: index,
              className: `p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] ${
                isDarkMode ? 'bg-slate-800/30' : 'bg-white/30'
              }`
            }, [
              React.createElement('div', { 
                key: 'exp-header',
                className: 'flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4' 
              }, [
                React.createElement('div', { key: 'exp-info' }, [
                  React.createElement('h3', { 
                    key: 'title',
                    className: 'text-2xl font-semibold mb-2' 
                  }, exp.title),
                  React.createElement('h4', { 
                    key: 'company',
                    className: 'text-xl opacity-80' 
                  }, exp.company)
                ]),
                React.createElement('span', { 
                  key: 'period',
                  className: `text-lg font-medium mt-2 lg:mt-0 ${
                    isDarkMode ? 'text-amber-200' : 'text-slate-600'
                  }` 
                }, exp.period)
              ]),
              React.createElement('p', { 
                key: 'description',
                className: 'text-lg leading-relaxed opacity-90' 
              }, exp.description)
            ])
          )
        )
      ])
    ),

    // Spotify Section
    React.createElement('section', { 
      key: 'spotify',
      className: 'py-20 px-6' 
    },
      React.createElement('div', { className: 'max-w-7xl mx-auto' },
        React.createElement('div', { 
          className: `p-8 rounded-2xl backdrop-blur-md ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-white/30'
          }` 
        }, [
          React.createElement('div', { 
            key: 'spotify-header',
            className: 'flex items-center justify-center mb-6' 
          }, [
            React.createElement(Music, { 
              key: 'music-icon',
              className: 'mr-3'
            }),
            React.createElement('h3', { 
              key: 'spotify-title',
              className: 'text-2xl font-semibold' 
            }, 'Currently Playing')
          ]),
          React.createElement('div', { 
            key: 'track-info',
            className: 'flex flex-col lg:flex-row items-center justify-center gap-6' 
          }, [
            React.createElement('img', {
              key: 'album-cover',
              src: currentTrack.albumCover,
              alt: currentTrack.album,
              className: 'w-32 h-32 rounded-lg shadow-lg'
            }),
            React.createElement('div', { 
              key: 'track-details',
              className: 'text-center lg:text-left' 
            }, [
              React.createElement('h4', { 
                key: 'track-title',
                className: 'text-xl font-semibold mb-2' 
              }, currentTrack.title),
              React.createElement('p', { 
                key: 'artist',
                className: 'text-lg opacity-80 mb-1' 
              }, currentTrack.artist),
              React.createElement('p', { 
                key: 'album',
                className: 'opacity-60' 
              }, currentTrack.album)
            ])
          ])
        ])
      )
    ),

    // Footer
    React.createElement('footer', { 
      key: 'footer',
      className: 'py-12 px-6 text-center opacity-60' 
    },
      React.createElement('p', { className: 'text-lg' }, '© 2025 Your Name. Crafted with passion and precision.')
    )
  ]);
};

// Render the Portfolio component
ReactDOM.render(React.createElement(Portfolio), document.getElementById('root'));