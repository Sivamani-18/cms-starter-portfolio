import Link from 'next/link';
import React from 'react';

import Logo from '../../assets/image/logo.svg';

import '../../Components/Header/Header.css';
import ThemeToggle from '../Theme/ThemeToggle';
import Image from 'next/image';

interface HeaderProps {
  onThemeChange: (loading: boolean) => void;
  LogoImage?: string | undefined;
}

export const Header: React.FC<HeaderProps> = ({
  onThemeChange,
  LogoImage = '',
}) => {
  return (
    <header className='site-header' id='site-header'>
      <nav className='navbar navbar-expand-xl' id='site-navbar'>
        <div className='container mx-auto flex items-center justify-between py-4'>
          <Link className='navbar-brand' href='/'>
            {LogoImage ? (
              <Image
                src={LogoImage}
                alt='logo'
                height={50}
                width={50}
                unoptimized
              />
            ) : (
              <Logo width={100} height={50} alt='logo' />
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
          <div className='' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  href='#site-header'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='#about-section'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='#portfolio-section'>
                  Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='#service-section'>
                  Service
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='#testimonial-section'>
                  Testimonials
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='#blog-section'>
                  Blog
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='#contact-section'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ThemeToggle onThemeChange={onThemeChange} />
        </div>
      </nav>
    </header>
  );
};
