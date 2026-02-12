import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { ToolPage } from '@/pages/ToolPage';
import { ImageToolsPage } from '@/pages/ImageToolsPage';
import { PricingPage } from '@/pages/PricingPage';
import { tools } from '@/data/tools';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/image-tools" element={<ImageToolsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              
              {/* Dynamic routes for all tools */}
              {tools.map(tool => (
                <Route
                  key={tool.id}
                  path={tool.route}
                  element={<ToolPage />}
                />
              ))}
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
