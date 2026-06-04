import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Lock, Gauge, Sparkles, Film, Code2, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Animation configuration following the Animation Guide
const ANIMATION_CONFIG = {
  duration: 0.25, // 250ms - snappy, under 300ms
};

// Reduced animation config for mobile devices
const MOBILE_ANIMATION_CONFIG = {
  duration: 0.15, // Faster animations on mobile
};

// Style card component with interactive motion effects
function StyleCard({ 
  title, 
  description, 
  icon, 
  metrics, 
  badge, 
  accentColor,
  isHighlighted = false 
}: {
  title: string;
  description: string;
  icon: string;
  metrics: { label: string; value: string; color: string }[];
  badge: string;
  accentColor: string;
  isHighlighted?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Determine border color based on accent
  const borderColorClass = {
    green: "hover:border-green-500/50",
    cyan: "hover:border-cyan-500/50",
    purple: "hover:border-purple-500/50",
  }[accentColor] || "hover:border-cyan-500/50";

  const bgColorClass = {
    green: "bg-green-500/10",
    cyan: "bg-cyan-500/10",
    purple: "bg-purple-500/10",
  }[accentColor] || "bg-cyan-500/10";

  const borderInnerClass = {
    green: "border-green-500/20",
    cyan: "border-cyan-500/20",
    purple: "border-purple-500/20",
  }[accentColor] || "border-cyan-500/20";

  const iconColorClass = {
    green: "text-green-400",
    cyan: "text-cyan-400",
    purple: "text-purple-400",
  }[accentColor] || "text-cyan-400";

  const badgeClass = {
    green: "bg-green-500/20 text-green-300 border-green-500/50",
    cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/50",
    purple: "bg-purple-500/20 text-purple-300 border-purple-500/50",
  }[accentColor] || "bg-cyan-500/20 text-cyan-300 border-cyan-500/50";

  return (
    <motion.div
      className="group"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={() => isMobile && setIsHovered(true)}
      onTouchEnd={() => isMobile && setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : ANIMATION_CONFIG.duration }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        animate={{
          scale: isHovered && !isMobile ? 1.02 : 1,
          y: isHovered && !isMobile ? -8 : 0,
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : MOBILE_ANIMATION_CONFIG.duration,
          ease: "easeOut",
        }}
      >
        <Card className={`bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-6 md:p-8 h-full ${borderColorClass} transition-all relative overflow-hidden`}>
          {/* Animated glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br opacity-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(135deg, ${
                accentColor === "green"
                  ? "rgba(34, 197, 94, 0.1)"
                  : accentColor === "cyan"
                  ? "rgba(34, 211, 238, 0.1)"
                  : "rgba(168, 85, 247, 0.1)"
              }, transparent)`,
            }}
            animate={{
              opacity: isHovered && !isMobile ? 1 : 0,
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : MOBILE_ANIMATION_CONFIG.duration,
              ease: "easeOut",
            }}
          />

          {/* Content with relative positioning */}
          <div className="relative z-10">
            {/* Icon container with rotation animation */}
            <motion.div
              className={`${bgColorClass} rounded-lg p-6 mb-6 border ${borderInnerClass}`}
              animate={{
                rotate: isHovered && !isMobile ? 6 : 0,
                scale: isHovered && !isMobile ? 1.1 : 1,
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : MOBILE_ANIMATION_CONFIG.duration,
                ease: "easeOut",
              }}
            >
              <div className={`text-4xl font-bold ${iconColorClass}`}>{icon}</div>
            </motion.div>

            {/* Title with color shift */}
            <motion.h3
              className="text-2xl font-bold text-white mb-2"
              animate={{
                color: isHovered && !isMobile
                  ? accentColor === "green"
                    ? "#4ade80"
                    : accentColor === "cyan"
                    ? "#06b6d4"
                    : "#d946ef"
                  : "#ffffff",
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : MOBILE_ANIMATION_CONFIG.duration,
                ease: "easeOut",
              }}
            >
              {title}
            </motion.h3>

            <p className="text-slate-400 mb-6">{description}</p>

            {/* Metrics with staggered animation */}
            <div className="space-y-2 mb-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-slate-300"
                  animate={{
                    x: isHovered && !isMobile ? 4 : 0,
                    opacity: isHovered && !isMobile ? 1 : 0.8,
                  }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : MOBILE_ANIMATION_CONFIG.duration,
                    delay: prefersReducedMotion ? 0 : index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <span className={metric.color}>{metric.label}</span>
                  <motion.span
                    animate={{
                      color: isHovered ? metric.color : "#cbd5e1",
                    }}
                    transition={{
                      duration: ANIMATION_CONFIG.duration,
                      ease: "easeOut",
                    }}
                  >
                    {metric.value}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* Badge with scale animation */}
            <motion.div
            animate={{
              scale: isHovered && !isMobile ? 1.05 : 1,
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : MOBILE_ANIMATION_CONFIG.duration,
              ease: "easeOut",
            }}
            >
              <Badge className={badgeClass}>
                {badge}
              </Badge>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">AI Video Studio Pro</span>
          </div>
          <a 
            href="https://3001-i7wqqfbrecliu5p39l6ke-8433bba1.us2.manus.computer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm md:text-base">
              فتح التطبيق <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="w-fit bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
              🚀 تقنية مبتكرة
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              إنشاء فيديوهات احترافية
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> بدون إنترنت</span>
            </h1>
            <p className="text-base md:text-xl text-slate-300 leading-relaxed">
              محرر فيديو قوي يعمل بالكامل محلياً على جهازك. معالجة سريعة، خصوصية مطلقة، وأنماط بصرية احترافية.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a 
                href="https://3001-i7wqqfbrecliu5p39l6ke-8433bba1.us2.manus.computer"
                target="_blank"
                rel="noopener noreferrer"
              >
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w-full sm:w-auto">
              جرب الآن مجاناً <Sparkles className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
            </a>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 w-full sm:w-auto">
                اقرأ المزيد
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
            <motion.div
              className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600/50 backdrop-blur-sm"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-lg flex items-center justify-center">
                  <Film className="w-24 h-24 text-cyan-400/30" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-600 rounded-full w-3/4"></div>
                  <div className="h-3 bg-slate-600 rounded-full w-1/2"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 border-t border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/50">
              ✨ الميزات الرئيسية
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              كل ما تحتاجه لإنشاء فيديوهات احترافية
            </h2>
            <p className="text-lg text-slate-400">
              مجموعة شاملة من الأدوات والميزات المصممة لتسريع عملية الإنشاء
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-6 hover:border-cyan-500/50 transition-colors">
                <Lock className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">خصوصية مطلقة</h3>
                <p className="text-slate-400">
                  جميع البيانات تبقى على جهازك. لا توجد عمليات تحميل على السيرفر أو تتبع.
                </p>
              </Card>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-6 hover:border-blue-500/50 transition-colors">
                <Zap className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">سرعة فائقة</h3>
                <p className="text-slate-400">
                  معالجة محلية بدون تأخيرات. لا تعتمد على سرعة الإنترنت أو خوادم خارجية.
                </p>
              </Card>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-6 hover:border-purple-500/50 transition-colors">
                <Gauge className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">أداء محسّن</h3>
                <p className="text-slate-400">
                  استهلاك موارد منخفض وأداء مستقر حتى مع المشاريع الكبيرة.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Styles Section - With Interactive Motion Effects */}
      <section className="py-12 md:py-20 border-t border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/50">
              🎨 الأنماط البصرية
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              ثلاثة أنماط بصرية احترافية
            </h2>
            <p className="text-lg text-slate-400">
              اختر النمط الذي يناسب مشروعك من بين خيارات متعددة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Basic Style */}
            <StyleCard
              title="النمط البسيط"
              description="تصميم نظيف وبسيط مثالي للمهام السريعة والعروض الأساسية."
              icon="🎬"
              metrics={[
                { label: "⚡", value: "وقت المعالجة: 3.1 ثانية", color: "text-green-400" },
                { label: "💾", value: "استهلاك الموارد: منخفض", color: "text-green-400" },
                { label: "✨", value: "الجودة: عالية", color: "text-green-400" },
              ]}
              badge="مثالي للمبتدئين"
              accentColor="green"
            />

            {/* VFX Style */}
            <StyleCard
              title="النمط الاحترافي (VFX)"
              description="مؤثرات بصرية متقدمة مثالية للتسويق والعروض التقديمية."
              icon="✨"
              metrics={[
                { label: "⚡", value: "وقت المعالجة: 5.8 ثوان", color: "text-cyan-400" },
                { label: "💾", value: "استهلاك الموارد: متوسط", color: "text-cyan-400" },
                { label: "✨", value: "الجودة: احترافية جداً", color: "text-cyan-400" },
              ]}
              badge="الخيار الموصى به"
              accentColor="cyan"
              isHighlighted={true}
            />

            {/* Glitch Style */}
            <StyleCard
              title="النمط الفني (Glitch)"
              description="تأثيرات فنية متقدمة مثالية للمشاريع الإبداعية والموسيقى."
              icon="🎆"
              metrics={[
                { label: "⚡", value: "وقت المعالجة: 7.2 ثوان", color: "text-purple-400" },
                { label: "💾", value: "استهلاك الموارد: عالي", color: "text-purple-400" },
                { label: "✨", value: "الجودة: سينمائية", color: "text-purple-400" },
              ]}
              badge="للمحترفين"
              accentColor="purple"
            />
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-12 md:py-20 border-t border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/50">
              📊 مقارنة الأداء
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              تحليل مفصل للأداء
            </h2>
          </motion.div>

          <div className="overflow-x-auto -mx-4 md:mx-0">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">المعيار</th>
                  <th className="text-center py-4 px-4 text-green-400 font-semibold">النمط البسيط</th>
                  <th className="text-center py-4 px-4 text-cyan-400 font-semibold">النمط الاحترافي</th>
                  <th className="text-center py-4 px-4 text-purple-400 font-semibold">النمط الفني</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/30 hover:bg-slate-700/20">
                  <td className="py-4 px-4 text-slate-300">وقت المعالجة</td>
                  <td className="text-center py-4 px-4 text-green-400">3.1 ثانية</td>
                  <td className="text-center py-4 px-4 text-cyan-400">5.8 ثوان</td>
                  <td className="text-center py-4 px-4 text-purple-400">7.2 ثوان</td>
                </tr>
                <tr className="border-b border-slate-700/30 hover:bg-slate-700/20">
                  <td className="py-4 px-4 text-slate-300">استهلاك المعالج</td>
                  <td className="text-center py-4 px-4 text-green-400">45%</td>
                  <td className="text-center py-4 px-4 text-cyan-400">76%</td>
                  <td className="text-center py-4 px-4 text-purple-400">88%</td>
                </tr>
                <tr className="border-b border-slate-700/30 hover:bg-slate-700/20">
                  <td className="py-4 px-4 text-slate-300">استهلاك الذاكرة</td>
                  <td className="text-center py-4 px-4 text-green-400">180 MB</td>
                  <td className="text-center py-4 px-4 text-cyan-400">280 MB</td>
                  <td className="text-center py-4 px-4 text-purple-400">384 MB</td>
                </tr>
                <tr className="border-b border-slate-700/30 hover:bg-slate-700/20">
                  <td className="py-4 px-4 text-slate-300">حجم الملف</td>
                  <td className="text-center py-4 px-4 text-green-400">2.5 MB</td>
                  <td className="text-center py-4 px-4 text-cyan-400">3.2 MB</td>
                  <td className="text-center py-4 px-4 text-purple-400">3.8 MB</td>
                </tr>
                <tr className="hover:bg-slate-700/20">
                  <td className="py-4 px-4 text-slate-300">جودة الفيديو</td>
                  <td className="text-center py-4 px-4 text-green-400">عالية</td>
                  <td className="text-center py-4 px-4 text-cyan-400">احترافية جداً</td>
                  <td className="text-center py-4 px-4 text-purple-400">سينمائية</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-12 md:py-20 border-t border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/50">
              📚 مكتبة القوالب
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              16 قالب احترافي جاهز للاستخدام
            </h2>
            <p className="text-lg text-slate-400">
              قوالب محترفة في 7 فئات مختلفة لتسريع عملية الإنشاء
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            {[
              { category: "الموسيقى", count: 3 },
              { category: "التسويق", count: 2 },
              { category: "التعليم", count: 2 },
              { category: "الرياضة", count: 2 },
              { category: "الأخبار", count: 2 },
              { category: "الألعاب", count: 2 },
              { category: "السفر", count: 1 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-6 text-center hover:border-indigo-500/50 transition-colors">
                  <div className="text-3xl mb-3">📽️</div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.category}</h3>
                  <p className="text-slate-400">{item.count} قوالب</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 border-t border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              هل أنت مستعد لإنشاء فيديوهات احترافية؟
            </h2>
            <p className="text-base md:text-xl text-slate-300 mb-6 md:mb-8">
              ابدأ الآن بدون الحاجة إلى تسجيل أو دفع أي شيء
            </p>
            <a 
              href="https://3001-i7wqqfbrecliu5p39l6ke-8433bba1.us2.manus.computer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                فتح التطبيق الآن <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 md:py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Film className="w-6 h-6 text-cyan-400" />
                <span className="font-bold text-white">AI Video Studio Pro</span>
              </div>
              <p className="text-slate-400 text-sm">
                محرر فيديو احترافي يعمل بدون إنترنت
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">الميزات</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">الأنماط البصرية</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">القوالب</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">الأداء</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">الموارد</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">التوثيق</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">البرامج التعليمية</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">الدعم</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">القانوني</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">شروط الاستخدام</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-6 md:pt-8 text-center text-slate-400 text-xs md:text-sm">
            <p>© 2026 AI Video Studio Pro. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
