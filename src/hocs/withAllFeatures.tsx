import React from "react";
import withTranslation from "./withTranslation";
import withAnalytics, { AnalyticsProps } from "./withAnalytics";
import withAria from "./withAria";

const withAllFeatures = <P extends object>(
  Component: React.ComponentType<P & AnalyticsProps>,
  componentType: string
) => {
  const WithAnalytics = withAnalytics(Component);
  const WithTranslation = withTranslation(WithAnalytics);
  const WithAria = withAria(WithTranslation);

  return (props: P) => {
    return <WithAria {...props} />;
  };
};

export default withAllFeatures;
