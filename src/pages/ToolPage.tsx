import { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, RefreshCw, CheckCircle, Settings } from 'lucide-react';
import { FileUpload } from '@/components/FileUpload';
import { ProgressBar } from '@/components/ProgressBar';
import { getToolById } from '@/data/tools';
import { cn } from '@/utils/cn';

type Step = 'upload' | 'settings' | 'processing' | 'complete';

export function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = getToolById(toolId || '');
  
  const [files, setFiles] = useState<File[]>([]);
  const [step, setStep] = useState<Step>('upload');
  const [progress, setProgress] = useState(0);
  const [settings, setSettings] = useState<Record<string, any>>({});

  const handleFilesChange = useCallback((newFiles: File[]) => {
    setFiles(newFiles);
  }, []);

  const handleProcess = useCallback(async () => {
    setStep('processing');
    setProgress(0);

    // Simulate processing with progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStep('complete'), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  }, []);

  const handleDownload = useCallback(() => {
    // In a real app, this would download the processed file
    // For demo, we'll create a dummy download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `processed-${files[0]?.name || 'file.pdf'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [files]);

  const handleReset = useCallback(() => {
    setFiles([]);
    setStep('upload');
    setProgress(0);
    setSettings({});
  }, []);

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Tool not found</h1>
          <Link to="/" className="text-red-500 hover:text-red-600">
            Go back to homepage
          </Link>
        </div>
      </div>
    );
  }

  const Icon = tool.icon;
  const isMultipleFiles = ['merge-pdf', 'jpg-to-pdf'].includes(tool.id);

  const renderSettings = () => {
    switch (tool.id) {
      case 'compress-pdf':
        return (
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">Compression Level</h3>
            <div className="grid grid-cols-3 gap-3">
              {['Low (High Quality)', 'Medium', 'High (Small Size)'].map((level, i) => (
                <button
                  key={level}
                  onClick={() => setSettings({ ...settings, compression: i + 1 })}
                  className={cn(
                    "p-4 rounded-xl border-2 text-center transition-all",
                    settings.compression === i + 1
                      ? "border-red-500 bg-red-50 dark:bg-red-500/10"
                      : "border-slate-200 dark:border-slate-700 hover:border-red-300"
                  )}
                >
                  <div className="font-medium text-slate-900 dark:text-white">{level.split(' ')[0]}</div>
                  <div className="text-xs text-slate-500 mt-1">{level.includes('(') ? level.match(/\((.+)\)/)?.[1] : ''}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 'split-pdf':
        return (
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">Split Options</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-red-300">
                <input type="radio" name="split" value="all" defaultChecked className="text-red-500" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Split by every page</div>
                  <div className="text-sm text-slate-500">Each page becomes a separate PDF</div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-red-300">
                <input type="radio" name="split" value="range" className="text-red-500" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Split by range</div>
                  <div className="text-sm text-slate-500">Define custom page ranges</div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-red-300">
                <input type="radio" name="split" value="size" className="text-red-500" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Split by size</div>
                  <div className="text-sm text-slate-500">Split into files of specified size</div>
                </div>
              </label>
            </div>
          </div>
        );
      case 'protect-pdf':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none"
                onChange={(e) => setSettings({ ...settings, password: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none"
              />
            </div>
          </div>
        );
      case 'page-numbers':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Position
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                <option>Bottom Center</option>
                <option>Bottom Left</option>
                <option>Bottom Right</option>
                <option>Top Center</option>
                <option>Top Left</option>
                <option>Top Right</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Start from page
              </label>
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>
        );
      case 'watermark':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Watermark Text
              </label>
              <input
                type="text"
                placeholder="CONFIDENTIAL"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                onChange={(e) => setSettings({ ...settings, watermark: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Opacity: {settings.opacity || 50}%
              </label>
              <input
                type="range"
                min={10}
                max={100}
                defaultValue={50}
                className="w-full"
                onChange={(e) => setSettings({ ...settings, opacity: e.target.value })}
              />
            </div>
          </div>
        );
      case 'rotate-pdf':
        return (
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">Rotation Angle</h3>
            <div className="grid grid-cols-4 gap-3">
              {[90, 180, 270, 360].map((angle) => (
                <button
                  key={angle}
                  onClick={() => setSettings({ ...settings, rotation: angle })}
                  className={cn(
                    "p-4 rounded-xl border-2 text-center transition-all",
                    settings.rotation === angle
                      ? "border-red-500 bg-red-50 dark:bg-red-500/10"
                      : "border-slate-200 dark:border-slate-700 hover:border-red-300"
                  )}
                >
                  <div className="font-medium text-slate-900 dark:text-white">{angle}°</div>
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            <Settings className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No additional settings required</p>
            <p className="text-sm mt-2">Click "Process" to continue with default options</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all tools</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center", tool.categoryColor)}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{tool.name}</h1>
              <p className="text-slate-500 dark:text-slate-400">{tool.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {['Upload', 'Settings', 'Process', 'Download'].map((label, index) => {
              const stepOrder: Record<Step, number> = { upload: 0, settings: 1, processing: 2, complete: 3 };
              const currentStepOrder = stepOrder[step];
              const isActive = currentStepOrder >= index;
              const isCurrent = currentStepOrder === index;

              return (
                <div key={label} className="flex items-center">
                  <div className="flex items-center">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                        isActive
                          ? isCurrent
                            ? "bg-red-500 text-white"
                            : "bg-red-500 text-white"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-500"
                      )}
                    >
                      {isActive && !isCurrent ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span
                      className={cn(
                        "ml-2 text-sm font-medium hidden sm:inline",
                        isActive ? "text-red-500" : "text-slate-500"
                      )}
                    >
                      {label}
                    </span>
                  </div>
                  {index < 3 && (
                    <div
                      className={cn(
                        "w-12 sm:w-24 h-0.5 mx-2",
                        currentStepOrder > index ? "bg-red-500" : "bg-slate-200 dark:bg-slate-700"
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Upload Step */}
        {step === 'upload' && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <FileUpload
              acceptedFiles={tool.acceptedFiles}
              multiple={isMultipleFiles}
              files={files}
              onFilesChange={handleFilesChange}
            />

            {files.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setStep('settings')}
                  className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-500/25"
                >
                  Continue to Settings
                </button>
              </div>
            )}
          </div>
        )}

        {/* Settings Step */}
        {step === 'settings' && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Configure Options
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Customize the settings for your {tool.name.toLowerCase()} operation
              </p>
            </div>

            {renderSettings()}

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex gap-4">
              <button
                onClick={() => setStep('upload')}
                className="px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                Back
              </button>
              <button
                onClick={handleProcess}
                className="flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-500/25 flex items-center justify-center gap-2"
              >
                <ZapIcon className="w-5 h-5" />
                Process {files.length} file{files.length !== 1 ? 's' : ''}
              </button>
            </div>
          </div>
        )}

        {/* Processing Step */}
        {step === 'processing' && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-red-500 animate-pulse" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Processing Your Files
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Please wait while we {tool.name.toLowerCase().replace('pdf', '')} your document
              </p>
            </div>

            <ProgressBar progress={Math.min(progress, 100)} status="processing" />
          </div>
        )}

        {/* Complete Step */}
        {step === 'complete' && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Your Files Are Ready!
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                The {tool.name.toLowerCase()} operation completed successfully
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", tool.categoryColor)}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-white">
                    processed-{files[0]?.name || 'file.pdf'}
                  </p>
                  <p className="text-sm text-slate-500">
                    Ready to download
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Process More
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg shadow-green-500/25 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download File
              </button>
            </div>
          </div>
        )}

        {/* Privacy Notice */}
        <div className="mt-8 p-4 bg-green-50 dark:bg-green-500/10 rounded-xl border border-green-200 dark:border-green-500/20">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-medium text-green-800 dark:text-green-300">Your files are secure</p>
              <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                All files are processed securely and automatically deleted from our servers within 1 hour after processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple Zap icon component
function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
