export const translate = (key: string): string => {
  const translations: Record<string, string> = {
    title: "This is the title",
    button_label: "Click Me",
    select_option: "Select an option",
    option1: "Option 1",
    option2: "Option 2",
    option3: "Option 3",
  };
  return translations[key] || key;
};
