import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Rocket } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <ScrollToTop variant="arrow" position="right" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 dark:bg-slate-950/80 border-b border-slate-700/50 dark:border-slate-800/50 transition-colors">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white dark:text-slate-100 transition-colors">
              Studio Pro
            </span>
          </motion.div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm md:text-base">
                ابدأ الآن <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-slate-50 leading-tight">
                منصة إبداعية حديثة
              </h1>
              <p className="text-lg md:text-xl text-slate-300 dark:text-slate-400">
                أدوات قوية وسهلة الاستخدام لإطلاق مشاريعك الإبداعية بسرعة واحترافية
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-base px-8 py-6 h-auto">
                جرب الآن <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50 text-base px-8 py-6 h-auto"
              >
                تعرف على المزيد
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 md:h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-8 h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <Rocket className="w-16 h-16 text-cyan-400 mx-auto" />
                <p className="text-slate-300">واجهة حديثة وسهلة الاستخدام</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-slate-50 mb-4">
            المميزات الرئيسية
          </h2>
          <p className="text-slate-300 dark:text-slate-400 text-lg">
            كل ما تحتاجه لتحقيق أحلامك الإبداعية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: Zap,
              title: "سرعة فائقة",
              description: "معالجة سريعة وفعالة لمشاريعك بدون تأخيرات",
            },
            {
              icon: Shield,
              title: "خصوصية تامة",
              description: "جميع بياناتك محفوظة بأمان على جهازك",
            },
            {
              icon: Rocket,
              title: "أداء عالي",
              description: "استهلاك موارد منخفض مع أداء مستقر",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white dark:text-slate-50 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-slate-50 mb-4">
            هل أنت مستعد للبدء؟
          </h2>
          <p className="text-slate-300 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المستخدمين الذين يستخدمون منصتنا لإنشاء محتوى احترافي
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-base px-8 py-6 h-auto">
            ابدأ الآن مجاناً <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 dark:border-slate-800/50 bg-slate-900/50 dark:bg-slate-950/50">
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white dark:text-slate-100">
                  Studio Pro
                </span>
              </div>
              <p className="text-slate-400 dark:text-slate-500 text-sm">
                منصة إبداعية حديثة لتحقيق أحلامك
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white dark:text-slate-50 mb-4">الروابط</h4>
              <ul className="space-y-2 text-sm text-slate-400 dark:text-slate-500">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    المميزات
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    التسعير
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white dark:text-slate-50 mb-4">الشركة</h4>
              <ul className="space-y-2 text-sm text-slate-400 dark:text-slate-500">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    المدونة
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    التواصل
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white dark:text-slate-50 mb-4">قانوني</h4>
              <ul className="space-y-2 text-sm text-slate-400 dark:text-slate-500">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    شروط الاستخدام
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 dark:border-slate-800/50 pt-8 text-center text-slate-400 dark:text-slate-500 text-sm">
            <p>© 2026 Studio Pro. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
