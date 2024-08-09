import React, { useEffect, useState } from 'react';
import { TypingEffect } from 'react-typed.ts';

import './HeroCard.css';
import { UsefulResource } from '@/types/types';

interface HeroCardProps {}

export const HeroCard: React.FC<HeroCardProps> = ({}) => {
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

    fetchResources();
  }, []);

  const heroBG = resources?.heroCardBg?.url || '';

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
                <small>Hello, I&apos;m</small>
                <TypingEffect
                  strings={['Sivamani']}
                  loop={true}
                  cursorChar='|'
                  typeSpeed={500}
                  backSpeed={300}
                  backDelay={2000}
                  smartBackspace={true}
                />
              </h1>
              <p>
                A passionate <strong>Web Developer</strong> from{' '}
                <strong>India!</strong>
              </p>
              <div>
                <p>
                  I develop websites using ...{' '}
                  <TypingEffect
                    strings={[
                      'React',
                      'NextJS',
                      'Vite',
                      'WordPress',
                      'NodeJS',
                      'HTML',
                    ]}
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
