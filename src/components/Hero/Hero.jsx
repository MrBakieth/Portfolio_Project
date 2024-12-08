import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Animated circles background
const CirclesBackground = () => {
  const circles = Array.from({ length: 12 });
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full dark:bg-blue-400/5 bg-blue-500/15"
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated text with slide effect
const SlideText = ({ children, delay = 0 }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-center px-5 overflow-hidden transition-colors duration-300">
      <CirclesBackground />

      <motion.div 
        className="relative max-w-3xl mx-auto py-20 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12 space-y-8">
          <SlideText delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-800 dark:text-white drop-shadow-xl">
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                John Doe
              </motion.span>
            </h1>
          </SlideText>

          <SlideText delay={0.4}>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
              animate={{ 
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Software Engineer
            </motion.p>
          </SlideText>

          <SlideText delay={0.6}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium tracking-wide">
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </SlideText>
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a 
            href="#projects" 
            className="group relative w-full sm:w-auto px-8 py-4 rounded-xl font-semibold overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <FontAwesomeIcon 
                icon={faChevronRight} 
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="group relative w-full sm:w-auto px-8 py-4 rounded-xl font-semibold overflow-hidden border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Contact Me
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 