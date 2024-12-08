import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-900/75 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-primary-400 hover:text-primary-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Portfolio
          </motion.a>
          
          <motion.button 
            className="md:hidden text-white p-2 hover:bg-dark-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // X icon (close)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
                <line x1="6" y1="18" x2="18" y2="6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              // Hamburger menu icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </motion.button>

          <motion.ul 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              staggerChildren: 0.1,
            }}
          >
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </motion.ul>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col gap-2 pt-4 pb-2">
                <NavLink href="#about" mobile onClick={() => setIsMenuOpen(false)}>About</NavLink>
                <NavLink href="#projects" mobile onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                <NavLink href="#contact" mobile onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, mobile, onClick }) => (
  <motion.li
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={mobile ? "block" : ""}
  >
    <a 
      href={href} 
      className={`
        text-white/90 hover:text-primary-400 transition-all
        ${mobile ? 'block text-center py-3 px-4 rounded-lg hover:bg-dark-800' : ''}
        font-medium tracking-wide
      `}
      onClick={onClick}
    >
      {children}
    </a>
  </motion.li>
);

export default Navbar; 