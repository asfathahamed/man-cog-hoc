import React from "react";

interface TranslationProps {
  t: (key: string) => string; // Translation function
}

const withTranslation = <P extends object>(
  Component: React.ComponentType<P>
) => {
  type PropsWithoutTranslation = Omit<P, keyof TranslationProps>;

  const WithTranslationComponent: React.FC<
    PropsWithoutTranslation & TranslationProps
  > = (props) => {
    const { ...restProps } = props;

    const translate = (key: string): string => {
      const translations: Record<string, string> = {
        hello: "Hello",
        goodbye: "Goodbye",
      };
      return translations[key] || key;
    };

    return <Component {...(restProps as P)} t={translate} />;
  };

  return WithTranslationComponent;
};

export default withTranslation;
