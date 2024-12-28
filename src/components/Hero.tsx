import React from 'react';
import { useTranslation } from 'react-i18next';
import { Palette } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                {t('hero.cta.portfolio')}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border rounded-lg hover:bg-card transition-colors"
              >
                {t('hero.cta.contact')}
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
                alt={t('hero.image.alt')}
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-full">
                <Palette size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}