import { motion, useScroll, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest > 0.1) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    });
  }, [scrollYProgress]);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 left-5 p-3 rounded-full bg-primary-500 text-white hover:bg-primary-400"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
};

export default ScrollToTop; 