// === Step 1: Create an UploadForm component ===
// src/components/UploadForm.jsx
import React, { useState } from 'react';

export default function UploadForm({ onCaptionGenerated }) {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/image-caption', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl })
      });

      const data = await response.json();
      if (data.caption) {
        onCaptionGenerated(data.caption);
      } else {
        throw new Error('No caption returned.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to generate caption from image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md w-full max-w-xl mx-auto mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="imageUrl" className="text-gray-700 font-medium">Image URL:</label>
        <input
          id="imageUrl"
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Enter an image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
          disabled={!imageUrl || loading}
        >
          {loading ? 'Generating from Image...' : 'Generate Prompt from Image'}
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    </div>
  );
}
