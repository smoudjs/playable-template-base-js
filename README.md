# Base Playable Template

A starter template for creating playable ads with JavaScript. This template uses:

- [@smoud/playable-sdk](https://github.com/smoudjs/playable-sdk#readme) - SDK for creating playable ads with standardized events and methods
- [@smoud/playable-scripts](https://github.com/smoudjs/playable-scripts#readme) - Build and development tools optimized for playable ads

## Demo

Try out this template:
- [View on CodePen](https://codepen.io/peter-hutsul/pen/wBvpXBm)

## Features

- Modern JavaScript (ES6+)
- Hot module replacement during development
- Basic game structure with SDK integration
- Event handling (resize, pause, resume, volume, etc.)
- Installation button implementation
- Interaction tracking

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/index.js` - Main entry point with SDK and Game initialization
- `src/Game.js` - Game logic
- `src/index.css` - Styles for your playable
- `src/index.html` - HTML template

## Looking for More?

Check out other available templates for different frameworks and use cases:
- [playable-template-base](https://github.com/smoudjs/playable-template-base) - TypeScript version of this template
- [playable-template-pixi](https://github.com/smoudjs/playable-template-pixi) - Template with PixiJS
- [playable-template-three](https://github.com/smoudjs/playable-template-three) - Template with Three.js
- [playable-template-phaser](https://github.com/smoudjs/playable-template-phaser) - Template with Phaser
