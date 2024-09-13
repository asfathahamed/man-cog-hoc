import React from "react";
import { trackEvent } from "../utils/analytics";

export interface AnalyticsProps {
  trackEvent: (eventName: string, data: object) => void;
}

const withAnalytics = <P extends object>(
  Component: React.ComponentType<P & AnalyticsProps>
) => {
  return (props: Omit<P, keyof AnalyticsProps>) => {
    return <Component {...(props as P)} trackEvent={trackEvent} />;
  };
};

export default withAnalytics;
