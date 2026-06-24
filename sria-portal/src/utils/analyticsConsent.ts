export const GA_MEASUREMENT_ID = 'G-1SERDQHGJD';
export const PRIVACY_POLICY_URL =
  'https://docs.google.com/document/d/e/2PACX-1vQeQq7FhZwTwIkaVib4txK0UeY7n2hO2hhKUCuknYEOZMavNY5kTvJP_opD3eKfvA/pub';
export const ANALYTICS_CONSENT_CHANGE_EVENT =
  'sria:analytics-consent-change';
export const ANALYTICS_SETTINGS_OPEN_EVENT = 'sria:analytics-settings-open';

const ANALYTICS_CONSENT_STORAGE_KEY = 'sria-analytics-consent';
const ANALYTICS_CONSENT_VERSION = 1;
const GTAG_SCRIPT_ID = 'sria-ga4-gtag-script';
const GA_DISABLE_KEY = `ga-disable-${GA_MEASUREMENT_ID}`;

export type AnalyticsConsentChoice = 'accepted' | 'declined';

type AnalyticsConsentRecord = {
  version: typeof ANALYTICS_CONSENT_VERSION;
  choice: AnalyticsConsentChoice;
  updatedAt: string;
};

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
} & Record<string, unknown>;

let gtagConfigured = false;
let inMemoryConsent: AnalyticsConsentChoice | null = null;

function canUseDOM(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function getAnalyticsWindow(): AnalyticsWindow {
  return window as unknown as AnalyticsWindow;
}

function isConsentChoice(value: unknown): value is AnalyticsConsentChoice {
  return value === 'accepted' || value === 'declined';
}

function readConsentRecord(): AnalyticsConsentRecord | null {
  if (!canUseDOM()) {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as Partial<AnalyticsConsentRecord>;
    if (
      parsed.version === ANALYTICS_CONSENT_VERSION &&
      isConsentChoice(parsed.choice)
    ) {
      return {
        version: ANALYTICS_CONSENT_VERSION,
        choice: parsed.choice,
        updatedAt: parsed.updatedAt ?? '',
      };
    }
  } catch {
    return null;
  }

  return null;
}

export function getAnalyticsConsent(): AnalyticsConsentChoice | null {
  return readConsentRecord()?.choice ?? inMemoryConsent;
}

function dispatchConsentChange(choice: AnalyticsConsentChoice): void {
  if (!canUseDOM()) {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(ANALYTICS_CONSENT_CHANGE_EVENT, {
      detail: {choice},
    }),
  );
}

function getDomainCandidates(hostname: string): string[] {
  if (
    !hostname ||
    hostname === 'localhost' ||
    /^[\d.]+$/.test(hostname)
  ) {
    return [];
  }

  const parts = hostname.split('.');
  const domains = new Set<string>();
  for (let index = 0; index <= parts.length - 2; index += 1) {
    const domain = parts.slice(index).join('.');
    domains.add(domain);
    domains.add(`.${domain}`);
  }

  return Array.from(domains);
}

function expireCookie(name: string, domain?: string): void {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  const domainPart = domain ? `; domain=${domain}` : '';
  document.cookie = `${name}=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax${domainPart}${secure}`;
}

export function clearAnalyticsCookies(): void {
  if (!canUseDOM()) {
    return;
  }

  const analyticsCookiePattern = /^_(ga|gid|gat)(_|$)/;
  const cookieNames = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter((name) => analyticsCookiePattern.test(name));

  const domains = getDomainCandidates(window.location.hostname);
  cookieNames.forEach((name) => {
    expireCookie(name);
    domains.forEach((domain) => expireCookie(name, domain));
  });
}

function defineGtag(): AnalyticsWindow {
  const analyticsWindow = getAnalyticsWindow();
  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
  analyticsWindow.gtag =
    analyticsWindow.gtag ??
    function gtag() {
      analyticsWindow.dataLayer?.push(arguments);
    };
  return analyticsWindow;
}

function configureGtag(): void {
  const analyticsWindow = defineGtag();
  analyticsWindow[GA_DISABLE_KEY] = false;

  if (gtagConfigured) {
    return;
  }

  analyticsWindow.gtag?.('js', new Date());
  analyticsWindow.gtag?.('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });
  gtagConfigured = true;
}

export function loadGoogleAnalytics(): boolean {
  if (!canUseDOM() || getAnalyticsConsent() !== 'accepted') {
    return false;
  }

  configureGtag();

  if (document.getElementById(GTAG_SCRIPT_ID)) {
    return true;
  }

  const script = document.createElement('script');
  script.id = GTAG_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  return true;
}

export function disableGoogleAnalytics(): void {
  if (!canUseDOM()) {
    return;
  }

  getAnalyticsWindow()[GA_DISABLE_KEY] = true;
  clearAnalyticsCookies();
}

export function setAnalyticsConsent(choice: AnalyticsConsentChoice): void {
  if (!canUseDOM()) {
    return;
  }

  inMemoryConsent = choice;

  const record: AnalyticsConsentRecord = {
    version: ANALYTICS_CONSENT_VERSION,
    choice,
    updatedAt: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(
      ANALYTICS_CONSENT_STORAGE_KEY,
      JSON.stringify(record),
    );
  } catch {
    // If localStorage is unavailable, still apply the choice for this page.
  }

  if (choice === 'accepted') {
    loadGoogleAnalytics();
  } else {
    disableGoogleAnalytics();
  }

  dispatchConsentChange(choice);
}

export function getCurrentPagePath(): string {
  if (!canUseDOM()) {
    return '/';
  }

  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export function trackAnalyticsPageView(pagePath = getCurrentPagePath()): void {
  if (!loadGoogleAnalytics()) {
    return;
  }

  const analyticsWindow = getAnalyticsWindow();
  analyticsWindow.gtag?.('event', 'page_view', {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}
