"use client";   // error boundary harus client component

export default function Error({ error, reset }) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-red-600 text-xl">Terjadi kesalahan:{error.message}</h2>
      <button
        onClick={reset}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Coba lagi
      </button>
    </div>
  );
}