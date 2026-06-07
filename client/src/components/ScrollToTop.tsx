import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * ScrollToTop - زر عائم للعودة للأعلى مع تأثيرات سلسة
 * يظهر عند التمرير لأسفل ويختفي عند الوصول للأعلى
 */

interface ScrollToTopProps {
  variant?: 'arrow' | 'chevron' | 'text';
  position?: 'right' | 'left';
  offset?: number;
}

export function ScrollToTop({
  variant = 'arrow',
  position = 'right',
  offset = 300,
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  // مراقبة موضع التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  // العودة للأعلى بسلاسة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const positionClass = position === 'right' ? 'right-6 md:right-8' : 'left-6 md:left-8';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-20 ${positionClass} md:bottom-8 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg hover:shadow-xl border border-cyan-400/30 flex items-center justify-center z-40 transition-shadow`}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{
            duration: 0.3,
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="العودة للأعلى"
        >
          {/* Pulse animation background */}
          <motion.div
            className="absolute inset-0 rounded-full bg-cyan-500/20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Icon */}
          <motion.div
            className="relative z-10"
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {variant === 'arrow' && (
              <ArrowUp className="w-6 h-6 text-white" />
            )}
            {variant === 'chevron' && (
              <ChevronUp className="w-6 h-6 text-white" />
            )}
            {variant === 'text' && (
              <span className="text-white text-sm font-bold">أعلى</span>
            )}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/**
 * ScrollToTopMinimal - نسخة مبسطة من الزر
 */
export function ScrollToTopMinimal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 flex items-center justify-center z-40 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="w-5 h-5 text-cyan-400" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/**
 * ScrollToTopProgress - زر مع شريط تقدم يشير إلى موضع التمرير
 */
export function ScrollToTopProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setIsVisible(scrollTop > 300);
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg hover:shadow-xl border border-cyan-400/30 flex items-center justify-center z-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Progress circle background */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 48}`}
              strokeDashoffset={`${2 * Math.PI * 48 * (1 - scrollProgress / 100)}`}
              strokeLinecap="round"
              style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            />
          </svg>

          {/* Icon */}
          <motion.div
            className="relative z-10"
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
