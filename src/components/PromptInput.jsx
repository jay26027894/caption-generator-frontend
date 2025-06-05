import { FaEdit } from 'react-icons/fa';

export default function PromptInput({ prompt, setPrompt }) {
  return (
    <div className="w-full animate-fadeInUp">
      <label
        htmlFor="prompt-input"
        className="block text-gray-200 text-sm font-medium mb-2"
      >
        <div className="inline-flex items-center space-x-2">
          <FaEdit className="text-white/80" />
          <span>Enter Your Prompt</span>
        </div>
      </label>
      <textarea
        id="prompt-input"
        rows={4}
        maxLength={300}
        placeholder="What vibe do you want? (e.g. funny, dramatic, motivational…)"
        className="w-full resize-none rounded-xl bg-white/90 placeholder-gray-500 text-gray-800 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300 focus:bg-white transition"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex justify-between mt-1 text-xs text-gray-300">
        <span>{prompt.length}/300</span>
        {prompt.length > 250 && (
          <span className="text-red-500 font-medium">Nearly there…</span>
        )}
      </div>
    </div>
  );
}
