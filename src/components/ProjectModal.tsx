import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  if (!project) return null;

  const handleImageClick = (index: number) => {
    if (selectedImageIndex === index) {
      setIsFullscreen(!isFullscreen);
    } else {
      setSelectedImageIndex(index);
      setIsFullscreen(false);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex === null || !project.additionalImages) return;
    setSelectedImageIndex((prev) => 
      prev === 0 ? project.additionalImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (selectedImageIndex === null || !project.additionalImages) return;
    setSelectedImageIndex((prev) => 
      prev === project.additionalImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="fixed top-8 right-8 text-white hover:text-gray-300 transition-colors z-50"
        >
          <X size={32} />
        </button>
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-[90%] xl:max-w-[1400px] mx-auto"
        >
          {project.videoUrl ? (
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              >
                <source src={project.videoUrl} type="video/mp4" />
              </video>
              {project.id === 'project-4' && (
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-white" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white" />
                  )}
                </button>
              )}
            </div>
          ) : project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          ) : null}
          
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-4xl font-light mb-4 text-white">{project.title}</h2>
                <p className="text-xl text-gray-300 mb-6">{project.description}</p>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl mb-2 text-white">Challenge</h3>
                  <p className="text-gray-300">{project.details.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-white">Solution</h3>
                  <p className="text-gray-300">{project.details.solution}</p>
                </div>
              </div>
            </div>

            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.additionalImages.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer aspect-square overflow-hidden"
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedImageIndex !== null && project.additionalImages && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-95 z-[60] flex items-center justify-center"
            >
              <button
                onClick={() => {
                  setSelectedImageIndex(null);
                  setIsFullscreen(false);
                }}
                className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>

              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft size={48} />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight size={48} />
              </button>

              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  width: isFullscreen ? '90vw' : '50vw',
                  height: isFullscreen ? '90vh' : '80vh'
                }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={project.additionalImages[selectedImageIndex]}
                alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                className={`object-contain transition-all duration-300 ${
                  isFullscreen ? 'max-w-[90vw] max-h-[90vh]' : 'max-w-[50vw] max-h-[80vh]'
                }`}
                onClick={() => setIsFullscreen(!isFullscreen)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};