import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-20 px-5 bg-light-100 dark:bg-dark-800">
      <motion.div
        ref={ref}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Furkan Yaman"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-900 focus:border-primary-400 dark:focus:border-primary-400 focus:outline-none transition-colors bg-white dark:bg-dark-900 dark:text-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input
              type="email"
              placeholder="example@gmail.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-900 focus:border-primary-400 dark:focus:border-primary-400 focus:outline-none transition-colors bg-white dark:bg-dark-900 dark:text-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <textarea
              placeholder="Awsome work!"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-900 focus:border-primary-400 dark:focus:border-primary-400 focus:outline-none transition-colors min-h-[150px] resize-y bg-white dark:bg-dark-900 dark:text-white"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-400 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact; 