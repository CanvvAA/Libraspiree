// 1. Data harus didefinisikan dulu di paling atas
const booksDatabase = [
  { id: "1", title: "Laskar Pelangi", author: "Andrea Hirata", description: "Kisah perjuangan anak-anak Belitung..." },
  { id: "2", title: "Bumi", author: "Tere Liye", description: "Petualangan Raib, Seli, dan Ali..." },
  { id: "3", title: "Filosofi Teras", author: "Henry Manampiring", description: "Pengantar stoikisme ala Indonesia..." },
];

export default async function BookDetailPage({ params }) {
  // 2. Jangan lupa await params (untuk Next.js 15)
  const { id } = await params;

  // 3. Baru panggil booksDatabase di sini
  const book = booksDatabase.find((b) => b.id === id);

  if (!book) {
    return <main className="p-10"><h1 className="text-red-600">Buku tidak ditemukan</h1></main>;
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p>Penulis: {book.author}</p>
      <p className="mt-4">{book.description}</p>
    </main>
  );
}