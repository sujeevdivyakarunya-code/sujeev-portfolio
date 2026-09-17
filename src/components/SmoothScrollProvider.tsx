import React from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  useSmoothScroll();
  return <>{children}</>;
};
