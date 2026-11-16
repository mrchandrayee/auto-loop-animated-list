# Auto Loop Animated List

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/auto-loop-animated-list/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A standalone recreation of the supplied 15.8-second screen recording.

## What the recording shows

- Heading: **Auto Loop Animated List**
- A blue/teal gradient presentation area
- A translucent, rounded glass-style list window
- Five emoji-labelled feature rows:
  - 🔥 Dashboard UI
  - 🎨 Animation Effects
  - ⚡ Fast Interaction
  - 💎 Premium Design
  - 🚀 Smooth UX
- Rows move upward continuously and repeat in a seamless loop
- Hover styling enlarges/highlights a row; hovering the list pauses the loop
- The recording includes an editor and the caption `Comment "List" for code`

## Implementation

The source recording shows fragments of CSS in an on-screen editor, not a complete readable copy of all original files. This project recreates the visible design and behavior. The continuous loop uses a duplicated list and a CSS keyframe animation:

```css
@keyframes auto-scroll {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-50% - 6px)); }
}
```

The duplicated group makes the end of the animation line up with its beginning. The code is independently implemented and is not claimed to be the exact original source.

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.

No dependencies, package installation, or build tools are needed.

## Files

- `index.html` — page structure and repeated list items
- `style.css` — gradient stage, glass card, row styling and infinite animation
- `script.js` — keyboard pause/resume interaction
- `README.md` — notes and run instructions

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
