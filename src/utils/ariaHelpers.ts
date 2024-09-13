interface AriaTags {
  [key: string]: string | boolean | null;
}

export const generateAriaTags = (
  componentType: string,
  additionalAria: AriaTags = {}
): AriaTags => {
  const ariaTags: AriaTags = {};

  switch (componentType) {
    case "dropdown":
      ariaTags["aria-haspopup"] = "listbox";
      ariaTags["aria-expanded"] = additionalAria["aria-expanded"] || false;
      ariaTags["aria-controls"] = additionalAria["aria-controls"] || null;
      break;
    case "button":
      ariaTags["aria-pressed"] = additionalAria["aria-pressed"] || false;
      break;
    default:
      break;
  }

  return ariaTags;
};
