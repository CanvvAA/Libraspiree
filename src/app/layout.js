// src/app/layout.js
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "LibrAspire",
  description: "Aplikasi perpustakaan digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}