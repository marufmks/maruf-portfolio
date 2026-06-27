# AGENTS.md

## Commands
- `npm run dev` - Start dev server (Vite)
- `npm run build` - Build for production
- `npm run lint` - Lint all files (ESLint flat config)
- `npm run preview` - Preview production build

## Structure
- Entry: `index.html` → `src/main.jsx` → `src/App.jsx`
- Components: `src/components/` (Hero, About, Technologies, Experience, Projects, Contact, Navbar)
- Styling: Tailwind CSS with Inter font from Google Fonts
- Data: `src/constants/index.js`

## Notes
- ESLint uses flat config (`eslint.config.js`), ignores `dist/`
- No test framework configured - add one if needed
- Uses `@vitejs/plugin-react` with Babel (not SWC)