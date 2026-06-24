import React, {useEffect, useState} from 'react';
import {
  ANALYTICS_CONSENT_CHANGE_EVENT,
  ANALYTICS_SETTINGS_OPEN_EVENT,
  type AnalyticsConsentChoice,
  getAnalyticsConsent,
  getCurrentPagePath,
  PRIVACY_POLICY_URL,
  setAnalyticsConsent,
  trackAnalyticsPageView,
} from '@site/src/utils/analyticsConsent';
import styles from './styles.module.css';

export default function AnalyticsConsent(): React.ReactElement | null {
  const [mounted, setMounted] = useState(false);
  const [choice, setChoice] = useState<AnalyticsConsentChoice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const initialChoice = getAnalyticsConsent();
    setChoice(initialChoice);
    setOpen(initialChoice === null);
    setMounted(true);
  }, []);

  useEffect(() => {
    const openSettings = () => {
      setChoice(getAnalyticsConsent());
      setOpen(true);
    };

    const handleConsentChange = (event: Event) => {
      const consentEvent = event as CustomEvent<{
        choice: AnalyticsConsentChoice;
      }>;
      setChoice(consentEvent.detail.choice);
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest('[data-analytics-consent-open]')
      ) {
        event.preventDefault();
        openSettings();
      }
    };

    window.addEventListener(ANALYTICS_SETTINGS_OPEN_EVENT, openSettings);
    window.addEventListener(
      ANALYTICS_CONSENT_CHANGE_EVENT,
      handleConsentChange,
    );
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener(ANALYTICS_SETTINGS_OPEN_EVENT, openSettings);
      window.removeEventListener(
        ANALYTICS_CONSENT_CHANGE_EVENT,
        handleConsentChange,
      );
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  if (!mounted || !open) {
    return null;
  }

  const handleAccept = () => {
    setAnalyticsConsent('accepted');
    setChoice('accepted');
    setOpen(false);
    window.setTimeout(() => trackAnalyticsPageView(getCurrentPagePath()), 0);
  };

  const handleDecline = () => {
    setAnalyticsConsent('declined');
    setChoice('declined');
    setOpen(false);
  };

  const statusText =
    choice === 'accepted'
      ? 'Current choice: analytics accepted.'
      : choice === 'declined'
        ? 'Current choice: analytics declined.'
        : null;

  return (
    <section
      className={styles.banner}
      aria-label="Analytics cookie consent"
      role="dialog">
      <div className={styles.copy}>
        <h2 className={styles.title}>Analytics privacy</h2>
        <p>
          We use Google Analytics 4 to understand aggregate site usage. Analytics
          only loads if you accept, and you can change this choice later.
        </p>
        {statusText && <p className={styles.status}>{statusText}</p>}
        <a
          className={styles.privacyLink}
          href={PRIVACY_POLICY_URL}
          rel="noopener noreferrer"
          target="_blank">
          Privacy Policy
        </a>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.button}
          type="button"
          onClick={handleDecline}>
          Decline
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={handleAccept}>
          Accept analytics
        </button>
      </div>
    </section>
  );
}
