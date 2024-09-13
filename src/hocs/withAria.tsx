import React from "react";

interface AriaProps {
  aria: Record<string, any>; // For ARIA attributes
}

const withAria = <P extends object>(Component: React.ComponentType<P>) => {
  type PropsWithoutAria = Omit<P, keyof AriaProps>;

  const WithAriaComponent: React.FC<PropsWithoutAria & AriaProps> = (props) => {
    const { aria, ...restProps } = props;

    return <Component {...(restProps as P)} {...aria} />;
  };

  return WithAriaComponent;
};

export default withAria;
