import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-700">
          Islam 360
        </Link>
        <div>
          <Link href="/" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded">
            Quran
          </Link>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-gray-400 cursor-not-allowed px-3 py-2 rounded">
            Hadith (soon)
          </a>
        </div>
      </nav>
    </header>
  );
}