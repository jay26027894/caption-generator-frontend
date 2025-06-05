import React, { useState } from 'react';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import GenerateButton from './components/GenerateButton';
import ErrorMessage from './components/ErrorMessage';
import CaptionDisplay from './components/CaptionDisplay';
import './App.css';
import './input.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateCaption = async () => {
    setLoading(true);
    setError('');
    setCaption('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/generate-caption`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt }),
});


      if (!response.ok) {
        let errorMessage = 'Failed to generate caption. Please try again.';
        try {
          const errorData = await response.json();
          if (errorData.error) errorMessage = errorData.error;
          else errorMessage = `Server error: ${response.status} ${response.statusText}.`;
        } catch {
          errorMessage = `Unexpected server response (Status: ${response.status}).`;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setCaption(data.caption);
    } catch (err) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 overflow-hidden">
      <div className="background-blobs">
        <div className="blob1"></div>
        <div className="blob2"></div>
      </div>
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-12 z-10">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-6 text-white">
            <h2 className="text-5xl font-extrabold drop-shadow-lg animate-fadeInUp">
              Elevate Your Social Media Game
            </h2>
            <p className="text-lg text-white/80 leading-relaxed animate-fadeInUp delay-200">
              Instantly craft captivating captions that resonate with your audience.
              Whether it’s witty, heartwarming, or motivational, CaptionCraft has you covered.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-white/90 animate-fadeInUp delay-400">
                <span className="inline-block w-2 h-2 bg-green-300 rounded-full mr-3"></span>
                Save time with AI-powered captions
              </li>
              <li className="flex items-center text-white/90 animate-fadeInUp delay-500">
                <span className="inline-block w-2 h-2 bg-green-300 rounded-full mr-3"></span>
                Customize your tone: funny, dramatic, or motivational
              </li>
              <li className="flex items-center text-white/90 animate-fadeInUp delay-600">
                <span className="inline-block w-2 h-2 bg-green-300 rounded-full mr-3"></span>
                One-click copy & share to any platform
              </li>
            </ul>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 animate-slideUp">
            <PromptInput prompt={prompt} setPrompt={setPrompt} />
            <GenerateButton
              onClick={generateCaption}
              disabled={loading || !prompt.trim()}
              loading={loading}
            />
            <ErrorMessage error={error} />
            {caption && <CaptionDisplay caption={caption} />}
          </div>
        </div>
      </main>
      <footer className="text-center text-white/70 text-sm py-4 z-10">
        &copy; {new Date().getFullYear()} CaptionCraft. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
