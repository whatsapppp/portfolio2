import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  gridSize: 'small' | 'default' | 'full';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, gridSize }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isValidVideo, setIsValidVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (project.videoUrl) {
      const video = document.createElement('video');
      video.src = project.videoUrl;
      video.onloadedmetadata = () => setIsValidVideo(true);
      video.onerror = () => setIsValidVideo(false);
    }
  }, [project.videoUrl]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const aspectRatioClass = gridSize === 'full' ? 'aspect-video' : 'aspect-square';

  return (
    <div
      className="group cursor-pointer relative overflow-hidden bg-black"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative w-full ${aspectRatioClass} overflow-hidden bg-black`}>
        {project.videoUrl && isValidVideo ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        ) : project.imageUrl ? (
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ 
              scale: isLoaded ? 1 : 1.1,
              opacity: isLoaded ? 1 : 0
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onLoad={() => setIsLoaded(true)}
          />
        ) : null}

        <motion.div 
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.75 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white text-center p-4">
            <h3 className="text-xl font-light mb-2">
              {project.title}
            </h3>
            <p className="text-sm">
              {project.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};