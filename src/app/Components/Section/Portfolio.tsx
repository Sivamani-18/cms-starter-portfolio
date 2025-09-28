import React, { useMemo, useState, useCallback } from 'react';
import { Modal, Carousel } from 'antd';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '@/types/types';

interface PortfolioProps {
  projects: Project[];
  initialVisibleCount?: number; // default 6
  descriptionMaxChars?: number; // default 140
}

type ViewProject = Project & { _imgUrl?: string };

export const Portfolio: React.FC<PortfolioProps> = ({
  projects,
  initialVisibleCount = 6,
  descriptionMaxChars = 140,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ViewProject | null>(null);

  const filtered = useMemo(
    () => (projects ?? []).filter((p) => p?.showProject),
    [projects]
  );

  const visibleProjects = useMemo(
    () => (expanded ? filtered : filtered.slice(0, initialVisibleCount)),
    [filtered, expanded, initialVisibleCount]
  );

  const totalShowable = filtered.length;

  const imgUrlOf = useCallback((p: Project): string | undefined => {
    const u = Array.isArray(p.image) ? p.image[0]?.url : p.image?.url;
    return u || undefined;
  }, []);

  const openModal = useCallback((p: Project) => {
    setActive({ ...p, _imgUrl: imgUrlOf(p) });
    setOpen(true);
  }, [imgUrlOf]);

  const closeModal = useCallback(() => {
    setOpen(false);
    setActive(null);
  }, []);

  const truncate = (txt?: string, max = 140) => {
    if (!txt) return '';
    if (txt.length <= max) return txt;
    return txt.slice(0, max - 1).trimEnd() + '…';
  };

  return (
    <section id="portfolio" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base lg:text-lg">
            A showcase of my recent work in frontend development, UI design, and technical innovation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects.map((project, index) => {
            const imgUrl = imgUrlOf(project);
            const hasLink = !!project?.slug;
            const key = `${project.name}-${index}`;
            const tags = Array.isArray(project.tags) ? project.tags : [];
            const visibleTags = tags.slice(0, 5);
            const extraCount = Math.max(0, tags.length - 5);

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

                  {!!project.description && (
                    <p className="text-white/70 mb-6 leading-relaxed text-sm lg:text-base">
                      {truncate(project.description, descriptionMaxChars)}
                    </p>
                  )}

                  {!!tags.length && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {visibleTags.map((tag, techIndex) => (
                        <span
                          key={`${key}-tag-${techIndex}`}
                          className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs lg:text-sm border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {extraCount > 0 && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal(project);
                          }}
                          className="px-3 py-1 bg-white/10 text-white/90 hover:text-white rounded-full text-xs lg:text-sm border border-white/20 hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                          aria-label={`Show ${extraCount} more tags for ${project.name}`}
                          title="Show all tags"
                        >
                          +{extraCount} more
                        </button>
                      )}
                    </div>
                  )}

                  {/* Keep a secondary CTA inside the card for mouse users */}
                  {hasLink ? (
                    <a
                      href={project.slug!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-white font-medium transition-colors text-sm lg:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                      aria-label={`Open ${project.name} in a new tab`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project <ExternalLink className="ml-2" size={16} aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex items-center text-white/50 cursor-not-allowed font-medium text-sm lg:text-base"
                      title="No link available"
                      aria-disabled="true"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project <ExternalLink className="ml-2" size={16} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </>
            );

            // Entire card opens modal (keyboard + mouse)
            return (
              <button
                key={key}
                type="button"
                onClick={() => openModal(project)}
                className="group text-left bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label={`Open details for ${project.name}`}
              >
                {CardInner}
              </button>
            );
          })}
        </div>

        {/* Show more / less */}
        {totalShowable > initialVisibleCount && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="px-5 py-2 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 bg-white/5 hover:bg-white/10 transition-colors text-sm lg:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={expanded}
              aria-controls="portfolio"
            >
              {expanded ? 'Show less' : `Show more (${totalShowable - initialVisibleCount})`}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onCancel={closeModal}
        footer={null}
        centered
        width={880}
        rootClassName="custom-modal"
        destroyOnClose
        title={
          <span className="text-base lg:text-lg font-semibold">
            {active?.name || "Project"}
          </span>
        }
      >
        {active && (
          <div className="space-y-6">
            {Array.isArray(active.image) && active.image.length > 1 ? (
              <Carousel
                arrows
                prevArrow={<ArrowLeft className="text-white w-4 h-4" />}
                nextArrow={<ArrowRight className="text-white w-6 h-6" />}
                dots={{ className: "custom-dots" }}
                className="rounded-xl overflow-hidden"
              >
                {active.image.map((img, i) => (
                  <div key={i} className="w-full h-64">
                    <img
                      src={img.url}
                      alt={`${active.name}-img-${i}`}
                      className="w-full h-64 object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Carousel>
            ) : Array.isArray(active.image) && active.image.length === 1 ? (
              <div className="w-full h-64">
                <img
                  src={active._imgUrl}
                  alt={active.name ?? "Project image"}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            ) : (
              <div className="w-full h-64 bg-white/10 flex items-center justify-center rounded-xl">
                <span className="text-white/60 text-sm">No image</span>
              </div>
            )}

            {active.description && (
              <p className="text-white/80 leading-relaxed">{active.description}</p>
            )}

            {!!active.tags?.length && (
              <div>
                <h4 className="text-white font-semibold mb-2">Tech & Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag, i) => (
                    <span
                      key={`modal-tag-${i}`}
                      className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-xs lg:text-sm border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              {active.slug ? (
                <a
                  href={active.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Open Project <ExternalLink className="ml-2" size={16} />
                </a>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-white/10 text-white/60 cursor-not-allowed"
                  aria-disabled="true"
                >
                  Open Project <ExternalLink className="ml-2" size={16} />
                </button>
              )}

              <button
                type="button"
                onClick={closeModal}
                className="inline-flex items-center px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 text-white/90 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
