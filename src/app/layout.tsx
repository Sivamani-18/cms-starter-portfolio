import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

// Specify font subsets and weights with literals
const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Sivamani | Personal Portfolio',
  description:
    'Welcome to the personal portfolio of Sivasubramaniyam, a seasoned Front-End Lead Developer with over a decade of experience in crafting innovative, high-performance web applications. Specializing in React.js, Redux, and JavaScript, Sivasubramaniyam brings a deep understanding of modern web technologies and design principles. Explore a diverse range of projects that showcase expertise in UI/UX design, NPM library development, and responsive web design using HTML5, CSS3, and Tailwind CSS. With a strong background in CMS integration, SEO optimization, and technical support, Sivasubramaniyam is committed to delivering exceptional digital experiences. Discover how a passion for technology and a focus on continuous learning have driven a successful career in web development, from contributing to open-source projects to leading complex web solutions in the healthcare technology sector. Dive into a portfolio that reflects a dedication to excellence, innovation, and the pursuit of knowledge, all while maintaining a personal touch through gaming, anime, and social activities.',
  keywords: `
    Front End Lead Developer, UI/UX Developer, React.js Developer, Redux Expert, JavaScript Developer, HTML5 & CSS3 Expert, Tailwind CSS Specialist, WordPress Developer, NPM Library Developer, Technical Support Specialist,
    Web Development Expert, SEO Optimization, UI Design, Front-End Development, Multimedia Developer, Pondicherry University Alumni, Diploma in Multimedia (DVM-VFX), Mediwave Developer, jQuery Developer, CMS Integration,
    Experienced Front-End Lead with 10+ Years in Web Development, Professional UI/UX Developer Specialized in React.js and Redux, Expert in Building Custom NPM Libraries for JavaScript, Technical Support and SEO Optimization for Web Projects,
    Proficient in HTML5, CSS3, and JavaScript for Responsive Design, Specialist in WordPress and Tailwind CSS for Modern Web Design, Front-End Developer with Experience in Multiple Frameworks and CMS,
    Pondicherry University IT Graduate with a Focus on Web Technologies, Mediwave Front-End Developer Specializing in Innovative Solutions, UI/UX Developer Passionate About Gaming, Anime, and Social Activities,
    Sivasubramaniyam V Portfolio, Sivasubramaniyam Mediwave Developer, Sivasubramaniyam Front-End Expert, Sivasubramaniyam React Developer, Sivasubramaniyam UI/UX Specialist,
    Web Design and Development in Healthcare Technology, SEO for Front-End Developers, Advanced Web Design Techniques Using Tailwind CSS, Front-End Development for Content Management Systems (CMS), Interactive UI/UX Design for Web Applications
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <head>
        <link rel='icon' href='./favicon.svg' />
      </head> */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
