import React, {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';
import AnalyticsConsent from '@site/src/components/AnalyticsConsent';
import {trackSriaRouteView} from '@site/src/utils/analyticsConsent';

interface RootProps {
  children: React.ReactNode;
}

function AnalyticsRouteTracker(): null {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      trackSriaRouteView(`${location.pathname}${location.search}`);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.search]);

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
