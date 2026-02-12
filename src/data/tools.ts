import { 
  Merge, Split, Trash2, FileOutput, 
  Minimize2, Wrench, Scan,
  FileText, Presentation, Table, Image, FileCode,
  RotateCw, Hash, Droplet, Crop,
  Unlock, Lock, PenTool, EyeOff,
  GitCompare, FileImage, RefreshCw, Gauge, Maximize2
} from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  categoryColor: string;
  acceptedFiles: string;
  route: string;
}

export const categories = [
  { id: 'organize', name: 'Organize PDF', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-500' },
  { id: 'optimize', name: 'Optimize PDF', color: 'from-green-500 to-green-600', bgColor: 'bg-green-500' },
  { id: 'convert-to', name: 'Convert to PDF', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-500' },
  { id: 'convert-from', name: 'Convert from PDF', color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-500' },
  { id: 'edit', name: 'Edit PDF', color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-500' },
  { id: 'security', name: 'PDF Security', color: 'from-red-500 to-red-600', bgColor: 'bg-red-500' },
  { id: 'compare', name: 'Compare & Analyze', color: 'from-indigo-500 to-indigo-600', bgColor: 'bg-indigo-500' },
  { id: 'image', name: 'Image Tools', color: 'from-teal-500 to-teal-600', bgColor: 'bg-teal-500' },
];

export const tools: Tool[] = [
  // Organize PDF
  {
    id: 'merge-pdf',
    name: 'Merge PDF',
    description: 'Combine multiple PDFs into one document',
    icon: Merge,
    category: 'organize',
    categoryColor: 'bg-blue-500',
    acceptedFiles: '.pdf',
    route: '/merge-pdf'
  },
  {
    id: 'split-pdf',
    name: 'Split PDF',
    description: 'Split a PDF into multiple documents',
    icon: Split,
    category: 'organize',
    categoryColor: 'bg-blue-500',
    acceptedFiles: '.pdf',
    route: '/split-pdf'
  },
  {
    id: 'remove-pages',
    name: 'Remove Pages',
    description: 'Delete unwanted pages from your PDF',
    icon: Trash2,
    category: 'organize',
    categoryColor: 'bg-blue-500',
    acceptedFiles: '.pdf',
    route: '/remove-pages'
  },
  {
    id: 'extract-pages',
    name: 'Extract Pages',
    description: 'Extract specific pages from a PDF',
    icon: FileOutput,
    category: 'organize',
    categoryColor: 'bg-blue-500',
    acceptedFiles: '.pdf',
    route: '/extract-pages'
  },
  // Optimize PDF
  {
    id: 'compress-pdf',
    name: 'Compress PDF',
    description: 'Reduce PDF file size for easy sharing',
    icon: Minimize2,
    category: 'optimize',
    categoryColor: 'bg-green-500',
    acceptedFiles: '.pdf',
    route: '/compress-pdf'
  },
  {
    id: 'repair-pdf',
    name: 'Repair PDF',
    description: 'Fix corrupted or damaged PDF files',
    icon: Wrench,
    category: 'optimize',
    categoryColor: 'bg-green-500',
    acceptedFiles: '.pdf',
    route: '/repair-pdf'
  },
  {
    id: 'ocr-pdf',
    name: 'OCR PDF',
    description: 'Convert scanned PDFs to searchable text',
    icon: Scan,
    category: 'optimize',
    categoryColor: 'bg-green-500',
    acceptedFiles: '.pdf',
    route: '/ocr-pdf'
  },
  // Convert to PDF
  {
    id: 'jpg-to-pdf',
    name: 'JPG to PDF',
    description: 'Convert JPG images to PDF format',
    icon: Image,
    category: 'convert-to',
    categoryColor: 'bg-purple-500',
    acceptedFiles: '.jpg,.jpeg,.png',
    route: '/jpg-to-pdf'
  },
  {
    id: 'word-to-pdf',
    name: 'Word to PDF',
    description: 'Convert Word documents to PDF',
    icon: FileText,
    category: 'convert-to',
    categoryColor: 'bg-purple-500',
    acceptedFiles: '.doc,.docx',
    route: '/word-to-pdf'
  },
  {
    id: 'ppt-to-pdf',
    name: 'PowerPoint to PDF',
    description: 'Convert PowerPoint to PDF format',
    icon: Presentation,
    category: 'convert-to',
    categoryColor: 'bg-purple-500',
    acceptedFiles: '.ppt,.pptx',
    route: '/ppt-to-pdf'
  },
  {
    id: 'excel-to-pdf',
    name: 'Excel to PDF',
    description: 'Convert Excel spreadsheets to PDF',
    icon: Table,
    category: 'convert-to',
    categoryColor: 'bg-purple-500',
    acceptedFiles: '.xls,.xlsx',
    route: '/excel-to-pdf'
  },
  {
    id: 'html-to-pdf',
    name: 'HTML to PDF',
    description: 'Convert HTML web pages to PDF',
    icon: FileCode,
    category: 'convert-to',
    categoryColor: 'bg-purple-500',
    acceptedFiles: '.html,.htm',
    route: '/html-to-pdf'
  },
  // Convert from PDF
  {
    id: 'pdf-to-jpg',
    name: 'PDF to JPG',
    description: 'Convert PDF pages to JPG images',
    icon: FileImage,
    category: 'convert-from',
    categoryColor: 'bg-orange-500',
    acceptedFiles: '.pdf',
    route: '/pdf-to-jpg'
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word',
    description: 'Convert PDF to editable Word document',
    icon: FileText,
    category: 'convert-from',
    categoryColor: 'bg-orange-500',
    acceptedFiles: '.pdf',
    route: '/pdf-to-word'
  },
  {
    id: 'pdf-to-ppt',
    name: 'PDF to PowerPoint',
    description: 'Convert PDF to PowerPoint slides',
    icon: Presentation,
    category: 'convert-from',
    categoryColor: 'bg-orange-500',
    acceptedFiles: '.pdf',
    route: '/pdf-to-ppt'
  },
  {
    id: 'pdf-to-excel',
    name: 'PDF to Excel',
    description: 'Convert PDF tables to Excel format',
    icon: Table,
    category: 'convert-from',
    categoryColor: 'bg-orange-500',
    acceptedFiles: '.pdf',
    route: '/pdf-to-excel'
  },
  {
    id: 'pdf-to-pdfa',
    name: 'PDF to PDF/A',
    description: 'Convert to archival PDF/A format',
    icon: FileText,
    category: 'convert-from',
    categoryColor: 'bg-orange-500',
    acceptedFiles: '.pdf',
    route: '/pdf-to-pdfa'
  },
  // Edit PDF
  {
    id: 'rotate-pdf',
    name: 'Rotate PDF',
    description: 'Rotate PDF pages to any orientation',
    icon: RotateCw,
    category: 'edit',
    categoryColor: 'bg-pink-500',
    acceptedFiles: '.pdf',
    route: '/rotate-pdf'
  },
  {
    id: 'page-numbers',
    name: 'Add Page Numbers',
    description: 'Add page numbers to PDF documents',
    icon: Hash,
    category: 'edit',
    categoryColor: 'bg-pink-500',
    acceptedFiles: '.pdf',
    route: '/page-numbers'
  },
  {
    id: 'watermark',
    name: 'Add Watermark',
    description: 'Add text or image watermark to PDF',
    icon: Droplet,
    category: 'edit',
    categoryColor: 'bg-pink-500',
    acceptedFiles: '.pdf',
    route: '/watermark'
  },
  {
    id: 'crop-pdf',
    name: 'Crop PDF',
    description: 'Crop pages to custom dimensions',
    icon: Crop,
    category: 'edit',
    categoryColor: 'bg-pink-500',
    acceptedFiles: '.pdf',
    route: '/crop-pdf'
  },
  // PDF Security
  {
    id: 'unlock-pdf',
    name: 'Unlock PDF',
    description: 'Remove password from protected PDF',
    icon: Unlock,
    category: 'security',
    categoryColor: 'bg-red-500',
    acceptedFiles: '.pdf',
    route: '/unlock-pdf'
  },
  {
    id: 'protect-pdf',
    name: 'Protect PDF',
    description: 'Add password protection to PDF',
    icon: Lock,
    category: 'security',
    categoryColor: 'bg-red-500',
    acceptedFiles: '.pdf',
    route: '/protect-pdf'
  },
  {
    id: 'sign-pdf',
    name: 'Sign PDF',
    description: 'Add your signature to PDF documents',
    icon: PenTool,
    category: 'security',
    categoryColor: 'bg-red-500',
    acceptedFiles: '.pdf',
    route: '/sign-pdf'
  },
  {
    id: 'redact-pdf',
    name: 'Redact PDF',
    description: 'Permanently black out sensitive content',
    icon: EyeOff,
    category: 'security',
    categoryColor: 'bg-red-500',
    acceptedFiles: '.pdf',
    route: '/redact-pdf'
  },
  // Compare
  {
    id: 'compare-pdf',
    name: 'Compare PDF',
    description: 'Compare two PDFs side by side',
    icon: GitCompare,
    category: 'compare',
    categoryColor: 'bg-indigo-500',
    acceptedFiles: '.pdf',
    route: '/compare-pdf'
  },
  // Image Tools
  {
    id: 'compress-image',
    name: 'Compress Image',
    description: 'Reduce image file size',
    icon: Gauge,
    category: 'image',
    categoryColor: 'bg-teal-500',
    acceptedFiles: '.jpg,.jpeg,.png,.webp',
    route: '/compress-image'
  },
  {
    id: 'resize-image',
    name: 'Resize Image',
    description: 'Change image dimensions',
    icon: Maximize2,
    category: 'image',
    categoryColor: 'bg-teal-500',
    acceptedFiles: '.jpg,.jpeg,.png,.webp',
    route: '/resize-image'
  },
  {
    id: 'jpg-to-png',
    name: 'JPG to PNG',
    description: 'Convert JPG images to PNG format',
    icon: RefreshCw,
    category: 'image',
    categoryColor: 'bg-teal-500',
    acceptedFiles: '.jpg,.jpeg',
    route: '/jpg-to-png'
  },
  {
    id: 'png-to-jpg',
    name: 'PNG to JPG',
    description: 'Convert PNG images to JPG format',
    icon: RefreshCw,
    category: 'image',
    categoryColor: 'bg-teal-500',
    acceptedFiles: '.png',
    route: '/png-to-jpg'
  },
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(tool => tool.category === categoryId);
}

export function getToolById(id: string): Tool | undefined {
  return tools.find(tool => tool.id === id);
}
