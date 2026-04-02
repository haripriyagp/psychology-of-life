export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold text-amber-400">The Golden Archive</h1>
      <p className="mt-4 text-xl italic text-gray-400">
        "The unexamined life is not worth living." — Socrates
      </p>
      <div className="mt-8 p-4 border border-amber-400/20 rounded-lg">
        <p>System Status: Online. Ready for psychological archiving.</p>
      </div>
    </div>
  );
}