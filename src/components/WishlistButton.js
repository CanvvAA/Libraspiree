'use client'

import { useState, useEffect } from 'react'

export default function WishlistButton({ book }) {
  const [isInWishlist, setIsInWishlist] = useState(false)

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    setIsInWishlist(wishlist.some(b => b.id === book.id))
  }, [book.id])

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    
    if (isInWishlist) {
      const newWishlist = wishlist.filter(b => b.id !== book.id)
      localStorage.setItem('wishlist', JSON.stringify(newWishlist))
      setIsInWishlist(false)
      alert(`"${book.title}" dihapus dari wishlist`)
    } else {
      wishlist.push(book)
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      setIsInWishlist(true)
      alert(`"${book.title}" ditambahkan ke wishlist! ❤️`)
    }
  }

  return (
    <button
      onClick={toggleWishlist}
      style={{
        background: isInWishlist ? '#ef4444' : '#f3f4f6',
        color: isInWishlist ? 'white' : '#374151',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        marginTop: '12px',
        width: '100%'
      }}
    >
      {isInWishlist ? '❤️ Di Wishlist' : '🤍 Tambah ke Wishlist'}
    </button>
  )
}