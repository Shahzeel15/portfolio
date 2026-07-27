# Zeel Shah Portfolio

A modern, animated portfolio website built with React, TailwindCSS, and Framer Motion.

## Features

- 🎨 Modern dark theme with glass morphism effects
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🚀 Fast performance with Vite
- 🎯 Interactive sections: Hero, About, Skills, Experience, Projects, Contact
- 🔗 Social media integration

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The development server runs on `http://localhost:5173`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect it's a Vite project
5. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Add new site from Git
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click Deploy

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Customization

Edit `src/App.jsx` to personalize:
- Your name and title
- About section content
- Skills and proficiency levels
- Work experience
- Education details
- Projects
- Contact information

## Project Structure

```
portfolio/
├── src/
│   ├── App.jsx          # Main component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## License

MIT
