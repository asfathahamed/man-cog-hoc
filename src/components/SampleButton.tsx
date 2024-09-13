import React from "react";

interface SampleButtonProps {
  trackEvent: (eventName: string, data: object) => void;
  t: (key: string) => string; // Translation function
  aria: Record<string, any>; // For ARIA props
  children: React.ReactNode;
}

const SampleButton: React.FC<SampleButtonProps> = ({
  trackEvent,
  t,
  children,
  aria,
}) => {
  const handleClick = () => {
    trackEvent("button_click", {
      /* additional data */
    });
  };

  return (
    <button {...aria} onClick={handleClick}>
      {t("button_label")}
      {children}
    </button>
  );
};

export default SampleButton;
