// File: lib/data.js
import { Pool } from 'pg';

// This single Pool will be shared across the entire application
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export async function getAllSurahs() {
  const sqlQuery = 'SELECT id, name_english, name_arabic, revelation_type, total_ayahs FROM Surahs ORDER BY id;';
  const { rows } = await pool.query(sqlQuery);
  return rows;
}

export async function getSurahById(id) {
  const surahId = parseInt(id);

  const surahQuery = 'SELECT id, name_english, name_arabic, revelation_type FROM Surahs WHERE id = $1;';
  const surahResult = await pool.query(surahQuery, [surahId]);

  const ayahsQuery = `
    SELECT a.ayah_number, a.text_uthmani, t.translation_text
    FROM Ayahs a
    JOIN Translations t ON a.id = t.ayah_id
    WHERE a.surah_id = $1
    ORDER BY a.ayah_number;
  `;
  const ayahsResult = await pool.query(ayahsQuery, [surahId]);

  return {
    surah: surahResult.rows[0],
    ayahs: ayahsResult.rows
  };
}