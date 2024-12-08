import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Project One",
      description: "Example description about project.",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Project Two",
      description: "Example description about project.",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Project Three",
      description: "Example description about project.",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Project Four",
      description: "Example description about project.",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-5 bg-white dark:bg-dark-900">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-light-100 dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="h-10 bg-gray-200 dark:bg-dark-900"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={project.liveLink} className="bg-primary-500 text-white px-4 py-2 rounded-lg text-center hover:bg-primary-400 transition-colors">
                    View Live
                  </a>
                  <a href={project.githubLink} className="border-2 border-primary-400 text-primary-400 px-4 py-2 rounded-lg text-center hover:bg-primary-400/10 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 