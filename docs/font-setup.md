# Montserrat Font Setup Documentation

## Overview
This document outlines the complete Montserrat font configuration for the Safari Culture - Wilderness Namibia platform, emphasizing thin and light font weights for a luxury tourism aesthetic.

## 🎯 Design Philosophy
- **Luxury Feel**: Thin and light font weights create an elegant, high-end appearance
- **Readability**: Optimized spacing and rendering for all device types
- **Performance**: Next.js font optimization with proper loading strategies
- **Consistency**: Unified typography system across the entire application

## 📁 Files Modified

### 1. Layout Configuration
**File**: `src/app/layout.tsx`
```typescript
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
```

### 2. Tailwind Configuration
**File**: `tailwind.config.ts`
```typescript
fontFamily: {
  sans: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
},
fontWeight: {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
},
```

### 3. Global Styles
**File**: `src/app/globals.css`
```css
body {
  font-family: var(--font-montserrat), 'Montserrat', sans-serif;
  font-weight: 300; /* Light weight as default for luxury feel */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* Luxury typography defaults */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-montserrat), 'Montserrat', sans-serif;
  font-weight: 200; /* Extra light for headings */
  letter-spacing: -0.025em; /* Tight letter spacing for modern look */
}
```

## 🎨 Typography System

### Font Weight Scale
| Weight | Class | Value | Usage |
|--------|-------|-------|-------|
| Thin | `font-thin` | 100 | Ultra luxury accents, hero text |
| Extra Light | `font-extralight` | 200 | Main headings, elegant emphasis |
| Light | `font-light` | 300 | Body text default, descriptions |
| Normal | `font-normal` | 400 | Standard text, UI elements |
| Medium | `font-medium` | 500 | Emphasis, important text |
| Semi Bold | `font-semibold` | 600 | Strong emphasis, CTAs |
| Bold | `font-bold` | 700 | Headers, important information |
| Extra Bold | `font-extrabold` | 800 | Special emphasis |
| Black | `font-black` | 900 | Maximum emphasis |

### Custom Typography Classes

#### Safari Culture Specific Classes
```css
/* Ultra thin with wide letter spacing */
.font-luxury-thin {
  font-weight: 100;
  letter-spacing: 0.05em;
}

/* Light with subtle letter spacing */
.font-luxury-light {
  font-weight: 200;
  letter-spacing: 0.025em;
}

/* Standard luxury body text */
.font-luxury-normal {
  font-weight: 300;
}

/* Safari heading style */
.safari-heading {
  font-weight: 200;
  letter-spacing: -0.025em;
  line-height: 1.2;
}

/* Safari body text style */
.safari-body {
  font-weight: 300;
  line-height: 1.6;
}

/* Safari accent text (uppercase, spaced) */
.safari-accent {
  font-weight: 100;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

## 🏕️ Usage Examples

### Hero Sections
```jsx
<h1 className="safari-heading text-6xl sm:text-8xl text-night">
  Safari Culture
</h1>
<p className="safari-accent text-lg text-cinereous">
  Wilderness Namibia
</p>
```

### Camp Descriptions
```jsx
<h3 className="font-luxury-light text-2xl text-night mb-3">
  Doro Nawas
</h3>
<p className="safari-body text-battleship">
  Desert-adapted wildlife in Damaraland's rugged beauty
</p>
```

### Luxury Emphasis
```jsx
<h2 className="font-luxury-thin text-4xl tracking-wider">
  DISCOVER WILDERNESS
</h2>
```

## 📱 Responsive Typography

### Breakpoint Considerations
- **Mobile (320px+)**: Minimum font sizes for readability
- **Tablet (640px+)**: Balanced sizing for content consumption
- **Desktop (1024px+)**: Full luxury typography scale

### Recommended Responsive Classes
```jsx
// Hero text
className="text-4xl sm:text-6xl lg:text-8xl"

// Body text
className="text-base sm:text-lg lg:text-xl"

// Accent text
className="text-sm sm:text-base lg:text-lg"
```

## ⚡ Performance Optimizations

### Font Loading Strategy
- **Display Swap**: Prevents layout shift during font loading
- **Subset Latin**: Reduces font file size for Western languages
- **Variable Loading**: CSS variables for consistent fallbacks

### Font Smoothing
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
```

## 🎯 Best Practices

### Do's ✅
- Use thin/light weights for luxury feel
- Maintain consistent letter spacing
- Apply proper line heights for readability
- Use CSS variables for maintainability
- Test on various devices and browsers

### Don'ts ❌
- Don't use heavy weights for body text
- Don't ignore mobile readability
- Don't mix multiple font families
- Don't forget proper fallbacks
- Don't sacrifice readability for aesthetics

## 🔧 Development Guidelines

### Component Implementation
```jsx
// Good: Using semantic classes
<h1 className="safari-heading">Camp Name</h1>
<p className="safari-body">Description text</p>

// Avoid: Inline font specifications
<h1 className="font-thin text-6xl tracking-tight">Camp Name</h1>
```

### CSS Custom Properties
```css
/* Available CSS variables */
--font-montserrat: 'Montserrat', sans-serif
```

## 🧪 Testing Checklist
- [ ] Font loads properly across all browsers
- [ ] Thin weights remain readable on all devices
- [ ] No layout shift during font loading
- [ ] Proper fallbacks work when font fails to load
- [ ] Text remains accessible at all sizes
- [ ] Performance impact is minimal

## 🔄 Maintenance

### Updating Font Weights
To add or modify font weights, update the Montserrat configuration in `layout.tsx`:
```typescript
weight: ["100", "200", "300", "400", "500"] // Add/remove as needed
```

### Adding New Typography Classes
Add new classes to `globals.css` following the established naming convention:
```css
.safari-new-style {
  font-weight: 200;
  letter-spacing: 0.05em;
  /* Additional properties */
}
```

## 📊 Browser Support
- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile browsers**: Full support with fallbacks

## 🎨 Color Palette Integration
The font system works seamlessly with the Safari Culture color palette:
- **Primary text**: `text-night` (#0E0D0D)
- **Secondary text**: `text-battleship` (#8C9193)
- **Accent text**: `text-cinereous` (#857366)
- **Light backgrounds**: `text-vanDyke` (#3A312B)

## 🚀 Future Enhancements
- Variable font implementation for better performance
- Additional font weights if needed
- Custom font pairing for specific use cases
- Advanced typography animations with Framer Motion

## 📞 Support
For questions about the font setup or typography system, refer to the project instructions or contact the development team.

---

*Last updated: September 24, 2025*
*Safari Culture - Wilderness Namibia Platform*