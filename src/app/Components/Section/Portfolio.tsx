import React from 'react'
import { Menu, X, ChevronRight, Github, Linkedin, Mail, Phone, MapPin, Code, Palette, Search, Package, Globe, Wrench, Star, Quote, Calendar, User, ExternalLink, ArrowUp, Play, Sparkles } from 'lucide-react';
import { Project } from '@/types/types';


interface PortfolioProps {
  projects: Project[];
}

export const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {


  console.log("projects", projects);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project: any, index: number) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={Array.isArray(project.image) ? project.image[0]?.url : project.image?.url}
                  alt={project.name}
                  className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="text-white" size={16} />
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed text-sm lg:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs lg:text-sm border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-cyan-400 hover:text-white font-medium transition-colors text-sm lg:text-base">
                  View Project <ExternalLink className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}