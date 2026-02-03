export default function ProgressBar({ currentIndex, total }) {
  const percent = (currentIndex / total) * 100;
  return (
    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden fixed top-0 left-0 z-50">
      <div
        className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
