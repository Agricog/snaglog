import { 
  Camera, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Upload, 
  Sparkles, 
  Home,
  Building2,
  HardHat,
  ClipboardCheck,
  ArrowRight,
  Star,
  Shield,
  Zap,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import './index.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is snagging and why do I need it?",
      a: "Snagging is the process of identifying defects in a new build property before you move in. It's your opportunity to get the developer to fix issues while they're still responsible. Most new builds have 50-150 defects that need attention."
    },
    {
      q: "How does SnagLog's AI analysis work?",
      a: "You upload photos of defects you've found. Our AI analyzes each image to identify the type of defect, its severity, which trade is responsible, and what remedial action is needed. It then compiles everything into a professional PDF report."
    },
    {
      q: "How long does it take to generate a report?",
      a: "Once you've uploaded your photos, our AI typically processes them in 1-2 minutes. The whole process from photos to finished PDF takes around 15-20 minutes - compared to 2-4 hours doing it manually."
    },
    {
      q: "What if the AI gets something wrong?",
      a: "You can review and edit every snag before generating your final report. Change descriptions, reassign rooms, adjust severity levels - you have full control over the final output."
    },
    {
      q: "Will developers accept a SnagLog report?",
      a: "Yes. Our reports are professionally formatted with clear photos, descriptions, and remedial actions. They're designed to be easy for developers and site managers to work through and sign off."
    },
    {
      q: "Can I use SnagLog for existing properties?",
      a: "While designed for new build snagging, SnagLog works great for any property inspection - end of tenancy reports, pre-purchase surveys, or documenting property condition."
    },
    {
      q: "Is my data secure?",
      a: "Yes. Your photos are processed securely and deleted after report generation. We don't share your data with third parties."
    },
    {
      q: "What's included in the free demo?",
      a: "The free demo report shows you exactly what a full SnagLog report looks like - complete with sample snags, severity ratings, trade assignments, and professional formatting."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">SnagLog</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-slate-600 hover:text-orange-600 transition-colors">How It Works</a>
              <a href="#pricing" className="text-slate-600 hover:text-orange-600 transition-colors">Pricing</a>
              <a href="#faq" className="text-slate-600 hover:text-orange-600 transition-colors">FAQ</a>
              <a 
                href="#get-started" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
              >
                Get Started Free
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-slate-600 hover:text-orange-600">How It Works</a>
              <a href="#pricing" className="text-slate-600 hover:text-orange-600">Pricing</a>
              <a href="#faq" className="text-slate-600 hover:text-orange-600">FAQ</a>
              <a 
                href="#get-started" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-lg font-semibold text-center"
              >
                Get Started Free
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Snagging Reports
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Photos In.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Snag List Out.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Create professional snagging reports in minutes, not hours. 
              Upload photos, AI identifies defects, download your PDF.
            </p>

            {/* CTA */}
            <div className="flex justify-center mb-12">
              <a 
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Free Demo Report
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>Reports in under 20 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange-500" />
                <span>No account required</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-500" />
                <span>Professional PDF output</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12">
            Perfect for anyone inspecting properties
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "Homebuyers", desc: "Document snags before completion" },
              { icon: Building2, title: "Developers", desc: "QA checks before handover" },
              { icon: HardHat, title: "Site Managers", desc: "Efficient defect tracking" },
              { icon: ClipboardCheck, title: "Inspectors", desc: "Professional reports, fast" }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-orange-50 transition-colors">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Three simple steps from photos to professional report
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 h-full">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  1
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Take Photos</h3>
                <p className="text-slate-600">
                  Walk through the property and photograph every defect you find. No special equipment needed - your phone camera works perfectly.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 h-full">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  2
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Upload & AI Analyzes</h3>
                <p className="text-slate-600">
                  Upload your photos in one batch. Our AI identifies each defect type, severity, responsible trade, and recommended fix.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 h-full">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  3
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Download Report</h3>
                <p className="text-slate-600">
                  Review, edit if needed, then download your professional PDF report. Ready to send straight to your developer.
                </p>
              </div>
            </div>
          </div>

          {/* Time comparison */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 max-w-3xl mx-auto text-white text-center">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div>
                <div className="text-4xl font-bold">2-4 hrs</div>
                <div className="text-orange-100">Manual snagging</div>
              </div>
              <div className="text-3xl font-bold">→</div>
              <div>
                <div className="text-4xl font-bold">15 mins</div>
                <div className="text-orange-100">With SnagLog</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-600">
              Professional reports without the professional price tag
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "AI Defect Detection",
                desc: "Automatically identifies paint issues, joinery defects, plumbing problems, and 20+ other defect categories"
              },
              {
                icon: Zap,
                title: "Instant Processing",
                desc: "Upload 100+ photos and get results in under 2 minutes. No waiting, no manual data entry"
              },
              {
                icon: FileText,
                title: "Professional PDFs",
                desc: "Polished reports organized by room with photos, descriptions, and remedial actions"
              },
              {
                icon: ClipboardCheck,
                title: "Severity Ratings",
                desc: "Each snag rated Minor, Moderate, or Major so you know what to prioritize"
              },
              {
                icon: HardHat,
                title: "Trade Assignment",
                desc: "AI identifies which trade is responsible - decorator, plumber, electrician, joiner, and more"
              },
              {
                icon: Shield,
                title: "Edit Before Export",
                desc: "Full control to review, correct, and customize every snag before generating your final report"
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all">
                <feature.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              Pay only when you need a full report
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Single Report - Featured */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-semibold text-orange-100">Single Report</div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">Most Popular</div>
              </div>
              <div className="text-4xl font-bold mb-1">£12.99</div>
              <div className="text-orange-100 mb-6">One-time payment</div>
              <ul className="space-y-3 mb-8">
                {["Unlimited snags", "No watermark", "Full PDF report", "Email to developer", "Lifetime access"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className="block text-center py-3 px-6 rounded-lg bg-white text-orange-600 font-bold hover:bg-orange-50 transition-all">
                Get Started
              </a>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="text-lg font-semibold text-slate-600 mb-2">Pro Monthly</div>
              <div className="text-4xl font-bold text-slate-800 mb-1">£39<span className="text-lg font-normal text-slate-500">/mo</span></div>
              <div className="text-slate-500 mb-6">For professionals</div>
              <ul className="space-y-3 mb-8">
                {["Unlimited reports", "Priority processing", "Custom branding", "Team access", "Cancel anytime"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className="block text-center py-3 px-6 rounded-lg border-2 border-slate-200 text-slate-700 font-semibold hover:border-orange-300 hover:text-orange-600 transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl text-slate-700 font-medium mb-6">
            "Used SnagLog for our new build handover. Identified 47 snags in under 20 minutes. 
            Developer fixed everything within 2 weeks. Absolutely worth it."
          </blockquote>
          <div className="text-slate-500">
            — James T., Homeowner, Bristol
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Form Section */}
      <section id="get-started" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Snag List?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Enter your details below to get the free demo report
          </p>

          {/* SmartSuite Form Embed */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-xl mx-auto">
            <iframe 
              src="https://app.smartsuite.com/form/sba974gi/ApfaWcpNcD?header=false" 
              width="100%" 
              height="600" 
              frameBorder="0"
              title="SnagLog Signup Form"
              className="rounded-lg"
            />
          </div>

          {/* Alternative contact */}
          <p className="text-orange-100 mt-8">
            Questions? Email us at{' '}
            <a href="mailto:hello@snaglog.co.uk" className="text-white font-semibold underline">
              hello@snaglog.co.uk
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">SnagLog</span>
              </div>
              <p className="text-slate-400 max-w-md">
                AI-powered snagging reports for new build properties. 
                Photos in, professional snag list out.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} SnagLog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
