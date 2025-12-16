import { 
  Camera, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Upload, 
  Sparkles, 
  Download,
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
      a: "The free demo lets you try the full workflow with up to 10 snags. You'll receive a watermarked PDF showing exactly what the full report looks like."
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                St
