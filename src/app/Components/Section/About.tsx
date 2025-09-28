import React from 'react'
import { Menu, X, ChevronRight, Github, Linkedin, Mail, Phone, MapPin, Code, Palette, Search, Package, Globe, Wrench, Star, Quote, Calendar, User, ExternalLink, ArrowUp, Play, Sparkles } from 'lucide-react';

interface AboutProps {
  profile: any;
}

  const skills = [
    { name: 'React.js', icon: Code, level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI Design', icon: Palette, level: 90, color: 'from-pink-500 to-rose-500' },
    { name: 'SEO', icon: Search, level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'NPM Libraries', icon: Package, level: 85, color: 'from-purple-500 to-violet-500' },
    { name: 'WordPress', icon: Globe, level: 82, color: 'from-orange-500 to-amber-500' },
    { name: 'Tailwind CSS', icon: Wrench, level: 95, color: 'from-indigo-500 to-blue-500' }
  ];

export const About: React.FC<AboutProps> = ({profile}) => {
        return (
      <section id="about" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base lg:text-lg">
              Experienced Front End Lead with a passion for creating digital experiences that make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">My Journey</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
               {profile.bio}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-white/10">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">50+</div>
                  <div className="text-white/70 text-sm lg:text-base">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-white/10">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5+</div>
                  <div className="text-white/70 text-sm lg:text-base">Years Experience</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4`}>
                          <skill.icon className="text-white" size={20} />
                        </div>
                        <span className="font-semibold text-white text-base lg:text-lg">{skill.name}</span>
                      </div>
                      <span className="text-white/70 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
        );
}