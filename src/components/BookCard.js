'use client';

import { useState } from 'react';

export default function BookCard({ book }) {
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!book) return null;

  const isbn = book.isbn ? (Array.isArray(book.isbn) ? book.isbn[0] : book.isbn) : null;

  const openLibraryCover = isbn
    ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
    : null;

  const fallbackCover = `https://via.placeholder.com/200x280?text=${encodeURIComponent(book.title.substring(0, 20))}`;

  const coverUrl = imgError || !openLibraryCover ? fallbackCover : openLibraryCover;

  const authorName = book.author_name
    ? book.author_name.join(" ")
    : (book.author || "Penulis tidak diketahui");

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col h-full hover:shadow-lg transition-all">
      {/* Container Gambar Cover */}
      <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img 
          src={coverUrl}
          alt={book.title}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      </div>

      {/* Info Buku */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-blue-800 line-clamp-2 leading-tight mb-1">
          {book.title}
        </h2>
        <p className="text-sm text-gray-500 italic mb-4">{authorName}</p>
      </div>

      {/* Tombol Interaktif */}
      <button 
        onClick={() => setIsBorrowed(!isBorrowed)}
        className={`w-full py-3 rounded-lg font-bold text-sm transition-colors ${
          isBorrowed ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        } text-white`}
      >
        {isBorrowed ? "Kembalikan Buku" : "Pinjam Sekarang"}
      </button>
    </div>
  );
}