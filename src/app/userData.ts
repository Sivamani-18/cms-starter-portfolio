import { Menu, X, ChevronRight, Github, Linkedin, Mail, Phone, MapPin, Code, Palette, Search, Package, Globe, Wrench, Star, Quote, Calendar, User, ExternalLink, ArrowUp, Play, Sparkles } from 'lucide-react';

export const skills = [
    { name: 'React.js', icon: Code, level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI Design', icon: Palette, level: 90, color: 'from-pink-500 to-rose-500' },
    { name: 'SEO', icon: Search, level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'NPM Libraries', icon: Package, level: 85, color: 'from-purple-500 to-violet-500' },
    { name: 'WordPress', icon: Globe, level: 82, color: 'from-orange-500 to-amber-500' },
    { name: 'Tailwind CSS', icon: Wrench, level: 95, color: 'from-indigo-500 to-blue-500' }
];

export const services = [
    {
        title: 'Frontend Development',
        description: 'Building responsive and interactive web applications using React.js, HTML5, and modern JavaScript.',
        icon: Code,
        gradient: 'from-blue-500/20 to-cyan-500/20',
        iconColor: 'text-blue-500'
    },
    {
        title: 'UI Development',
        description: 'Creating beautiful and user-friendly interfaces with focus on user experience and modern design principles.',
        icon: Palette,
        gradient: 'from-pink-500/20 to-rose-500/20',
        iconColor: 'text-pink-500'
    },
    {
        title: 'SEO Optimization',
        description: 'Improving website visibility and search engine rankings through technical SEO and performance optimization.',
        icon: Search,
        gradient: 'from-green-500/20 to-emerald-500/20',
        iconColor: 'text-green-500'
    },
    {
        title: 'NPM Package Development',
        description: 'Creating and maintaining reusable JavaScript libraries and packages for the developer community.',
        icon: Package,
        gradient: 'from-purple-500/20 to-violet-500/20',
        iconColor: 'text-purple-500'
    },
    {
        title: 'WordPress Development',
        description: 'Custom WordPress themes and plugins development with modern web technologies.',
        icon: Globe,
        gradient: 'from-orange-500/20 to-amber-500/20',
        iconColor: 'text-orange-500'
    },
    {
        title: 'Technical Consulting',
        description: 'Providing technical guidance and consulting services for frontend architecture and best practices.',
        icon: Wrench,
        gradient: 'from-indigo-500/20 to-blue-500/20',
        iconColor: 'text-indigo-500'
    }
];

export const portfolio = [
    {
        title: 'E-commerce Platform',
        description: 'Modern React-based e-commerce solution with advanced filtering and payment integration.',
        tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        gradient: 'from-blue-600 to-purple-600'
    },
    {
        title: 'SaaS Dashboard',
        description: 'Comprehensive analytics dashboard with real-time data visualization and user management.',
        tech: ['React', 'D3.js', 'REST API', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        gradient: 'from-green-600 to-teal-600'
    },
    {
        title: 'NPM Component Library',
        description: 'Reusable React component library with TypeScript support and comprehensive documentation.',
        tech: ['React', 'TypeScript', 'Storybook', 'NPM'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
        gradient: 'from-pink-600 to-rose-600'
    },
    {
        title: 'Real Estate Platform',
        description: 'Full-featured property listing platform with virtual tours and advanced search capabilities.',
        tech: ['React', 'Next.js', 'PostgreSQL', 'AWS'],
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
        gradient: 'from-orange-600 to-red-600'
    },
    {
        title: 'Healthcare App',
        description: 'Patient management system with appointment scheduling and telemedicine features.',
        tech: ['React Native', 'Firebase', 'WebRTC', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
        gradient: 'from-indigo-600 to-purple-600'
    },
    {
        title: 'EdTech Platform',
        description: 'Interactive learning platform with video streaming, quizzes, and progress tracking.',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        gradient: 'from-cyan-600 to-blue-600'
    }
];

export const testimonials = [
    {
        name: 'Sarah Johnson',
        position: 'Product Manager at TechCorp',
        content: 'Sivasubramaniyam delivered exceptional work on our React project. His attention to detail and technical expertise made a significant impact on our product.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
        name: 'Michael Chen',
        position: 'CEO at StartupXYZ',
        content: 'Working with Siva was a game-changer. His SEO optimization skills increased our organic traffic by 300% within 6 months.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
        name: 'Emily Davis',
        position: 'Design Director at Creative Agency',
        content: 'The UI components and libraries Siva created for us are still being used across multiple projects. Excellent code quality and documentation.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
];

export const blogPosts = [
    {
        title: 'Modern React Patterns for 2024',
        excerpt: 'Exploring the latest React patterns and best practices that every developer should know.',
        date: '2024-03-15',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
        category: 'React'
    },
    {
        title: 'Building Scalable NPM Libraries',
        excerpt: 'A comprehensive guide to creating and maintaining NPM packages that stand the test of time.',
        date: '2024-03-10',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400&h=250&fit=crop',
        category: 'JavaScript'
    },
    {
        title: 'SEO for Single Page Applications',
        excerpt: 'Techniques and strategies to improve SEO performance in React and other SPA frameworks.',
        date: '2024-03-05',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop',
        category: 'SEO'
    }
];