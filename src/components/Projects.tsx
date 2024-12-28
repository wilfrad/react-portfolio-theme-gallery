import React from 'react';
import { useTranslation } from 'react-i18next';
import Masonry from 'react-masonry-css';
import { projectsData } from '../data/projects';

export default function Projects() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('projects.title')}
        </h2>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['all', 'children', 'fantasy', 'character', 'integra'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-card hover:bg-opacity-80'
              }`}
            >
              {t(`projects.categories.${category}`)}
            </button>
          ))}
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="masonry-grid_item group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={t(`projects.${project.id}.title`)}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t(`projects.${project.id}.title`)}
                  </h3>
                  <p className="text-white/80">
                    {t(`projects.${project.id}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}