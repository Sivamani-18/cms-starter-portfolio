# CMS Starter Portfolio

🚧 **Under Construction** 🚧

Welcome to the CMS Starter Portfolio project! This portfolio is currently a work in progress, built with cutting-edge technologies including **Next.js**, **TypeScript**, and **Hygraph** (formerly known as GraphCMS). The portfolio will showcase a variety of dynamic content managed through the CMS. Keep an eye out for updates as the project progresses.

🔗 **Live Preview:** [sivamani-portfolio.netlify.app](https://sivamani-portfolio.netlify.app/)

If you find this project intriguing, please consider ⭐ **starring** or 🍴 **forking** the repository to stay informed about the latest developments and releases!

## Portfolio Architecture Overview

```mermaid
graph TD
    subgraph Deployment
        Netlify
        GitHubPages
    end

    subgraph Frontend
        Nextjs
        GraphQL
    end

    subgraph CMS
        Hygraph[(Hygraph)]
    end

    subgraph PortfolioContent
        Projects[(Projects)]
        Profile[(Profile)]
        UsefulResources[(Useful Resources)]
        SocialMediaLinks[(Social Media Links)]
        Skills[(Skills)]
        Blog[(Blog)]
    end

    Netlify --> Nextjs
    GitHubPages --> Nextjs
    Nextjs --> GraphQL
    GraphQL --> Hygraph

    Hygraph --> Projects
    Hygraph --> Profile
    Hygraph --> UsefulResources
    Hygraph --> SocialMediaLinks
    Hygraph --> Skills
    Hygraph --> Blog
```

### Key Features

- **Modern Tech Stack**: Leveraging Next.js for fast, server-rendered React applications and TypeScript for type safety.
- **Content Management**: Hygraph is integrated as the CMS, providing a user-friendly interface for managing all portfolio content.
- **Flexible Deployment**: The portfolio can be deployed on both Netlify and GitHub Pages, ensuring seamless and versatile hosting options.
