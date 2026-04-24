"use client"; // WAJIB ada di baris pertama agar tombol bisa diklik

import { useState } from "react";

export default function BookCard({ book }) {
  const [isBorrowed, setIsBorrowed] = useState(false);

  if (!book) return null;

  // Logika cover sesuai instruksi 4.3 tutorial kamu
  const isbn = book.isbn ? (Array.isArray(book.isbn) ? book.isbn[0] : book.isbn) : null;
  const coverUrl = isbn 
    ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  const authorName = book.author_name ? book.author_name.join(", ") : (book.author || "Penulis tidak diketahui");

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col h-full hover:shadow-lg transition-all">
      {/* Container Gambar Cover */}
      <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = "https://via.placeholder.com/150x220?text=Error+Load"; }}
        />
      </div>

      <div className="flex-grow">
        <h2 className="text-xl font-bold text-blue-800 line-clamp-2 h-14 leading-tight mb-1">
          {book.title}
        </h2>
        <p className="text-sm text-gray-500 italic mb-4">{authorName}</p>
      </div>

      {/* Tombol Interaktif */}
      <button
        onClick={() => setIsBorrowed(!isBorrowed)}
        className={`w-full py-3 rounded-lg font-bold text-sm transition-colors ${
          isBorrowed ? "bg-red-500 text-white" : "bg-green-500 text-white"
        }`}
      >
        {isBorrowed ? "Kembalikan Buku" : "Pinjam Sekarang"}
      </button>
    </div>
  );
}