// File: app/page.js
import Link from 'next/link';
import { getAllSurahs } from '@/lib/data'; // Import directly from your new library

export const dynamic = 'force-dynamic';

export default async function Home() {
  const surahs = await getAllSurahs(); // Call the function directly

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-green-800 mb-8">The Holy Quran</h1>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {surahs.map((surah) => (
          <Link href={`/surah/${surah.id}`} key={surah.id}> 
            <div className="bg-white p-4 h-full rounded-lg shadow-md hover:shadow-xl hover:bg-green-50 transition-all cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-800">{surah.id}. {surah.name_english}</p>
                  <p className="text-sm text-gray-500">{surah.revelation_type} - {surah.total_ayahs} Ayahs</p>
                </div>
                <p className="text-2xl font-bold text-green-600 font-amiri">{surah.name_arabic}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}