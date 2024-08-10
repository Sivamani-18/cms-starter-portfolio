import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

interface LinkGroupProps {
  contactHref: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}

const LinkGroup: React.FC<LinkGroupProps> = ({ contactHref, socialLinks }) => {
  return (
    <div className='flex items-center space-x-4 mt-7'>
      <a
        className='btn-main text-btnPrimaryContent-light bg-btnPrimary-light hover:bg-btnPrimary-light/80 dark:bg-btnPrimary-dark dark:hover:bg-btnPrimary-dark/80 rounded py-2 px-4'
        href={contactHref}
      >
        Contact Me
      </a>
      <ul className='hero-social flex items-center space-x-4'>
        {socialLinks.facebook && (
          <li>
            <a
              href={socialLinks.facebook}
              target='_blank'
              className='text-white hover:text-primary-light dark:hover:text-primary-dark'
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
        )}
        {socialLinks.twitter && (
          <li>
            <a
              href={socialLinks.twitter}
              target='_blank'
              className='text-white hover:text-primary-light dark:hover:text-primary-dark'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        )}
        {socialLinks.instagram && (
          <li>
            <a
              href={socialLinks.instagram}
              target='_blank'
              className='text-white hover:text-primary-light dark:hover:text-primary-dark'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        )}
        {socialLinks.linkedin && (
          <li>
            <a
              href={socialLinks.linkedin}
              target='_blank'
              className='text-white hover:text-primary-light dark:hover:text-primary-dark'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        )}

        {socialLinks.github && (
          <li>
            <a
              href={socialLinks.github}
              target='_blank'
              className='text-white hover:text-primary-light dark:hover:text-primary-dark'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default LinkGroup;
