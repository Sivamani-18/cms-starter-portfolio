'use client';

import { FC, useEffect, useState } from 'react';
import { Profile, Project, UsefulResource } from '../types/types';
import { Header } from './Components/Header/Header';
import { HeroCard } from './Components/Card/HeroCard';
import Loader from './Components/Loader/Loader';
import MagicMouse from 'magicmouse.ts';

const Home: FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [resources, setResources] = useState<UsefulResource | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('light');

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

  return (
    <MagicMouse color={currentTheme === 'dark' ? '#1da1f3' : '#fd562a'}>
      <div className='min-h-screen bg-gray-100'>
        {loading && <Loader />}
        <Header
          onThemeChange={handleThemeChange}
          LogoImage={logoUrl}
          TextLogo={profile.textLogo}
        />
        <main>
          <div className='hero-section'>
            <HeroCard />
          </div>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
              <div className='p-6 bg-white border-b border-gray-200'>
                <div className='flex items-center space-x-4'>
                  <img
                    className='size-40 rounded-full'
                    src={profile.profilePicture.url}
                    alt={profile.name}
                  />
                  <div>
                    <h2 className='text-xl font-medium text-gray-900'>
                      {profile.name}
                    </h2>
                    <p className='text-gray-600'>{profile.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h2 className='text-2xl font-bold text-gray-900'>Projects</h2>
              <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {projects.map((project) => (
                  <div
                    key={project.slug}
                    className='bg-white shadow-sm rounded-lg p-4'
                  >
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {project.name}
                    </h3>
                    <p className='mt-2 text-gray-600'>{project.description}</p>
                    {project.image?.url && (
                      <img
                        className='mt-2 w-full h-48 object-cover rounded-md'
                        src={project.image.url}
                        alt={project.name}
                      />
                    )}
                    <div className='mt-2'>
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </MagicMouse>
  );
};

export default Home;
