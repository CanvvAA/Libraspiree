// src/app/books/[id]/loading.js
export default function Loading() {
  return (
    <div className="p-10 text-center">
      <div className="animate-pulse text-blue-600">Memuat detail buku...</div>
    </div>
  );
}