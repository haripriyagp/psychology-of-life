import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-black/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Product Name */}
        <div className="flex flex-shrink-0 items-center">
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tight text-gray-900 transition-colors hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400"
          >
            Psychology of Life
          </Link>
        </div>

        {/* Right Side: Navigation */}
        <nav className="flex items-center gap-8">
          <Link 
            href="/" 
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </Link>
          {/* You can easily add more <a> or <Link> tags here later */}
        </nav>

      </div>
    </header>
  );
}