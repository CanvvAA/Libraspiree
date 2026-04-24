'use client';

import { useState, useEffect } from 'react';
import BookCard from './BookCard';

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);

  const allBooks = [
    { id: 1, title: "Laskar Pelangi", author: "Andrea Hirata", isbn: "9793062797", category: "Novel" },
    { id: 2, title: "Bumi", author: "Tere Liye", isbn: "9786020305622", category: "Novel" },
    { id: 3, title: "Filosofi Teras", author: "Henry Manampiring", isbn: "9786024125189", category: "Self-Help" },
    { id: 4, title: "Atomic Habits", author: "James Clear", isbn: "9780735211292", category: "Self-Help" },
    { id: 5, title: "The Subtle Art", author: "Mark Manson", isbn: "9780062457714", category: "Self-Help" }
  ];

  useEffect(() => {
    const ratings = JSON.parse(localStorage.getItem('bookRatings') || '{}');
    const booksWithRatings = allBooks.map(book => ({
      ...book,
      rating: ratings[book.id] || 0
    }));
    const topRated = [...booksWithRatings].sort((a, b) => b.rating - a.rating).slice(0, 3);
    setRecommendations(topRated.filter(b => b.rating > 0));
  }, []);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <section style={{ marginTop: '50px', padding: '20px' }}>
      <h2 className="text-2xl font-bold text-center mb-6">📚 Rekomendasi untukmu</h2>
      <div className="book-grid">
        {recommendations.map((book, i) => (
          <BookCard key={i} book={book} />
        ))}
      </div>
    </section>
  );
}