import React from 'react';

interface HeroCardProps {}

export const HeroCard: React.FC<HeroCardProps> = ({}) => {
  return (
    <div className='hero-area'>
      <div className='container'>
        <h1>Welcome</h1>
      </div>
    </div>
  );
};
