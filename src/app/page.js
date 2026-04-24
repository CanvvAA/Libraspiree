import BookCard from "@/components/BookCard";
import WishlistButton from "@/components/WishlistButton";
import RatingStars from "@/components/RatingStars";
import Recommendations from "@/components/Recommendations";

export default function HomePage() {
  const books = [
    { id: 1, title: "Laskar Pelangi", author: "Andrea Hirata", isbn: "9793062797" },
    { id: 2, title: "Bumi", author: "Tere Liye", isbn: "9786020305622" },
    { id: 3, title: "Filosofi Teras", author: "Henry Manampiring", isbn: "9786024125189" },
    { id: 4, title: "Atomic Habits", author: "James Clear", isbn: "9780735211292" },
    { id: 5, title: "The Subtle Art", author: "Mark Manson", isbn: "9780062457714" }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center py-10 text-blue-900">LibreAspire</h1>

      <div className="book-grid">
        {books.map((b, i) => (
          <div key={b.id} className="book-card-item">
            <BookCard book={b} />
            <WishlistButton book={b} />
            <RatingStars bookId={b.id} />
          </div>
        ))}
      </div>

      <Recommendations />
    </main>
  );
}