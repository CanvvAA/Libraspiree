'use client';

import { useState, useEffect } from 'react';

export default function RatingStars({ bookId }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const ratings = JSON.parse(localStorage.getItem('bookRatings') || '{}');
    setRating(ratings[bookId] || 0);
  }, [bookId]);

  const setRatingValue = (value) => {
    setRating(value);
    const ratings = JSON.parse(localStorage.getItem('bookRatings') || '{}');
    ratings[bookId] = value;
    localStorage.setItem('bookRatings', JSON.stringify(ratings));
  };

  return (
    <div style={{ margin: '12px 0', textAlign: 'center' }}>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRatingValue(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: (hover || rating) >= star ? '#fbbf24' : '#d1d5db'
            }}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}