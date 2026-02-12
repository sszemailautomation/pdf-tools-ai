import { useState, useRef, useCallback } from 'react';
import { Upload, X, FileText, Image, File } from 'lucide-react';
import { cn } from '@/utils/cn';

interface FileUploadProps {
  acceptedFiles: string;
  multiple?: boolean;
  files: File[];
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
}

export function FileUpload({
  acceptedFiles,
  multiple = false,
  files,
  onFilesChange,
  maxFiles = 20
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (multiple) {
      const remaining = maxFiles - files.length;
      onFilesChange([...files, ...droppedFiles.slice(0, remaining)]);
    } else {
      onFilesChange(droppedFiles.slice(0, 1));
    }
  }, [files, maxFiles, multiple, onFilesChange]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (multiple) {
        const remaining = maxFiles - files.length;
        onFilesChange([...files, ...selectedFiles.slice(0, remaining)]);
      } else {
        onFilesChange(selectedFiles.slice(0, 1));
      }
    }
  }, [files, maxFiles, multiple, onFilesChange]);

  const removeFile = useCallback((index: number) => {
    onFilesChange(files.filter((_, i) => i !== index));
  }, [files, onFilesChange]);

  const getFileIcon = (file: File) => {
    if (file.type === 'application/pdf') return FileText;
    if (file.type.startsWith('image/')) return Image;
    return File;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const acceptedExtensions = acceptedFiles.split(',').map(ext => ext.trim().replace('.', '').toUpperCase()).join(', ');

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300",
          isDragging
            ? "border-red-500 bg-red-50 dark:bg-red-500/10"
            : "border-slate-300 dark:border-slate-600 hover:border-red-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={acceptedFiles}
          multiple={multiple}
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="flex flex-col items-center">
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors",
            isDragging ? "bg-red-500" : "bg-slate-100 dark:bg-slate-800"
          )}>
            <Upload className={cn(
              "w-8 h-8",
              isDragging ? "text-white" : "text-slate-400 dark:text-slate-500"
            )} />
          </div>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            {isDragging ? 'Drop your files here' : 'Select PDF files'}
          </h3>
          
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Drag and drop {multiple ? 'files' : 'a file'} here or click to browse
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-600 dark:text-slate-400">
            <span>Accepted formats:</span>
            <span className="font-medium text-red-500">{acceptedExtensions}</span>
          </div>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {files.length} file{files.length !== 1 ? 's' : ''} selected
            </span>
            <button
              onClick={() => onFilesChange([])}
              className="text-sm text-red-500 hover:text-red-600 font-medium"
            >
              Clear all
            </button>
          </div>

          <div className="max-h-64 overflow-y-auto space-y-2">
            {files.map((file, index) => {
              const FileIcon = getFileIcon(file);
              return (
                <div
                  key={`${file.name}-${index}`}
                  className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl"
                >
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-500/20 rounded-lg flex items-center justify-center">
                    <FileIcon className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 text-slate-500" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
