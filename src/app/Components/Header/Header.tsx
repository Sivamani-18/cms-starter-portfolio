'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import '../../Components/Header/Header.css';
import ThemeToggle from '../Theme/ThemeToggle';
import Image from 'next/image';

interface HeaderProps {
  onThemeChange: (theme: string, loading: boolean) => void;
  LogoImage?: string | undefined;
  TextLogo?: string | undefined;
}

export const Header: React.FC<HeaderProps> = ({
  onThemeChange,
  LogoImage = '',
  TextLogo = 'S',
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-stuck' : ''}`} id='home'>
      <nav className='navbar navbar-expand-xl' id='site-navbar'>
        <div className='container mx-auto flex items-center justify-between py-4'>
          <Link className='navbar-brand' href='/'>
            {LogoImage ? (
              <Image src={LogoImage} alt='logo' height={50} width={50} unoptimized />
            ) : (
              <h1 className='text-logo'>{TextLogo}</h1>
            )}
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'>
              <i className='bi bi-list'></i>
            </span>
          </button>

          <div id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'><Link className='nav-link active' aria-current='page' href='#home'>Home</Link></li>
              <li className='nav-item'><Link className='nav-link' href='#about'>About</Link></li>
              <li className='nav-item'><Link className='nav-link' href='#portfolio'>Portfolio</Link></li>
              <li className='nav-item'><Link className='nav-link' href='#service'>Service</Link></li>
              <li className='nav-item'><Link className='nav-link' href='#testimonial'>Testimonials</Link></li>
              <li className='nav-item'><Link className='nav-link' href='#blog'>Blog</Link></li>
              <li className='nav-item'><Link className='nav-link' href='#contact'>Contact</Link></li>
            </ul>
          </div>

          <ThemeToggle onThemeChange={onThemeChange} />
        </div>
      </nav>
    </header>
  );
};
