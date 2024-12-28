import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <nav
      className={`${
        isMenuOpen
          ? 'absolute top-full left-0 right-0 bg-background border-b border-border md:relative md:top-auto md:left-auto md:right-auto md:border-none'
          : 'hidden md:block'
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:p-0">
        <ul className="flex flex-col md:flex-row items-center gap-6">
          <li>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.projects')}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Globe size={20} />
              {t('nav.language')}
            </button>

            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="block w-full text-left px-4 py-2 hover:bg-card transition-colors"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
