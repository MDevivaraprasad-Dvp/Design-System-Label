# Badge Component

A versatile badge component for displaying status, labels, and tags throughout the interface. Part of the Design System.

## Features

- **5 Color Variants**: Neutral, Error, Warning, Success, Brand
- **3 Sizes**: Small, Medium, Large
- **Dynamic Content**: Customizable text content
- **Cross-browser Compatible**: Works seamlessly on Chrome, Firefox, and Safari
- **Accessibility**: Semantic HTML structure

## Usage

### Basic Usage

```jsx
import Badge from "./components/badge";

// Default badge
<Badge>Label</Badge>

// With custom text
<Badge variant="error" size="medium">Error Alert</Badge>
```

### Props

| Prop       | Type      | Default     | Description                                                                |
| ---------- | --------- | ----------- | -------------------------------------------------------------------------- |
| `variant`  | string    | `"neutral"` | Color variant: `"neutral"`, `"error"`, `"warning"`, `"success"`, `"brand"` |
| `size`     | string    | `"medium"`  | Badge size: `"small"`, `"medium"`, `"large"`                               |
| `children` | ReactNode | `"Label"`   | Badge text content                                                         |

## Examples

```jsx
// Neutral badge (default)
<Badge>Default</Badge>

// Error badge
<Badge variant="error" size="small">Error</Badge>

// Warning badge
<Badge variant="warning" size="large">Warning</Badge>

// Success badge
<Badge variant="success">Success</Badge>

// Brand badge
<Badge variant="brand" size="medium">Brand</Badge>
```

## Design Specifications

### Typography

- **Font**: Noto Sans, weight 400
- **Font Sizes**:
  - Small: 12px (line-height: 16px)
  - Medium: 14px (line-height: 20px)
  - Large: 14px (line-height: 20px)

### Dimensions

- **Border Radius**: 9999px (pill-shaped)
- **Padding**:
  - Small: 2px 6px
  - Medium: 2px 8px
  - Large: 4px 10px

### Color Palette

| Variant | Background | Border  | Text    |
| ------- | ---------- | ------- | ------- |
| Neutral | #f9fafb    | #e5e5e5 | #525252 |
| Error   | #fef2f2    | #fecaca | #dc2626 |
| Warning | #fffbeb    | #fde68a | #b45309 |
| Success | #f0fdf4    | #bbf7d0 | #15803d |
| Brand   | #eef2ff    | #c7d2fe | #4338ca |

## Implementation Details

### Component Structure

- Located in: `src/components/badge.jsx`
- Styles in: `src/css/badge.css`
- Uses CSS variables for flexible styling
- Flexbox layout for proper alignment

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- CSS Variables supported in all modern browsers
