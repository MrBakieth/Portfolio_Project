import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = ['HTML', 'CSS', 'JavaScript', 'C#', 'Git', 'Microsoft SQL Server','MongoDB', 'PostgreSQL'];

  return (
    <section id="about" className="py-20 px-5 bg-light-100 dark:bg-dark-800">
      <motion.div 
        ref={ref}
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">About Me</h2>
        <div className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quia quae voluptas veniam nobis qui maxime explicabo vel rem hic!</p>
        </div>
        <motion.div 
          className="flex flex-wrap gap-3 justify-center"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-primary-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:-translate-y-1 transition-transform"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 