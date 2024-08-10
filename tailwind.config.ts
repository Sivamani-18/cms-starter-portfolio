import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xl: { max: '1600px' },
      lg: { max: '1199px' },
      md: { max: '991px' },
      sm: { max: '767px' },
      xs: { max: '575px' },
      xxs: { max: '480px' },
      mxl: { raw: '(min-width: 1921px)' },
    },
    fontFamily: {
      pop: ['Poppins', 'sans-serif'],
      mon: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      base: ['15px', '30px'],
      xxs: ['11px', '14px'],
      xs: ['12px', '16px'],
      sm: ['13px', '22px'],
      md: ['14px', '20px'],
      xmd: ['16px', '28px'],
      lg: ['18px', '22px'],
      xlg: ['20px', '28px'],
      xbig: ['230px', '200px'],
    },
    extend: {
      colors: {
        primary: {
          light: 'rgb(var(--primary-light) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
        },
        primaryContent: {
          light: 'rgb(var(--primary-content-light) / <alpha-value>)',
          dark: 'rgb(var(--primary-content-dark) / <alpha-value>)',
        },
        secondary: {
          light: 'rgb(var(--secondary-light) / <alpha-value>)',
          dark: 'rgb(var(--secondary-dark) / <alpha-value>)',
        },
        secondaryContent: {
          light: 'rgb(var(--secondary-content-light) / <alpha-value>)',
          dark: 'rgb(var(--secondary-content-dark) / <alpha-value>)',
        },
        accent: {
          light: 'rgb(var(--accent-light) / <alpha-value>)',
          dark: 'rgb(var(--accent-dark) / <alpha-value>)',
        },
        accentContent: {
          light: 'rgb(var(--accent-content-light) / <alpha-value>)',
          dark: 'rgb(var(--accent-content-dark) / <alpha-value>)',
        },
        btnPrimary: {
          light: 'rgb(var(--button-primary-light) / <alpha-value>)',
          dark: 'rgb(var(--button-primary-dark) / <alpha-value>)',
        },
        btnPrimaryContent: {
          light: 'rgb(var(--btn-primary-content-light) / <alpha-value>)',
          dark: 'rgb(var(--btn-primary-content-dark) / <alpha-value>)',
        },
        btnPrimaryStates: {
          light: 'rgb(var(--btn-primary-states-light) / <alpha-value>)',
          dark: 'rgb(var(--btn-primary-states-dark) / <alpha-value>)',
        },
        btnSecondary: {
          light: 'rgb(var(--button-secondary-light) / <alpha-value>)',
          dark: 'rgb(var(--button-secondary-dark) / <alpha-value>)',
        },
        btnSecondaryContent: {
          light: 'rgb(var(--btn-secondary-content-light) / <alpha-value>)',
          dark: 'rgb(var(--btn-secondary-content-dark) / <alpha-value>)',
        },
        btnSecondaryStates: {
          light: 'rgb(var(--btn-secondary-states-light) / <alpha-value>)',
          dark: 'rgb(var(--btn-secondary-states-dark) / <alpha-value>)',
        },
        navbar: {
          light: 'rgb(var(--navbar-light) / <alpha-value>)',
          dark: 'rgb(var(--navbar-dark) / <alpha-value>)',
        },
        navbarContent: {
          light: 'rgb(var(--navbar-content-light) / <alpha-value>)',
          dark: 'rgb(var(--navbar-content-dark) / <alpha-value>)',
        },
        header: {
          light: 'rgb(var(--header-light) / <alpha-value>)',
          dark: 'rgb(var(--header-dark) / <alpha-value>)',
        },
        headerContent: {
          light: 'rgb(var(--header-content-light) / <alpha-value>)',
          dark: 'rgb(var(--header-content-dark) / <alpha-value>)',
        },
        headerIcon: {
          light: 'rgb(var(--header-icon-light) / <alpha-value>)',
          dark: 'rgb(var(--header-icon-dark) / <alpha-value>)',
        },
        neutral: {
          light: 'rgb(var(--neutral-light) / <alpha-value>)',
          dark: 'rgb(var(--neutral-dark) / <alpha-value>)',
        },
        baseColor: {
          light: 'rgb(var(--baseColor-light) / <alpha-value>)',
          dark: 'rgb(var(--baseColor-dark) / <alpha-value>)',
        },
        titleColor: {
          light: 'rgb(var(--titleColor-light) / <alpha-value>)',
          dark: 'rgb(var(--titleColor-dark) / <alpha-value>)',
        },
        card: {
          light: 'rgb(var(--card-light) / <alpha-value>)',
          dark: 'rgb(var(--card-dark) / <alpha-value>)',
        },
        body: {
          light: 'rgb(var(--body-light) / <alpha-value>)',
          dark: 'rgb(var(--body-dark) / <alpha-value>)',
        },
        outlineColor: {
          light: 'rgb(var(--outlineColor-light) / <alpha-value>)',
          dark: 'rgb(var(--outlineColor-dark) / <alpha-value>)',
        },
        info: {
          light: 'rgb(var(--info-light) / <alpha-value>)',
          dark: 'rgb(var(--info-dark) / <alpha-value>)',
        },
        success: {
          light: 'rgb(var(--success-light) / <alpha-value>)',
          dark: 'rgb(var(--success-dark) / <alpha-value>)',
        },
        warning: {
          light: 'rgb(var(--warning-light) / <alpha-value>)',
          dark: 'rgb(var(--warning-dark) / <alpha-value>)',
        },
        error: {
          light: 'rgb(var(--error-light) / <alpha-value>)',
          dark: 'rgb(var(--error-dark) / <alpha-value>)',
        },
        disabled: {
          light: 'rgb(var(--disabled-light) / <alpha-value>)',
          dark: 'rgb(var(--disabled-dark) / <alpha-value>)',
        },
        transparent: {
          light: 'var(--transparent-light)',
          dark: 'var(--transparent-dark)',
        },
      },
      container: {
        center: true, // Centers the container by applying `margin-left: auto` and `margin-right: auto`
        padding: {
          DEFAULT: '1rem', // 16px padding on all screen sizes
          sm: '2rem', // 32px padding on screens >= 640px
          lg: '4rem', // 64px padding on screens >= 1024px
          xl: '5rem', // 80px padding on screens >= 1280px
          '2xl': '6rem', // 96px padding on screens >= 1536px
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1285px',
          '2xl': '1536px',
        },
      },
      minWidth: {
        0: '0',
        80: '80px',
        100: '100px',
        150: '150px',
        220: '220px',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
};

export default config;
