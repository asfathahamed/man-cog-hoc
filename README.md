# React Component Enhancements with ARIA, Analytics, and Translation

This project demonstrates how to create reusable React components with **ARIA tags**, **Analytics tracking**, and **Translation capabilities** using **Higher-Order Components (HOCs)**. Each feature is loosely coupled and highly configurable, allowing you to easily extend or modify the functionality as needed.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Features](#features)
  - [ARIA Tag Support](#aria-tag-support)
  - [Analytics Tracking](#analytics-tracking)
  - [Translation Support](#translation-support)
- [Usage](#usage)
- [How to Extend](#how-to-extend)

## Project Structure

The code is organized as follows:

src/<br/>
├── hocs/<br/>
├── utils/<br/>
├── components/<br/>
└── App.tsx

## Installation

To run this project, ensure you have **Node.js** and **npm** installed. Then follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/your-repo-url
cd your-repo-directory
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run dev
```

This will start the Vite development server and you can open the app in your browser at `http://localhost:3000`.

## Features

### ARIA Tag Support

Each component is wrapped with an HOC that provides both common ARIA tags and component-specific ARIA tags, like `aria-expanded` for dropdowns or `aria-pressed` for buttons.

You can pass ARIA attributes as props to any component wrapped with the ARIA HOC.

### Analytics Tracking

The **withAnalytics** HOC injects a `trackEvent` function to log or send analytics events (e.g., button clicks). Replace the mock function with real analytics services like Google Analytics, Mixpanel, etc.

### Translation Support

The **withTranslation** HOC provides a `t` function for translating text based on a key. In this project, a mock translation function is provided, but you can integrate it with any library like `react-i18next`.

## Usage

Here’s an example of using the combined HOC with all features:

```tsx
import React from "react";
import withAllFeatures from "./hocs/withAllFeatures";
import Button from "./components/Button";

// Wrap Button with ARIA, Analytics, and Translation support
const ButtonWithAllFeatures = withAllFeatures(Button, "button");

const App = () => (
  <div>
    <ButtonWithAllFeatures aria={{ "aria-pressed": true }}>
      Click Me
    </ButtonWithAllFeatures>
  </div>
);

export default App;
```

### How it Works:

- **ARIA Tags**: Pass ARIA props like `<ButtonWithAllFeatures aria={{ 'aria-pressed': true }}>`.
- **Analytics**: The `trackEvent` function is available to track user events.
- **Translation**: The `t` function is injected for key-based translation.

## How to Extend

### Adding New Components

To add a new component with these functionalities:

1. Create your new component (e.g., `Dropdown.tsx`).
2. Wrap it using `withAllFeatures`:

```tsx
import Dropdown from "./components/Dropdown";
const DropdownWithAllFeatures = withAllFeatures(Dropdown, "dropdown");
```

### Extending ARIA Tags

To add new ARIA tag logic, modify the **`generateAriaTags`** function in `ariaHelpers.ts`:

```typescript
export const generateAriaTags = (
  componentType: string,
  additionalAria = {}
) => {
  switch (componentType) {
    case "dropdown":
      // Add new ARIA tags here
      break;
    case "input":
      // Add ARIA logic for new component types
      break;
    default:
      break;
  }
};
```

### Adding More Features

Create a new HOC for any additional feature and combine it in **`withAllFeatures.tsx`**:

```typescript
const withNewFeature = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    // Add new feature logic here
    return <Component {...props} />;
  };
};

const withAllFeatures = <P extends object>(
  Component: React.ComponentType<P>,
  componentType: string
) => {
  const WithAnalytics = withAnalytics(Component);
  const WithTranslation = withTranslation(WithAnalytics);
  const WithAria = withAria(WithTranslation, componentType);
  return withNewFeature(WithAria);
};
```

## Conclusion

This project provides a modular way to enhance React components with ARIA tags, Analytics, and Translation support. It is designed to be extendable for additional functionalities.
