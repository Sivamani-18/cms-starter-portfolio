'use client';
import React, { useEffect, useState } from 'react';
import Faviconify from 'faviconify';
import { Profile } from '@/types/types';

interface FavIconProps {}

export const FavIcon: React.FC<FavIconProps> = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/profile');
        const data = await res.json();
        setProfile(data.profile);
      } catch (error) {
        console.error('Failed to fetch profile data', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return;
  return (
    <Faviconify
      textContent={profile.textLogo || 'S'}
      iconShape='rounded'
      fontWeight='900'
    />
  );
};
