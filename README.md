# MindfulEdge - Chrome Extension

A mindful productivity Chrome extension built with React, TypeScript, and Vite.

## Features

- 🎯 **New Tab Override**: Beautiful, mindful new tab page
- 🚀 **Extension Popup**: Quick access to extension features
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 📱 **Responsive**: Works on all screen sizes
- 🔧 **TypeScript**: Full type safety and better development experience

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This will start the development server for the new tab page.

### Building the Extension

```bash
npm run build:extension
```

This will:

1. Build the React app with Vite
2. Copy the manifest.json to the dist folder
3. Copy public assets to the dist folder

### Loading in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the `dist` folder from your project
5. The extension will be installed and ready to use!

## Project Structure

```
MindfulEdge/
├── manifest.json          # Chrome extension manifest
├── index.html            # New tab page
├── popup.html           # Extension popup
├── src/
│   ├── main.tsx         # New tab entry point
│   ├── popup.tsx        # Popup entry point
│   ├── App.tsx          # Main app component
│   └── component/       # React components
├── public/
│   └── icon.svg         # Extension icon
├── dist/                # Built files (after build)
└── build-extension.js   # Build script
```

## Key Files

- **manifest.json**: Chrome extension configuration
- **vite.config.ts**: Vite build configuration for multiple entry points
- **src/types/chrome.d.ts**: Chrome API type definitions
- **src/popup.tsx**: Extension popup component

## Chrome Extension APIs Used

- `chrome.tabs.create()`: Create new tabs
- `chrome.runtime.openOptionsPage()`: Open options page
- `chrome.storage.local`: Store extension data
- `chrome.runtime.sendMessage()`: Communication between components

## Customization

### Adding New Features

1. Create new components in `src/component/`
2. Add Chrome API calls using the types in `src/types/chrome.d.ts`
3. Update the manifest.json if you need new permissions

### Styling

- Main styles: `src/App.css`
- Component-specific styles: `src/component/[ComponentName]/[ComponentName].css`

## Troubleshooting

### Extension Not Loading

- Make sure you're loading the `dist` folder, not the root project folder
- Check that `manifest.json` is in the `dist` folder
- Verify all permissions in manifest.json are correct

### Build Issues

- Run `npm install` to ensure all dependencies are installed
- Check that TypeScript compilation passes: `npm run build`
- Verify Vite configuration in `vite.config.ts`

## License

MIT License - feel free to use this project as a starting point for your own Chrome extensions!
