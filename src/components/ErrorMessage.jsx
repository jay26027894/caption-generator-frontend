export default function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <div className="w-full bg-red-600/80 text-white text-sm rounded-lg px-4 py-3 mt-4 animate-fadeInUp">
      <p>{error}</p>
    </div>
  );
}
