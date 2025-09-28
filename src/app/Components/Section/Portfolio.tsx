import React, { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types/types';

interface PortfolioProps {
  projects: Project[];
  initialVisibleCount?: number; // default 6
}

export const Portfolio: React.FC<PortfolioProps> = ({ projects, initialVisibleCount = 6 }) => {
  const [expanded, setExpanded] = useState(false);

  // Filter once, memoized
  const visibleProjects = useMemo(() => {
    const filtered = (projects ?? []).filter(p => p?.showProject);
    return expanded ? filtered : filtered.slice(0, initialVisibleCount);
  }, [projects, expanded, initialVisibleCount]);

  const totalShowable = useMemo(() => (projects ?? []).filter(p => p?.showProject).length, [projects]);

  return (
    <section id="portfolio" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base lg:text-lg">
            A showcase of my recent work in frontend development, UI design, and technical innovation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects.map((project, index) => {
            const imgUrl = Array.isArray(project.image) ? project.image[0]?.url : project.image?.url;
            const hasLink = !!project?.slug;

            // Prefer a stable key if you have id/slug
            const key = `${project.name}-${index}`;

            const CardInner = (
              <>
                <div className="relative overflow-hidden">
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={project.name ?? 'Project cover'}
                      loading="lazy"
                      className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-48 lg:h-56 bg-white/10 flex items-center justify-center">
                      <span className="text-white/60 text-sm">No image</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <ExternalLink className="text-white" size={16} aria-hidden="true" />
                    </div>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>

                  {project.description && (
                    <p className="text-white/70 mb-6 leading-relaxed text-sm lg:text-base">
                      {project.description}
                    </p>
                  )}

                  {!!project.tags?.length && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag: string, techIndex: number) => (
                        <span
                          key={`${key}-tag-${techIndex}`}
                          className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs lg:text-sm border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {hasLink ? (
                    <a
                      href={project.slug!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-white font-medium transition-colors text-sm lg:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                      aria-label={`Open ${project.name} in a new tab`}
                    >
                      View Project <ExternalLink className="ml-2" size={16} aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex items-center text-white/50 cursor-not-allowed font-medium text-sm lg:text-base"
                      title="No link available"
                      aria-disabled="true"
                    >
                      View Project <ExternalLink className="ml-2" size={16} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </>
            );

            return hasLink ? (
              <a
                key={key}
                href={project.slug!}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label={`Open ${project.name} in a new tab`}
              >
                {CardInner}
              </a>
            ) : (
              <div
                key={key}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
              >
                {CardInner}
              </div>
            );
          })}
        </div>

        {/* Show more / less */}
        {totalShowable > initialVisibleCount && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(v => !v)}
              className="px-5 py-2 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 bg-white/5 hover:bg-white/10 transition-colors text-sm lg:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={expanded}
              aria-controls="portfolio"
            >
              {expanded ? 'Show less' : `Show more (${totalShowable - initialVisibleCount})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
