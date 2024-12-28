import React from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';
import './i18n/config';

function App() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      <header className="fixed w-full bg-opacity-90 backdrop-blur-sm bg-background border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t('artist.name')}</h1>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={t('theme.toggle')}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('menu.toggle')}
            >
              <Menu size={24} />
            </button>
            
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-card mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-muted">
          <p>© {new Date().getFullYear()} {t('artist.name')}. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;