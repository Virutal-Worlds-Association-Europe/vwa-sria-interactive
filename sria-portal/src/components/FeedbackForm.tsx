import React, { useEffect, useState, useRef } from 'react';
import styles from './FeedbackForm.module.css';

interface FeedbackFormProps {
  section?: string;
  sectionTitle?: string;
}

export default function FeedbackForm({
  section = 'general',
  sectionTitle = 'General Feedback'
}: FeedbackFormProps): React.ReactElement {
  const [pageUrl, setPageUrl] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Get current page URL on client side
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    // Load Tally embed script
    if (typeof window !== 'undefined' && !scriptLoadedRef.current) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => {
        scriptLoadedRef.current = true;
        // Trigger Tally to load embeds
        if ((window as any).Tally) {
          (window as any).Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);

      return () => {
        // Cleanup
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  // Build Tally URL with hidden field parameters
  const buildTallyUrl = () => {
    const baseUrl = 'https://tally.so/embed/dW0REd';
    const params = new URLSearchParams({
      alignLeft: '1',
      hideTitle: '1',
      transparentBackground: '1',
      dynamicHeight: '1',
    });

    // Add hidden fields
    if (section) params.append('section', section);
    if (sectionTitle) params.append('sectionTitle', sectionTitle);
    if (pageUrl) params.append('pageUrl', pageUrl);

    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div id="feedback" className={styles.feedbackContainer}>
      <h2>Provide Feedback</h2>
      <p>
        Share your thoughts on <strong>{sectionTitle}</strong>. Your feedback helps shape
        Europe's Virtual Worlds research priorities.
      </p>
      <iframe
        ref={iframeRef}
        data-tally-src={buildTallyUrl()}
        loading="lazy"
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Feedback Form"
        className={styles.tallyFrame}
      ></iframe>
    </div>
  );
}
