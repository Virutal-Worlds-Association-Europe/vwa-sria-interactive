import React, { useEffect, useState, useRef } from 'react';
import {trackSriaFeedbackSubmit} from '@site/src/utils/analyticsConsent';
import styles from './FeedbackForm.module.css';

const TALLY_ORIGIN = 'https://tally.so';
const TALLY_FORM_ID = 'eqK0r0';

type TallyFormSubmittedMessage = {
  event: 'Tally.FormSubmitted';
  payload: {
    formId: string;
  };
};

function isTallyFormSubmittedMessage(
  value: unknown,
): value is TallyFormSubmittedMessage {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const message = value as Partial<TallyFormSubmittedMessage>;
  return (
    message.event === 'Tally.FormSubmitted' &&
    typeof message.payload === 'object' &&
    message.payload !== null &&
    message.payload.formId === TALLY_FORM_ID
  );
}

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

  useEffect(() => {
    const handleTallyMessage = (messageEvent: MessageEvent<unknown>) => {
      if (messageEvent.origin !== TALLY_ORIGIN) {
        return;
      }

      let messageData = messageEvent.data;
      if (typeof messageData === 'string') {
        try {
          messageData = JSON.parse(messageData) as unknown;
        } catch {
          return;
        }
      }

      if (isTallyFormSubmittedMessage(messageData)) {
        trackSriaFeedbackSubmit();
      }
    };

    window.addEventListener('message', handleTallyMessage);
    return () => window.removeEventListener('message', handleTallyMessage);
  }, []);

  // Build Tally URL with hidden field parameters
  const buildTallyUrl = () => {
    const baseUrl = `${TALLY_ORIGIN}/embed/${TALLY_FORM_ID}`;
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
      <div className={styles.tallyFrameShell}>
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
    </div>
  );
}
