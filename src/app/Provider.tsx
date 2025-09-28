'use client';
import { store } from '@/store';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

interface ProviderProps {
  children: React.ReactNode;
}

export const ReduxProviderWrapper: React.FC<ProviderProps> = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
