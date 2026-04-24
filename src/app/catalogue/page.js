"use client"; // Baris 1 wajib ini

import { useState, useEffect } from "react";

// Pastikan ada kata 'export default' sebelum 'function'
export default function CataloguePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Ganti URL langsung saja dulu untuk memastikan ini jalan
        const response = await fetch(`https://openlibrary.org/search.json?q=harry+potter&limit=10`);
        const data = await response.json();
        setBooks(data.docs);
        setLoading(false);
      } catch (err) {
        console.error("Gagal ambil data", err);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p className="p-10">Sabar ya, lagi ambil buku...</p>;

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-5">Katalog Buku Harry Potter</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index} className="mb-2 border-b pb-2">
            {book.title} - <span className="text-gray-500">{book.author_name?.[0]}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}