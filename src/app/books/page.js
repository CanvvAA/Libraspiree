// src/app/books/page.js
import Link from "next/link";

const booksDatabase = [
  { id: "1", title: "Laskar Pelangi", author: "Andrea Hirata" },
  { id: "2", title: "Bumi", author: "Tere Liye" },
  { id: "3", title: "Filosofi Teras", author: "Henry Manampiring" },
];

export default function BooksListPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Semua Buku</h1>
      <ul className="space-y-2">
        {booksDatabase.map((book) => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`} className="text-blue-600 hover:underline">
              {book.title} -{book.author}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}