"use client";

import { useState } from "react";

export default function BorrowButton() {
  const [isBorrowed, setIsBorrowed] = useState(false);

  const handleClick = () => {
    setIsBorrowed(!isBorrowed);
  };

  return (
    <button
      onClick={handleClick}
      // Perhatikan spasi sebelum ${isBorrowed ...}
      className={`w-full px-4 py-2 rounded text-white transition-colors ${
        isBorrowed ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
      }`}
    >
      {isBorrowed ? "Kembalikan Buku" : "Pinjam Sekarang"}
    </button>
  );
}