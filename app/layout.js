import { Inter } from 'next/font/google';
import { Amiri } from 'next/font/google';
import './globals.css';
import Header from './Header'; // ⬅️ Import the Header

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const amiri = Amiri({ 
  subsets: ['arabic'], 
  weight: ['400', '700'],
  variable: '--font-amiri' 
});

export const metadata = {
  title: 'Islam 360 Clone',
  description: 'A project to read the Holy Quran',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${amiri.variable} font-sans bg-gray-50`}>
        <Header /> {/* ⬅️ Add the Header here */}
        <main>{children}</main>
      </body>
    </html>
  );
}