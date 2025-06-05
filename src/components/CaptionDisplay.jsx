import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CaptionDisplay({ caption }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(caption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full mt-6 bg-white/90 rounded-xl border border-gray-200 p-6 text-gray-800 animate-fadeInUp">
      <h2 className="text-gray-900 text-lg font-semibold mb-3">Your Caption</h2>
      <div className="bg-gray-100 rounded-md p-4 min-h-[80px] overflow-auto text-gray-800 prose">
        <ReactMarkdown>{caption}</ReactMarkdown>
      </div>
      <button
        onClick={handleCopy}
        className={`
          mt-4 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition
          ${copied ? 'bg-green-500 hover:bg-green-600' : 'bg-indigo-500 hover:bg-indigo-600'}
          text-white focus:outline-none focus:ring-2 focus:ring-indigo-300
        `}
      >
        {copied ? (
          <>
            <Check size={18} /> Copied!
          </>
        ) : (
          <>
            <Copy size={18} /> Copy
          </>
        )}
      </button>
    </div>
  );
}
