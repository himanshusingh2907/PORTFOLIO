import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "HealthConnect",
    description:
      "Full-stack doctor appointment platform with role-based dashboards, JWT authentication, and Razorpay payment gateway integration.",
    tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Razorpay"],
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop",
    link: "https://github.com/himanshusingh2907"
  },
  {
    id: 2,
    title: "Forever E-Commerce",
    description:
      "Production-ready e-commerce application supporting product browsing, cart management, secure payments, and Cloudinary image storage.",
    tags: ["ReactJS", "Tailwind CSS", "NodeJS", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    link: "https://github.com/himanshusingh2907"
  },
  {
    id: 3,
    title: "Secure Partial Search Engine",
    description:
      "Secure backend search system using AES encryption and blind index (n-gram) strategy enabling partial keyword search over encrypted fields.",
    tags: ["NodeJS", "MongoDB", "AES Encryption", "Blind Index"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    link: "https://github.com/himanshusingh2907"
  },
  {
    id: 4,
    title: "Role-Based Blog Platform",
    description:
      "Multi-user blog platform with JWT authentication, role-based access control, and real-time content management.",
    tags: ["NodeJS", "MongoDB", "JWT", "ExpressJS"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    link: "https://github.com/himanshusingh2907"
  }
];

const skills: Skill[] = [
  { name: "C++", level: 90, category: "Programming Languages" },
  { name: "JavaScript", level: 85, category: "Programming Languages" },

  { name: "ReactJS", level: 85, category: "Frontend" },
  { name: "Tailwind CSS / MUI", level: 80, category: "Frontend" },
  { name: "Redux", level: 75, category: "Frontend" },

  { name: "NodeJS / ExpressJS", level: 85, category: "Backend" },
  { name: "REST APIs", level: 85, category: "Backend" },

  { name: "MongoDB", level: 85, category: "Databases" },
  { name: "SQL", level: 80, category: "Databases" },

  { name: "Git / GitHub / VS Code", level: 90, category: "Tools" }
];

export function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white' : 'bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Himanshu Singh
            </div>

            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Download Resume Button */}
              <a
                href="https://drive.google.com/file/d/1SQgFvON5GJGwMe39SiEXCuu3k7HVPUad/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-violet-200 dark:hover:shadow-violet-800 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 ${activeSection === item.toLowerCase()
                    ? 'text-violet-600 dark:text-violet-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400'
                    }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-violet-200 transition-all duration-200"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className="px-4 py-4 space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === item.toLowerCase()
                    ? 'bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.03), transparent 40%)`
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-violet-600 rounded-full mr-2 animate-pulse"></span>
                Available for new projects
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Himanshu Singh
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                MERN Stack Developer at Try Digital Solutions LLP passionate about creating beautiful, functional web applications. Specializing in secure backend systems and modern frontend frameworks.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-violet-200 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${isDarkMode ? 'bg-slate-800 text-slate-200 border-slate-700 hover:border-violet-700 hover:bg-slate-700' : 'bg-white text-slate-700 border-slate-200 hover:border-violet-200 hover:bg-violet-50'}`}
                >
                  Get In Touch
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a href="https://github.com/himanshusingh2907" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-violet-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="https://surl.li/ageegd" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-violet-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop"
                  alt="Himanshu Singh"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating Cards */}
              <div className={`absolute -left-8 top-1/4 p-4 rounded-2xl shadow-lg animate-bounce ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`} style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Fresher</div>
                    <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Developer</div>
                  </div>
                </div>
              </div>

              <div className={`absolute -right-4 bottom-1/4 p-4 rounded-2xl shadow-lg animate-bounce ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`} style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>3+ Projects</div>
                    <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 relative ${isDarkMode ? 'bg-slate-900' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Backend-focused engineer with strong problem-solving foundations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a B.Tech Computer Science student at Chandigarh Group of Colleges,
                graduating in July 2026. My primary focus is full-stack web development
                and secure backend engineering.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Currently working as a MERN Stack Developer at Try Digital Solutions LLP,
                where I develop and maintain scalable web applications and implement secure
                systems like partial search engines with AES encryption.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                With a strong foundational grasp of Data Structures and Algorithms, I have
                solved over 280 LeetCode problems, 180+ problems on GeeksforGeeks, and
                have actively participated in competitive programming on Codeforces.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I am passionate about continuous learning, equipped with certifications from
                NPTEL in DBMS and IIT Bombay in HTML & CSS, and ready to take on rigorous challenges.
              </p>

              {/* REAL METRICS */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className={`p-6 rounded-2xl shadow-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                    280+
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    DSA Problems Solved
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                    3+
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Backend Projects
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                    MERN
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Tech Stack
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                    2026
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Graduation Year
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – CLEAN VISUAL */}
            <div className="relative">
              <div className={`p-10 rounded-3xl shadow-inner ${isDarkMode ? 'bg-slate-800' : 'bg-gradient-to-br from-violet-600/10 to-indigo-600/10'}`}>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                  Core Focus Areas
                </h3>

                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li>• Backend Engineering (Node.js / Express)</li>
                  <li>• Secure System Design</li>
                  <li>• API Architecture & Authentication</li>
                  <li>• Database Design (MongoDB & SQL)</li>
                  <li>• Problem Solving & Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className={`py-24 relative ${isDarkMode ? 'bg-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Technical{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Core engineering skills and technologies I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Programming & Frontend */}
            <div className={`p-8 rounded-2xl shadow-lg border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="text-xl font-bold text-violet-600 mb-6">
                Programming & Frontend
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li>• C++, JavaScript</li>
                <li>• Data Structures & Algorithms</li>
                <li>• HTML, CSS, ReactJS</li>
                <li>• Tailwind CSS, MUI</li>
                <li>• Redux State Management</li>
              </ul>
            </div>

            {/* Backend & Databases */}
            <div className={`p-8 rounded-2xl shadow-lg border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="text-xl font-bold text-violet-600 mb-6">
                Backend & Databases
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li>• NodeJS, ExpressJS</li>
                <li>• RESTful APIs</li>
                <li>• MongoDB</li>
                <li>• SQL (DBMS)</li>
                <li>• JWT Authentication & Encryption</li>
              </ul>
            </div>

            {/* Core CS & Tools */}
            <div className={`p-8 rounded-2xl shadow-lg border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="text-xl font-bold text-violet-600 mb-6">
                Core CS & Tools
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li>• Git, GitHub, Postman, VS Code</li>
                <li>• Object-Oriented Programming (OOP)</li>
                <li>• Operating Systems</li>
                <li>• Computer Networks</li>
                <li>• Documentation & Problem Solving</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Engineering{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Backend systems and problem-solving focused implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-2xl overflow-hidden flex flex-col ${isDarkMode
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-slate-200"
                  }`}
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 space-y-5 flex-1 flex flex-col">

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-violet-100 text-violet-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:border-violet-600 hover:text-violet-600 transition"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/himanshusingh2907"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-violet-600 text-violet-600 rounded-xl font-semibold hover:bg-violet-600 hover:text-white transition"
            >
              View More on GitHub
            </a>
          </div>

        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Contact{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Open to internship and full-time backend engineering opportunities.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg border border-slate-200">

            <div className="grid md:grid-cols-2 gap-10">

              {/* LEFT SIDE */}
              <div className="space-y-6">

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Email
                  </h3>
                  <p className="text-slate-600">
                    captaincool6166@gmail.com
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-slate-600">
                    +91 8840619042
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Current Status
                  </h3>
                  <p className="text-slate-600">
                    B.Tech Student (CGPA: 8.0)
                    <br />
                    MERN Stack Developer
                  </p>
                </div>

                <div className="pt-4 flex gap-4 flex-wrap">
                  <a
                    href="https://github.com/himanshusingh2907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 border border-violet-600 text-violet-600 rounded-lg font-medium hover:bg-violet-600 hover:text-white transition"
                  >
                    View GitHub
                  </a>
                  <a
                    href="https://surl.li/ageegd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 border border-violet-600 text-violet-600 rounded-lg font-medium hover:bg-violet-600 hover:text-white transition"
                  >
                    View LinkedIn
                  </a>
                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-6">

                <p className="text-slate-600 leading-relaxed">
                  If you are hiring for backend, full-stack, or software engineering
                  roles, feel free to reach out. I am actively preparing for
                  product-based companies and open to technical discussions.
                </p>

                <a
                  href="mailto:captaincool6166@gmail.com"
                  className="inline-block w-full text-center px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition"
                >
                  Send Email
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
    </div>
  );
}