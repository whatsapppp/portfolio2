import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { projects } from './data/projects';
import type { Project } from './data/projects';
import { Compass } from 'lucide-react';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [gridSize, setGridSize] = useState<'small' | 'default' | 'full'>('small');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setGridSize('full');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getGridClass = () => {
    switch (gridSize) {
      case 'small':
        return 'grid-cols-3 md:grid-cols-4 scale-75';
      case 'full':
        return 'grid-cols-1';
      default:
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };

  const handleGridToggle = () => {
    const sizes: ('small' | 'default' | 'full')[] = ['small', 'default', 'full'];
    const currentIndex = sizes.indexOf(gridSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    setGridSize(sizes[nextIndex]);
  };

  const logoAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    },
    whileHover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const compassAnimation = {
    initial: { opacity: 0, rotate: -180 },
    animate: { 
      opacity: 1, 
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    },
    whileHover: { 
      rotate: 180,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm">
        <nav className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
          >
            <motion.div variants={compassAnimation}>
              <Compass className="w-8 h-8 text-white" />
            </motion.div>
            <motion.span 
              variants={logoAnimation}
              className="text-2xl font-light text-white"
            >
              Koma Design
            </motion.span>
          </motion.div>
          <button
            onClick={handleGridToggle}
            className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <span>Change grid size</span>
          </button>
        </nav>
      </header>

      <main className="pt-32 pb-20">
        <section className="mb-32 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white tracking-tight">
            Meet Simon the{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              designer
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Working with brands such as Intel, Cannon, Gillette, Guinness freelancing at agencies such as JWT, BBH, AKQA & M&C Saatchi in London & Sydney.
          </p>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Skills include: UI/UX, Product Design, Branding, Motion Design, Advertising, Website Design & Development & Music Production.
          </p>
          <p className="text-lg sm:text-xl text-gray-400">
            Got a project in mind? 07415 743 657
          </p>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className={`grid ${getGridClass()} gap-4 max-w-[2000px] mx-auto bg-black`}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                gridSize={gridSize}
              />
            ))}
          </div>
        </section>
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;