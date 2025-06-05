import { FaMagic } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 z-10">
      {/* Left: Brand */}
      <div className="flex items-center space-x-2 animate-fadeInUp">
        <FaMagic className="text-white text-2xl drop-shadow-lg" />
        <span className="text-2xl font-bold text-white drop-shadow-lg tracking-tight">
          CaptionCraft
        </span>
      </div>

      {/* Right: Nav links (dummy placeholders) */}
    
    </nav>
  );
}
