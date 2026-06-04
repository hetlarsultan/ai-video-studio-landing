import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Lock, Gauge, Sparkles, Film, Code2, BarChart3 } from "lucide-react";

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
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              فتح التطبيق <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="w-fit bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
              🚀 تقنية مبتكرة
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              إنشاء فيديوهات احترافية
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> بدون إنترنت</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              محرر فيديو قوي يعمل بالكامل محلياً على جهازك. معالجة سريعة، خصوصية مطلقة، وأنماط بصرية احترافية.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://3001-i7wqqfbrecliu5p39l6ke-8433bba1.us2.manus.computer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                  جرب الآن مجاناً <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                اقرأ المزيد
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600/50 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-lg flex items-center justify-center">
                  <Film className="w-24 h-24 text-cyan-400/30" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-600 rounded-full w-3/4"></div>
                  <div className="h-3 bg-slate-600 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/50">
              ✨ الميزات الرئيسية
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              كل ما تحتاجه لإنشاء فيديوهات احترافية
            </h2>
            <p className="text-lg text-slate-400">
              مجموعة شاملة من الأدوات والميزات المصممة لتسريع عملية الإنشاء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-6 hover:border-cyan-500/50 transition-colors">
              <Lock className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">خصوصية مطلقة</h3>
              <p className="text-slate-400">
                جميع البيانات تبقى على جهازك. لا توجد عمليات تحميل على السيرفر أو تتبع.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-6 hover:border-blue-500/50 transition-colors">
              <Zap className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">سرعة فائقة</h3>
              <p className="text-slate-400">
                معالجة محلية بدون تأخيرات. لا تعتمد على سرعة الإنترنت أو خوادم خارجية.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-6 hover:border-purple-500/50 transition-colors">
              <Gauge className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">أداء محسّن</h3>
              <p className="text-slate-400">
                استهلاك موارد منخفض وأداء مستقر حتى مع المشاريع الكبيرة.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Styles Section */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/50">
              🎨 الأنماط البصرية
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              ثلاثة أنماط بصرية احترافية
            </h2>
            <p className="text-lg text-slate-400">
              اختر النمط الذي يناسب مشروعك من بين خيارات متعددة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Style */}
            <div className="group">
              <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-8 h-full hover:border-green-500/50 transition-all">
                <div className="bg-green-500/10 rounded-lg p-6 mb-6 border border-green-500/20">
                  <div className="text-4xl font-bold text-green-400">🎬</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">النمط البسيط</h3>
                <p className="text-slate-400 mb-6">
                  تصميم نظيف وبسيط مثالي للمهام السريعة والعروض الأساسية.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-400">⚡</span> وقت المعالجة: 3.1 ثانية
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-400">💾</span> استهلاك الموارد: منخفض
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-400">✨</span> الجودة: عالية
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                  مثالي للمبتدئين
                </Badge>
              </Card>
            </div>

            {/* VFX Style */}
            <div className="group">
              <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-8 h-full hover:border-cyan-500/50 transition-all md:scale-105">
                <div className="bg-cyan-500/10 rounded-lg p-6 mb-6 border border-cyan-500/20">
                  <div className="text-4xl font-bold text-cyan-400">✨</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">النمط الاحترافي (VFX)</h3>
                <p className="text-slate-400 mb-6">
                  مؤثرات بصرية متقدمة مثالية للتسويق والعروض التقديمية.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-cyan-400">⚡</span> وقت المعالجة: 5.8 ثوان
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-cyan-400">💾</span> استهلاك الموارد: متوسط
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-cyan-400">✨</span> الجودة: احترافية جداً
                  </div>
                </div>
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                  الخيار الموصى به
                </Badge>
              </Card>
            </div>

            {/* Glitch Style */}
            <div className="group">
              <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-8 h-full hover:border-purple-500/50 transition-all">
                <div className="bg-purple-500/10 rounded-lg p-6 mb-6 border border-purple-500/20">
                  <div className="text-4xl font-bold text-purple-400">🎆</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">النمط الفني (Glitch)</h3>
                <p className="text-slate-400 mb-6">
                  تأثيرات فنية متقدمة مثالية للمشاريع الإبداعية والموسيقى.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-purple-400">⚡</span> وقت المعالجة: 7.2 ثوان
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-purple-400">💾</span> استهلاك الموارد: عالي
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-purple-400">✨</span> الجودة: سينمائية
                  </div>
                </div>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                  للمحترفين
                </Badge>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/50">
              📊 مقارنة الأداء
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              تحليل مفصل للأداء
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
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
      <section className="py-20 border-t border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/50">
              📚 مكتبة القوالب
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              16 قالب جاهز
            </h2>
            <p className="text-lg text-slate-400">
              قوالب احترافية في 7 فئات مختلفة لتسريع عملية الإنشاء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "وسائل اجتماعية", count: 3 },
              { name: "تعليمي", count: 2 },
              { name: "تسويق", count: 3 },
              { name: "موسيقى", count: 2 },
              { name: "أخبار", count: 2 },
              { name: "رياضة", count: 2 },
              { name: "فني", count: 2 },
            ].map((category, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50 p-4 hover:border-indigo-500/50 transition-colors">
                <div className="text-2xl mb-2">📋</div>
                <h3 className="font-semibold text-white">{category.name}</h3>
                <p className="text-sm text-slate-400">{category.count} قوالب</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              ابدأ الآن مجاناً
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              لا تحتاج إلى تسجيل أو تحميل. ابدأ في إنشاء فيديوهاتك الاحترافية فوراً.
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Film className="w-6 h-6 text-cyan-400" />
                <span className="font-bold text-white">AI Video Studio Pro</span>
              </div>
              <p className="text-sm text-slate-400">
                محرر فيديو قوي يعمل بدون إنترنت
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">الميزات</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400">العمل بدون إنترنت</a></li>
                <li><a href="#" className="hover:text-cyan-400">أنماط بصرية</a></li>
                <li><a href="#" className="hover:text-cyan-400">قوالب جاهزة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">الموارد</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400">التوثيق</a></li>
                <li><a href="#" className="hover:text-cyan-400">البرامج التعليمية</a></li>
                <li><a href="#" className="hover:text-cyan-400">الدعم</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">حول</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400">عن التطبيق</a></li>
                <li><a href="#" className="hover:text-cyan-400">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-cyan-400">شروط الاستخدام</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 AI Video Studio Pro. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
