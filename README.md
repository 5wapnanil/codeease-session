# 🎮 CodeEase Session - Futuristic Game Interface

A modern, futuristic game interface built with React and Vite, featuring stunning cyberpunk-inspired UI with glassmorphism effects, neon glows, and smooth animations.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![React Router](https://img.shields.io/badge/React_Router-7.10.1-CA4245?logo=react-router)

## ✨ Features

- 🎨 **Futuristic UI Design** - Cyberpunk-inspired interface with neon colors and glassmorphism effects
- 🌈 **Animated Backgrounds** - Dynamic gradient backgrounds with animated grid overlays
- ✨ **Glassmorphism Effects** - Modern frosted glass card designs with backdrop blur
- 💫 **Smooth Animations** - Fluid transitions and hover effects throughout the interface
- 🎯 **Difficulty Selection** - Easy, Medium, and Hard difficulty options with unique color coding
- 🔙 **Navigation** - Seamless routing between screens with a go-back button
- 📱 **Responsive Design** - Fully responsive layout that works on all devices
- 🌟 **Holographic Effects** - Scanline animations and holographic scan effects
- 🎭 **Neon Glow Effects** - Pulsing neon text shadows and glowing borders

## 🚀 Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.10.1** - Client-side routing
- **CSS3** - Advanced styling with animations and effects
- **Google Fonts** - Orbitron & Rajdhani fonts

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/5wapnanil/codeease-session.git
   cd codeease-session
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🎮 Usage

1. **Start Screen**
   - Select your preferred difficulty level (Easy, Medium, or Hard)
   - Each difficulty has a unique neon color theme
   - Click any difficulty button to proceed

2. **Game Screen**
   - View your selected difficulty
   - Use the "Go Back" button to return to the difficulty selection screen

## 🏗️ Project Structure

```
codeease-session/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── pages/
│   │   ├── StartScreen.jsx      # Main landing page with difficulty selection
│   │   ├── StartScreen.css      # Futuristic styling for start screen
│   │   ├── GameScreen.jsx       # Game page displaying selected difficulty
│   │   └── GameScreen.css       # Styling for game screen
│   ├── App.jsx                  # Main app component with routing
│   ├── index.css                # Global styles and animations
│   └── main.jsx                 # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### Color Palette
- **Primary Cyan**: `#00fff0` - Main accent color
- **Primary Blue**: `#007cf0` - Secondary accent
- **Purple**: `#8a2be2` - Tertiary accent
- **Background**: Dark gradients with `#0a0e27`, `#1a1f3a`

### Typography
- **Headings**: Orbitron (futuristic, tech-inspired)
- **Body Text**: Rajdhani (modern, clean)

### Animations
- Gradient shifts
- Grid overlays
- Scanline effects
- Holographic scans
- Pulsing glows
- Smooth transitions

## 🚀 Deployment

### Vercel (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy:
   - Go to [Vercel](https://vercel.com)
   - Sign up/login with GitHub
   - Import your repository
   - Deploy automatically

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy:
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/codeease-session/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Features in Detail

### Start Screen
- Animated glassmorphic card with gradient borders
- Glowing title with pulsing effects
- Three difficulty buttons with unique hover effects
- Smooth fade-in animations
- Responsive design

### Game Screen
- Displays selected difficulty with color-coded badge
- Holographic scan effects
- Rotating glow orbs
- Animated particle background
- Go back button with purple/pink theme

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Swapnanil**
- GitHub: [@5wapnanil](https://github.com/5wapnanil)
- Repository: [codeease-session](https://github.com/5wapnanil/codeease-session)

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vite.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Routing
- [Google Fonts](https://fonts.google.com/) - Typography
- Design inspiration from cyberpunk and futuristic UI trends

---

⭐ If you like this project, please give it a star on GitHub!
