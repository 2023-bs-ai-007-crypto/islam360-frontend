// File: app/surah/[id]/page.js
import { getSurahById } from '@/lib/data'; // Import directly from your new library

export default async function SurahPage({ params }) {
  const { surah, ayahs } = await getSurahById(params.id); // Call the function directly

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-700 text-white p-6 shadow-md text-center">
        <h1 className="text-4xl font-bold font-amiri">{surah.name_arabic}</h1>
        <p className="text-2xl font-semibold">{surah.name_english}</p>
        <p className="text-lg">{surah.revelation_type}</p>
      </header>
      <main className="p-4 md:p-8 max-w-4xl mx-auto">
        {ayahs.map((ayah) => (
          <div key={ayah.ayah_number} className="bg-white p-6 mb-4 rounded-lg shadow-sm">
            <p className="text-right text-3xl font-amiri text-gray-800 leading-relaxed mb-4">
              {ayah.text_uthmani}
            </p>
            <p className="text-gray-600">
              {ayah.ayah_number}. {ayah.translation_text}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}