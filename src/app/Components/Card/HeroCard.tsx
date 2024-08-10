import React, { useEffect, useState } from 'react';
import { TypingEffect } from 'react-typed.ts';

import './HeroCard.css';
import { Profile, UsefulResource } from '@/types/types';
import { sayGreeting } from '@/utils/HelperFunctions';

interface HeroCardProps {}

export const HeroCard: React.FC<HeroCardProps> = ({}) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [resources, setResources] = useState<UsefulResource | null>(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await fetch('/api/usefulresources');
        const data = await res.json();
        setResources(data.resources);
      } catch (error) {
        console.error('Failed to fetch resources data', error);
      }
    };

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

    fetchProfile();
    fetchResources();
  }, []);

  const heroBG = resources?.heroCardBg?.url || '';
  const shortName = profile?.shortName || 'Sivamani';
  const skills = profile?.skills || ['React', 'NextJS', 'WordPress'];

  console.log('profile', profile);

  return (
    <div
      className='hero-area'
      style={{
        backgroundImage: `url(${heroBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className='container'>
        <div className='hero-content'>
          <div className='grid grid-cols-2 items-center justify-center w-full'>
            <div className='col-span-1 content-block'>
              <h1 className='hero-head'>
                <small>{sayGreeting()}, I&apos;m</small>
                <TypingEffect
                  strings={[shortName]}
                  loop={true}
                  cursorChar='|'
                  typeSpeed={500}
                  backSpeed={300}
                  backDelay={2000}
                  smartBackspace={true}
                />
              </h1>
              <p>
                A passionate <strong>{profile?.role}</strong> from{' '}
                <strong>{profile?.country}!</strong>
              </p>
              <div>
                <p>
                  I develop websites using ...{' '}
                  <TypingEffect
                    strings={skills}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={true}
                    cursorChar='.'
                    shuffle={true}
                    className='font-bold'
                  />
                </p>
              </div>
            </div>
            <div className='col-span-1 image-block'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
