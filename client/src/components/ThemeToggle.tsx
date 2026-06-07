import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * ThemeToggle - زر تبديل الوضع الليلي والفاتح مع تأثيرات سلسة
 * يوفر تجربة تبديل سلسة مع حفظ التفضيل في localStorage
 */

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="تبديل الوضع الليلي"
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 to-blue-500/0"
        animate={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1))'
            : 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon container */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {isDark ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            key="moon"
          >
            <Moon className="w-5 h-5 text-cyan-400" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            key="sun"
          >
            <Sun className="w-5 h-5 text-amber-400" />
          </motion.div>
        )}
      </motion.div>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-white/10"
        initial={{ opacity: 1, scale: 0.5 }}
        animate={{ opacity: 0, scale: 2 }}
        transition={{ duration: 0.6 }}
        onClick={(e) => {
          e.preventDefault();
        }}
      />
    </motion.button>
  );
}

/**
 * ThemeToggleWithLabel - زر التبديل مع تسمية توضيحية
 */
export function ThemeToggleWithLabel() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-cyan-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-400" />
        )}
      </motion.div>
      <span className="text-sm text-slate-300">
        {isDark ? 'الوضع الليلي' : 'الوضع الفاتح'}
      </span>
    </motion.button>
  );
}

/**
 * FloatingThemeToggle - زر تبديل عائم للاستخدام في الزوايا
 */
export function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg hover:shadow-xl border border-cyan-400/30 flex items-center justify-center z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="تبديل الوضع الليلي"
    >
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-cyan-500/20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Icon */}
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {isDark ? (
          <Moon className="w-6 h-6 text-white relative z-10" />
        ) : (
          <Sun className="w-6 h-6 text-white relative z-10" />
        )}
      </motion.div>
    </motion.button>
  );
}
