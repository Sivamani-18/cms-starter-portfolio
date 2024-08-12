import React, { useEffect, useState } from 'react';
import { TypingEffect } from 'react-typed.ts';
import ThreeDTilt from '3dtilt';

import { Profile, UsefulResource } from '@/types/types';
import { sayGreeting } from '@/utils/HelperFunctions';
import LinkGroup from '../UI/LinkGroup/LinkGroup';

import './HeroCard.css';

interface HeroCardProps {
  dynamicHeight?: number;
}

export const HeroCard: React.FC<HeroCardProps> = ({ dynamicHeight = 90 }) => {
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
      className={`hero-area pt-[${dynamicHeight}px]`}
      style={{
        backgroundImage: `url(${heroBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className='container'>
        <div
          className='hero-content'
          style={{ minHeight: `calc(100vh - ${dynamicHeight}px)` }}
        >
          <div className='grid grid-cols-2 items-center justify-center w-full mt-[-30px]'>
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
                <LinkGroup
                  contactHref='#contact'
                  socialLinks={{
                    facebook: profile?.socialMediaLink.facebook,
                    linkedin: profile?.socialMediaLink.linkedin,
                    instagram: profile?.socialMediaLink.instagram,
                    github: profile?.socialMediaLink.github,
                  }}
                />
              </div>
            </div>
            <div className='col-span-1 image-block'>
              <ThreeDTilt
                options={{
                  perspective: 1000,
                  maxTilt: 10,
                  scale: 1,
                  speed: 300,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                  transition: true,
                }}
                className='hero-image-wrapper'
              >
                <div>
                  <img
                    className='hero-image-fluid'
                    src={profile?.profilePicture.url}
                    alt='hero main image'
                  />
                </div>
              </ThreeDTilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
