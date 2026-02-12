import { Link } from 'react-router-dom';
import { Check, X, Zap, Crown, Building } from 'lucide-react';
import { cn } from '@/utils/cn';

export function PricingPage() {
  const plans = [
    {
      name: 'Free',
      icon: Zap,
      price: '$0',
      period: 'forever',
      description: 'Perfect for occasional use',
      features: [
        { text: 'All basic PDF tools', included: true },
        { text: 'Up to 25 MB file size', included: true },
        { text: '2 tasks per day', included: true },
        { text: 'Standard processing speed', included: true },
        { text: 'Batch processing', included: false },
        { text: 'OCR (text recognition)', included: false },
        { text: 'No ads', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Pro',
      icon: Crown,
      price: '$9',
      period: '/month',
      description: 'For power users and professionals',
      features: [
        { text: 'All PDF tools', included: true },
        { text: 'Up to 100 MB file size', included: true },
        { text: 'Unlimited tasks', included: true },
        { text: 'Fast processing speed', included: true },
        { text: 'Batch processing', included: true },
        { text: 'OCR (100 pages/month)', included: true },
        { text: 'No ads', included: true },
        { text: 'Priority support', included: false },
      ],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      name: 'Business',
      icon: Building,
      price: '$29',
      period: '/month',
      description: 'For teams and businesses',
      features: [
        { text: 'Everything in Pro', included: true },
        { text: 'Unlimited file size', included: true },
        { text: 'Unlimited tasks', included: true },
        { text: 'Fastest processing', included: true },
        { text: 'Batch processing', included: true },
        { text: 'Unlimited OCR', included: true },
        { text: 'No ads', included: true },
        { text: 'Priority support', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include access to our full suite of PDF tools.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 -mt-12">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={cn(
                  "bg-white dark:bg-slate-800 rounded-2xl shadow-lg border-2 relative overflow-hidden",
                  plan.popular
                    ? "border-red-500 shadow-xl shadow-red-500/10"
                    : "border-slate-200 dark:border-slate-700"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium text-center py-1">
                    Most Popular
                  </div>
                )}

                <div className={cn("p-6 lg:p-8", plan.popular && "pt-10")}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      plan.popular ? "bg-red-100 dark:bg-red-500/20" : "bg-slate-100 dark:bg-slate-700"
                    )}>
                      <Icon className={cn(
                        "w-6 h-6",
                        plan.popular ? "text-red-500" : "text-slate-500 dark:text-slate-400"
                      )} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">{plan.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                    <span className="text-slate-500 dark:text-slate-400">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                            <X className="w-3 h-3 text-slate-400" />
                          </div>
                        )}
                        <span className={cn(
                          "text-sm",
                          feature.included
                            ? "text-slate-700 dark:text-slate-300"
                            : "text-slate-400 dark:text-slate-500"
                        )}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/"
                    className={cn(
                      "block w-full py-3 rounded-xl font-semibold text-center transition-all",
                      plan.popular
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/25"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                    )}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
            },
            {
              q: 'Is there a free trial for Pro plans?',
              a: 'Yes! We offer a 7-day free trial for our Pro plan. No credit card required to start.',
            },
            {
              q: 'How secure is my data?',
              a: 'All files are encrypted during transfer and processing. Files are automatically deleted within 1 hour after processing.',
            },
            {
              q: 'Can I upgrade or downgrade my plan?',
              a: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle.',
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-slate-500 dark:text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Using PDFTools Today
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust PDFTools for their document needs.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}
