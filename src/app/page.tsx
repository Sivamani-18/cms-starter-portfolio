'use client';

import { FC, useEffect, useState } from 'react';
import { Profile, Project, UsefulResource } from '../types/types';
import { Header } from './Components/Header/Header';
import { HeroCard } from './Components/Card/HeroCard';
import Loader from './Components/Loader/Loader';
import MagicMouse from 'magicmouse.ts';
import { About } from './Components/Section/About';
import { Portfolio } from './Components/Section/Portfolio';
import { Services } from './Components/Section/Services';
import { services } from './userData';
import { Blog } from './Components/Section/Blog';

const Home: FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [resources, setResources] = useState<UsefulResource | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const handleLoading = () => setLoading(false);
    window.addEventListener('load', handleLoading);
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  const handleThemeChange = (theme: string, isLoading: boolean) => {
    setLoading(isLoading);
    setCurrentTheme(theme);
    if (!isLoading) {
      // Add any additional logic needed after theme change
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/profile');
        const data = await res.json();
        console.log('Profile data:', data);
        setProfile(data.profile);
      } catch (error) {
        console.error('Failed to fetch profile data', error);
      }
    };

    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        console.log('Projects data:', data);
        setProjects(data.projects);
      } catch (error) {
        console.error('Failed to fetch projects data', error);
      }
    };

    const fetchResources = async () => {
      try {
        const res = await fetch('/api/usefulresources');
        const data = await res.json();
        setResources(data.resources);
      } catch (error) {
        console.error('Failed to fetch resources data', error);
      }
    };

    fetchResources();
    fetchProfile();
    fetchProjects();
  }, []);

  if (!profile) return <div>Loading...</div>;

  const logoUrl = resources?.logo?.url || '';

  console.log('isTheme', currentTheme);


    const scrollToSection = (sectionId:any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MagicMouse color={currentTheme === 'dark' ? '#1da1f3' : '#fd562a'}>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

        {loading && <Loader />}
        <Header
          onThemeChange={handleThemeChange}
          LogoImage={logoUrl}
          TextLogo={profile.textLogo}
        />
        <main>
          <section className='hero-section'>
            <HeroCard />
          </section>
          <About profile={profile} />
          <Portfolio projects={projects} />
          <Services services={services} />
          <Blog />
        </main>
      </div>
    </MagicMouse>
  );
};

export default Home;
