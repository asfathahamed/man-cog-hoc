import React, { useState } from "react";

interface SampleDropdownProps {
  trackEvent: (eventName: string, data: object) => void;
  t: (key: string) => string; // Translation function
  aria: Record<string, any>; // For ARIA props
  options: string[]; // Dynamic data
}

const SampleDropdown: React.FC<SampleDropdownProps> = ({
  trackEvent,
  t,
  aria,
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    trackEvent("dropdown_select", { option });
  };

  return (
    <div {...aria}>
      <select
        aria-label={t("select_option")}
        value={selectedOption || ""}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="" disabled>
          {t("select_option")}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {t(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SampleDropdown;
