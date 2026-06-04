import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * PageTransition - مكون حركات الانتقال السلسة بين الأقسام
 * يوفر عدة أنماط من الانتقالات الجذابة
 */

interface PageTransitionProps {
  children: ReactNode;
  variant?: 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight' | 'zoomIn' | 'rotateIn';
  delay?: number;
  duration?: number;
  staggerChildren?: boolean;
}

const transitionVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  },
};

export function PageTransition({
  children,
  variant = 'fadeInUp',
  delay = 0,
  duration,
  staggerChildren = false,
}: PageTransitionProps) {
  const selectedVariant = transitionVariants[variant];
  const customVariant = duration
    ? {
        ...selectedVariant,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...selectedVariant.visible.transition,
            duration,
          },
        },
      }
    : selectedVariant;

  const containerVariants = staggerChildren
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }
    : customVariant;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerChildren ? containerVariants : customVariant}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container - حاوية لتطبيق تأثير التأخير على العناصر الفرعية
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger Item - عنصر فردي مع تأثير التأخير
interface StaggerItemProps {
  children: ReactNode;
  variant?: 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight' | 'zoomIn';
}

export function StaggerItem({ children, variant = 'fadeInUp' }: StaggerItemProps) {
  return (
    <motion.div
      variants={transitionVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

// Scroll Reveal - كشف العناصر عند التمرير
interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  direction = 'up',
  distance = 30,
  duration = 0.6,
}: ScrollRevealProps) {
  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionMap[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration,
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}

// Parallax Effect - تأثير المنظور
interface ParallaxProps {
  children: ReactNode;
  offset?: number;
}

export function Parallax({ children, offset = 50 }: ParallaxProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: offset }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 30,
      }}
      viewport={{ once: false, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}

// Fade In On Scroll - تلاشي سلس عند التمرير
interface FadeInOnScrollProps {
  children: ReactNode;
  duration?: number;
}

export function FadeInOnScroll({ children, duration = 0.8 }: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration,
        ease: 'easeOut',
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}

// Bounce In - دخول بارتداد
interface BounceInProps {
  children: ReactNode;
  delay?: number;
}

export function BounceIn({ children, delay = 0 }: BounceInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay,
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}
