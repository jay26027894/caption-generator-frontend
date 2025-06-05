export default function GenerateButton({ onClick, disabled, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        mt-6 w-full flex items-center justify-center px-6 py-3 rounded-2xl text-white font-semibold transition-all
        ${disabled
          ? 'bg-green-300 cursor-not-allowed opacity-60'
          : 'bg-green-500 hover:bg-green-600 active:scale-95'}
        focus:outline-none focus:ring-2 focus:ring-green-300
      `}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      ) : (
        <span className="flex items-center gap-2">
          <span className="text-xl">✍️</span> Generate
        </span>
      )}
    </button>
  );
}
