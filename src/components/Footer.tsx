import { Link } from 'react-router-dom';
import { FileText, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                PDF<span className="text-red-500">Tools</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Free online PDF tools to make your PDF tasks easy. Merge, split, compress, convert, and edit PDFs with just a few clicks.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for everyone</span>
            </div>
          </div>

          {/* Organize */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-400">Organize</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/merge-pdf" className="text-slate-400 hover:text-white transition-colors">Merge PDF</Link></li>
              <li><Link to="/split-pdf" className="text-slate-400 hover:text-white transition-colors">Split PDF</Link></li>
              <li><Link to="/remove-pages" className="text-slate-400 hover:text-white transition-colors">Remove Pages</Link></li>
              <li><Link to="/extract-pages" className="text-slate-400 hover:text-white transition-colors">Extract Pages</Link></li>
            </ul>
          </div>

          {/* Optimize */}
          <div>
            <h3 className="font-semibold mb-4 text-green-400">Optimize</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/compress-pdf" className="text-slate-400 hover:text-white transition-colors">Compress PDF</Link></li>
              <li><Link to="/repair-pdf" className="text-slate-400 hover:text-white transition-colors">Repair PDF</Link></li>
              <li><Link to="/ocr-pdf" className="text-slate-400 hover:text-white transition-colors">OCR PDF</Link></li>
            </ul>
          </div>

          {/* Convert */}
          <div>
            <h3 className="font-semibold mb-4 text-purple-400">Convert</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/jpg-to-pdf" className="text-slate-400 hover:text-white transition-colors">JPG to PDF</Link></li>
              <li><Link to="/pdf-to-jpg" className="text-slate-400 hover:text-white transition-colors">PDF to JPG</Link></li>
              <li><Link to="/word-to-pdf" className="text-slate-400 hover:text-white transition-colors">Word to PDF</Link></li>
              <li><Link to="/pdf-to-word" className="text-slate-400 hover:text-white transition-colors">PDF to Word</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-300">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} PDFTools. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-800 px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Your files are secure and automatically deleted after processing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
