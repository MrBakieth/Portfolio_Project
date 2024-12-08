import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-6">© 2024 Your Name. All rights reserved.</p>
        <motion.div 
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 