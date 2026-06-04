import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, Mail, Phone, MessageSquare, User } from 'lucide-react';

// Validation rules
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const VALIDATION_RULES = {
  name: {
    required: 'الاسم مطلوب',
    minLength: { value: 2, message: 'الاسم يجب أن يكون 2 أحرف على الأقل' },
    maxLength: { value: 50, message: 'الاسم يجب ألا يتجاوز 50 حرف' },
    pattern: { value: /^[a-zA-Z\u0600-\u06FF\s'-]+$/, message: 'الاسم يحتوي على أحرف غير صحيحة' },
  },
  email: {
    required: 'البريد الإلكتروني مطلوب',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'البريد الإلكتروني غير صحيح',
    },
  },
  phone: {
    pattern: {
      value: /^[\d\s\-\+\(\)]{0,20}$/,
      message: 'رقم الهاتف غير صحيح',
    },
  },
  subject: {
    required: 'الموضوع مطلوب',
    minLength: { value: 3, message: 'الموضوع يجب أن يكون 3 أحرف على الأقل' },
    maxLength: { value: 100, message: 'الموضوع يجب ألا يتجاوز 100 حرف' },
  },
  message: {
    required: 'الرسالة مطلوبة',
    minLength: { value: 10, message: 'الرسالة يجب أن تكون 10 أحرف على الأقل' },
    maxLength: { value: 1000, message: 'الرسالة يجب ألا تتجاوز 1000 حرف' },
  },
};

function validateField(name: keyof FormData, value: string): string | undefined {
  const rules = VALIDATION_RULES[name];
  if (!rules) return undefined;

  // Check required
  if ('required' in rules && !value.trim()) {
    return rules.required;
  }

  // Check minLength
  if ('minLength' in rules && value.length > 0 && value.length < rules.minLength.value) {
    return rules.minLength.message;
  }

  // Check maxLength
  if ('maxLength' in rules && value.length > rules.maxLength.value) {
    return rules.maxLength.message;
  }

  // Check pattern
  if ('pattern' in rules && value && !rules.pattern.value.test(value)) {
    return rules.pattern.message;
  }

  return undefined;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  Object.keys(data).forEach((key) => {
    const fieldName = key as keyof FormData;
    const error = validateField(fieldName, data[fieldName]);
    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Real-time validation if field has been touched
    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({
        ...prev,
        [fieldName]: error,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    const error = validateField(fieldName, value);
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setSubmitStatus('error');
      setSubmitMessage('يرجى تصحيح الأخطاء أعلاه');
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);
    try {
      // In a real application, you would send this to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      setSubmitMessage('تم إرسال رسالتك بنجاح! سنرد عليك قريباً.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTouched({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldIcon = (fieldName: string) => {
    switch (fieldName) {
      case 'name':
        return <User className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      case 'phone':
        return <Phone className="w-4 h-4" />;
      case 'subject':
        return <MessageSquare className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-lg border flex items-start gap-3 ${
                submitStatus === 'success'
                  ? 'bg-green-500/10 border-green-500/30 text-green-300'
                  : 'bg-red-500/10 border-red-500/30 text-red-300'
              }`}
            >
              {submitStatus === 'success' ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              )}
              <p className="text-sm md:text-base">{submitMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
            الاسم الكامل *
          </label>
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
              {getFieldIcon('name')}
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="أدخل اسمك الكامل"
              className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 pr-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                touched.name && errors.name
                  ? 'border-red-500/50 focus:ring-red-500/50'
                  : 'border-slate-600/50 focus:ring-cyan-500/50'
              }`}
            />
          </div>
          <AnimatePresence>
            {touched.name && errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-xs md:text-sm mt-2 flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            البريد الإلكتروني *
          </label>
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
              {getFieldIcon('email')}
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="your@email.com"
              className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 pr-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                touched.email && errors.email
                  ? 'border-red-500/50 focus:ring-red-500/50'
                  : 'border-slate-600/50 focus:ring-cyan-500/50'
              }`}
            />
          </div>
          <AnimatePresence>
            {touched.email && errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-xs md:text-sm mt-2 flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
            رقم الهاتف (اختياري)
          </label>
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
              {getFieldIcon('phone')}
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+966 50 1234567"
              className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 pr-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                touched.phone && errors.phone
                  ? 'border-red-500/50 focus:ring-red-500/50'
                  : 'border-slate-600/50 focus:ring-cyan-500/50'
              }`}
            />
          </div>
          <AnimatePresence>
            {touched.phone && errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-xs md:text-sm mt-2 flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
            الموضوع *
          </label>
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
              {getFieldIcon('subject')}
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="ما موضوع رسالتك؟"
              className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 pr-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                touched.subject && errors.subject
                  ? 'border-red-500/50 focus:ring-red-500/50'
                  : 'border-slate-600/50 focus:ring-cyan-500/50'
              }`}
            />
          </div>
          <AnimatePresence>
            {touched.subject && errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-xs md:text-sm mt-2 flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.subject}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
            الرسالة * ({formData.message.length}/1000)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="اكتب رسالتك هنا..."
            rows={5}
            className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
              touched.message && errors.message
                ? 'border-red-500/50 focus:ring-red-500/50'
                : 'border-slate-600/50 focus:ring-cyan-500/50'
            }`}
          />
          <AnimatePresence>
            {touched.message && errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-xs md:text-sm mt-2 flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="pt-2"
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 md:py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                جاري الإرسال...
              </span>
            ) : (
              'إرسال الرسالة'
            )}
          </Button>
        </motion.div>

        <p className="text-xs md:text-sm text-slate-400 text-center">
          * الحقول المطلوبة
        </p>
      </form>
    </motion.div>
  );
}
