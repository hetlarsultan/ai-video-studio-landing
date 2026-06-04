import { motion } from 'framer-motion';

/**
 * LoadingSpinner - مكون تأثيرات تحميل جذابة ومحسّنة للجوال
 * يوفر عدة أنماط من تأثيرات التحميل
 */

interface LoadingSpinnerProps {
  variant?: 'pulse' | 'dots' | 'bars' | 'orbit' | 'wave';
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'blue' | 'purple' | 'green';
  text?: string;
}

const colorMap = {
  cyan: 'from-cyan-400 to-cyan-600',
  blue: 'from-blue-400 to-blue-600',
  purple: 'from-purple-400 to-purple-600',
  green: 'from-green-400 to-green-600',
};

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

// Pulse Spinner - نبض بسيط وفعال
function PulseSpinner({ size = 'md', color = 'cyan' }: LoadingSpinnerProps) {
  return (
    <motion.div
      className={`${sizeMap[size]} rounded-full bg-gradient-to-r ${colorMap[color]}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

// Dots Spinner - ثلاث نقاط متحركة
function DotsSpinner({ size = 'md', color = 'cyan' }: LoadingSpinnerProps) {
  const dotSize = size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4';
  const spacing = size === 'sm' ? 'gap-1' : size === 'md' ? 'gap-2' : 'gap-3';

  return (
    <div className={`flex ${spacing} items-center justify-center`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${dotSize} rounded-full bg-gradient-to-r ${colorMap[color]}`}
          animate={{
            y: [0, -8, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Bars Spinner - أعمدة متحركة
function BarsSpinner({ size = 'md', color = 'cyan' }: LoadingSpinnerProps) {
  const barHeight = size === 'sm' ? 'h-6' : size === 'md' ? 'h-8' : 'h-10';
  const barWidth = size === 'sm' ? 'w-1' : size === 'md' ? 'w-1.5' : 'w-2';

  return (
    <div className="flex gap-1 items-end justify-center">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={`${barWidth} ${barHeight} rounded-full bg-gradient-to-t ${colorMap[color]}`}
          animate={{
            scaleY: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Orbit Spinner - مدار دوار
function OrbitSpinner({ size = 'md', color = 'cyan' }: LoadingSpinnerProps) {
  const containerSize = size === 'sm' ? 'w-12 h-12' : size === 'md' ? 'w-16 h-16' : 'w-20 h-20';
  const dotSize = size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4';

  return (
    <div className={`${containerSize} relative`}>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[0, 120, 240].map((angle) => (
          <motion.div
            key={angle}
            className={`${dotSize} rounded-full bg-gradient-to-r ${colorMap[color]} absolute top-0 left-1/2 -translate-x-1/2`}
            style={{
              transform: `rotate(${angle}deg) translateY(-${size === 'sm' ? '20px' : size === 'md' ? '28px' : '36px'})`,
            }}
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Wave Spinner - موجة متحركة
function WaveSpinner({ size = 'md', color = 'cyan' }: LoadingSpinnerProps) {
  const barHeight = size === 'sm' ? 'h-6' : size === 'md' ? 'h-8' : 'h-10';
  const barWidth = size === 'sm' ? 'w-1' : size === 'md' ? 'w-1.5' : 'w-2';

  return (
    <div className="flex gap-1 items-center justify-center">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className={`${barWidth} ${barHeight} rounded-full bg-gradient-to-t ${colorMap[color]}`}
          animate={{
            scaleY: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.12,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Main Component
export function LoadingSpinner({
  variant = 'pulse',
  size = 'md',
  color = 'cyan',
  text,
}: LoadingSpinnerProps) {
  const spinnerComponents = {
    pulse: <PulseSpinner size={size} color={color} />,
    dots: <DotsSpinner size={size} color={color} />,
    bars: <BarsSpinner size={size} color={color} />,
    orbit: <OrbitSpinner size={size} color={color} />,
    wave: <WaveSpinner size={size} color={color} />,
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {spinnerComponents[variant]}
      {text && (
        <motion.p
          className="text-sm md:text-base text-slate-300"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  );
}

// Skeleton Loader - محاكاة التحميل
interface SkeletonLoaderProps {
  lines?: number;
  variant?: 'text' | 'card' | 'image';
}

export function SkeletonLoader({ lines = 3, variant = 'text' }: SkeletonLoaderProps) {
  if (variant === 'card') {
    return (
      <motion.div
        className="space-y-4 p-4 bg-slate-700/30 rounded-lg"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="h-40 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg" />
        <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-3/4" />
        <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-1/2" />
      </motion.div>
    );
  }

  if (variant === 'image') {
    return (
      <motion.div
        className="w-full h-64 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    );
  }

  return (
    <motion.div
      className="space-y-3"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded ${
            i === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
    </motion.div>
  );
}
