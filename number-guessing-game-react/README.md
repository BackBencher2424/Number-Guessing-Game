# 🎯 Number Guessing Game - React Version

A modern, interactive number guessing game built with React. Players try to guess a random number between 1 and 100 with helpful hints and visual feedback.

## ✨ Features

### 🎮 Game Features
- **Random number generation** between 1-100
- **Smart hints** that tell you if your guess is too high or too low
- **Progressive difficulty hints** - more specific feedback after 3 attempts
- **Attempt tracking** with visual progress bar
- **Duplicate guess prevention**
- **Game history** showing your last 5 games
- **Visual feedback** with color-coded guess tags

### 🎨 UI/UX Features
- **Modern, responsive design** that works on all devices
- **Smooth animations** and transitions
- **Color-coded feedback** (blue for low, red for high, green for correct)
- **Progress bar** showing attempt progress
- **Game statistics** display
- **Keyboard support** (Enter key to submit)
- **Mobile-friendly** interface

### 🔧 Technical Features
- **Pure React** - no external UI libraries
- **Modern React Hooks** (useState, useEffect)
- **Responsive CSS** with flexbox and grid
- **CSS animations** and transitions
- **Error handling** and input validation
- **Local state management**

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download** the project files to your local machine

2. **Navigate to the project directory:**
   ```bash
   cd number-guessing-game-react
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser** and go to `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder that you can deploy to any static hosting service.

## 🎯 How to Play

1. **Start the game** - A random number between 1 and 100 is generated
2. **Enter your guess** in the input field
3. **Submit your guess** by clicking "Guess!" or pressing Enter
4. **Get feedback** - The game tells you if your guess is too high or too low
5. **Use hints** - After 3 attempts, you get more specific feedback
6. **Track progress** - Watch the progress bar and attempt counter
7. **Win or lose** - You have 10 attempts to guess the correct number
8. **Play again** - Click "Play Again" to start a new game

## 🎨 Visual Feedback System

### Guess Tags
- **🔵 Blue tags** - Your guess was too low
- **🔴 Red tags** - Your guess was too high  
- **🟢 Green tags** - Correct guess (with celebration animation)

### Message Types
- **🟡 Orange messages** - Hints and instructions
- **🟢 Green messages** - Success messages
- **🔴 Red messages** - Error messages and game over

### Progress Indicators
- **Progress bar** - Visual representation of attempts used
- **Attempt counter** - Shows current attempt and remaining attempts
- **Game history** - Tracks your recent games with timestamps

## 🏗️ Project Structure

```
number-guessing-game-react/
├── public/
│   ├── index.html          # Main HTML file
│   └── manifest.json       # PWA manifest
├── src/
│   ├── App.js             # Main React component
│   ├── App.css            # Component styles
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🔧 Customization

### Changing Game Settings
You can easily modify the game by editing the constants in `App.js`:

```javascript
const [maxAttempts] = useState(10);  // Change max attempts
const generateRandomNumber = (min = 1, max = 100) => {  // Change number range
```

### Styling
The game uses CSS custom properties and modern CSS features. You can customize:
- Colors in `App.css`
- Animations and transitions
- Layout and spacing
- Responsive breakpoints

### Adding Features
The modular structure makes it easy to add new features:
- Sound effects
- Difficulty levels
- Score tracking
- Multiplayer support
- Local storage for persistence

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React 18
- Styled with modern CSS
- Icons from emoji characters
- Inspired by classic number guessing games

## 📞 Support

If you encounter any issues or have questions:
1. Check the browser console for errors
2. Ensure all dependencies are installed
3. Try clearing your browser cache
4. Open an issue on the repository

---

**Enjoy playing! 🎮✨**
