import BookCard from "@/components/BookCard";

export default function HomePage() {
  const books = [
    { title: "Laskar Pelangi", author: "Andrea Hirata", isbn: "9793062797" },
    { title: "Bumi", author: "Tere Liye", isbn: "9786020305622" },
    { title: "Filosofi Teras", author: "Henry Manampiring", isbn: "9786024125189" }
  ];

  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center py-10 text-blue-900">LibreAspire</h1>
      
      {/* Pakai class book-grid yang kita buat di CSS tadi */}
      <div className="book-grid">
        {books.map((b, i) => (
          <BookCard key={i} book={b} />
        ))}
      </div>
    </main>
  );
}