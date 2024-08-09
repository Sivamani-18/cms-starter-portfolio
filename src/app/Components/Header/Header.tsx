import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from '../../assets/image/logo.svg';

import '../../Components/Header/Header.css';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className='site-header' id='site-header'>
      <nav className='navbar navbar-expand-xl' id='site-navbar'>
        <div className='container mx-auto flex items-center justify-between py-4'>
          <Link className='navbar-brand' href='/'>
            <Image src={Logo} alt='logo' height={50} />
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
        </div>
      </nav>
    </header>
  );
};
