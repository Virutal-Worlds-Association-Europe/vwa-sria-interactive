import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

/**
 * A floating action button (FAB) that appears in the bottom-right corner
 * of doc pages. Clicking it smooth-scrolls to the #feedback anchor
 * where the FeedbackForm is rendered.
 */
export default function FeedbackFab(): React.ReactElement {
  const [visible, setVisible] = useState(true);
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide FAB when user is near the feedback form (within 400px of bottom)
      const feedbackEl = document.getElementById('feedback');
      if (feedbackEl) {
        const rect = feedbackEl.getBoundingClientRect();
        setNearBottom(rect.top < window.innerHeight + 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const feedbackEl = document.getElementById('feedback');
    if (feedbackEl) {
      feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      className={`${styles.fab} ${nearBottom ? styles.fabHidden : ''}`}
      onClick={handleClick}
      title="Provide Feedback"
      aria-label="Scroll to feedback form"
      type="button"
    >
      <i className="fa-solid fa-comments" />
      <span className={styles.fabLabel}>Provide Feedback</span>
    </button>
  );
}