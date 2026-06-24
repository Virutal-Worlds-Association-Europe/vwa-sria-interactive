import React, {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';
import AnalyticsConsent from '@site/src/components/AnalyticsConsent';
import {trackAnalyticsPageView} from '@site/src/utils/analyticsConsent';

interface RootProps {
  children: React.ReactNode;
}

function AnalyticsRouteTracker(): null {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      trackAnalyticsPageView(
        `${location.pathname}${location.search}${location.hash}`,
      );
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash, location.pathname, location.search]);

  return null;
}

export default function Root({children}: RootProps): React.ReactElement {
  return (
    <>
      <AnalyticsRouteTracker />
      {children}
      <AnalyticsConsent />
    </>
  );
}
