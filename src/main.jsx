import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Vera Vekiou',
  role: '',
  email: 'vvekiou@gmail.com',
  github: 'https://github.com/Veravekiou',
  linkedin: 'https://www.linkedin.com/in/varvara-vekiou/',
  cv: '',
};

const projects = [
  {
    title: 'PlanGo',
    type: 'Full-stack web app',
    mediaType: 'desktop',
    mediaLayout: 'web-layered',
    mediaClass: 'plango-layered',
    images: [
      {
        src: '/projects/plango-preview.webp',
        alt: 'PlanGo travel planning homepage with hero section and popular destinations',
        fit: 'cover',
        position: 'top center',
        label: 'plango.app',
      },
      {
        src: '/projects/plango-generate-trip.webp',
        alt: 'PlanGo generate trip destination step screen',
        fit: 'contain',
        position: 'top center',
        label: 'generate trip',
      },
    ],
    galleryImages: [
      {
        src: '/projects/plango-preview.webp',
        alt: 'PlanGo travel planning homepage with hero section and popular destinations',
        fit: 'cover',
        position: 'top center',
        label: 'home',
      },
      {
        src: '/projects/plango-generate-trip.webp',
        alt: 'PlanGo generate trip destination step screen',
        fit: 'contain',
        position: 'top center',
        label: 'generate trip',
      },
      {
        src: '/projects/plango-my-trips.webp',
        alt: 'PlanGo my trips page with saved trip cards and filters',
        fit: 'contain',
        position: 'top center',
        label: 'my trips',
      },
      {
        src: '/projects/plango-profile-map.webp',
        alt: 'PlanGo profile and journey map screen',
        fit: 'contain',
        position: 'top center',
        label: 'profile map',
      },
      {
        src: '/projects/plango-trip-details-map.webp',
        alt: 'PlanGo trip details page with itinerary and route map',
        fit: 'contain',
        position: 'top center',
        label: 'trip details',
      },
    ],
    description:
      'A PHP/MySQL travel planning web application that generates personalized itineraries, saves trips, manages user profiles, and supports route and map-based travel context.',
    highlights: ['Personalized itineraries', 'Saved trips', 'Map context'],
    stack: ['PHP', 'MySQL', 'JavaScript', 'PDO', 'Google APIs', 'XAMPP'],
    impact:
      'Shows a complete thesis-scale product with authentication, database design, itinerary generation, saved trips, API endpoints, security protections, and deployment documentation.',
    github: 'https://github.com/Veravekiou/plango-travel-site',
  },
  {
    title: 'Theater Booking App',
    type: 'Full-stack mobile app',
    mediaType: 'mobile',
    mediaLayout: 'phone-pair',
    images: [
      {
        src: '/projects/theatre-home.webp',
        alt: 'Theater Booking App home screen with now showing theater production',
        fit: 'cover',
        position: 'top center',
      },
      {
        src: '/projects/theatre-booking.webp',
        alt: 'Theater Booking App seat selection and ticket booking screen',
        fit: 'cover',
        position: 'top center',
      },
    ],
    galleryMode: 'mobile-mockup',
    galleryImages: [
      {
        src: '/projects/theatre-home.webp',
        alt: 'Theater Booking App home screen with now showing theater production',
        fit: 'contain',
        position: 'top center',
        label: 'home',
      },
      {
        src: '/projects/theatre-booking.webp',
        alt: 'Theater Booking App seat selection and ticket booking screen',
        fit: 'contain',
        position: 'top center',
        label: 'booking',
      },
      {
        src: '/projects/theatre-login.webp',
        alt: 'Theater Booking App login screen',
        fit: 'contain',
        position: 'top center',
        label: 'login',
      },
      {
        src: '/projects/theatre-showtimes.webp',
        alt: 'Theater Booking App showtimes screen',
        fit: 'contain',
        position: 'top center',
        label: 'showtimes',
      },
      {
        src: '/projects/theatre-profile.webp',
        alt: 'Theater Booking App profile and reservation history screen',
        fit: 'contain',
        position: 'top center',
        label: 'profile',
      },
    ],
    description:
      'A theater booking system where users can register, browse productions, search showtimes, select seats, book tickets, and manage reservations.',
    highlights: ['Seat selection', 'JWT auth', 'Reservations'],
    stack: ['Expo', 'React Native', 'Express', 'JWT', 'MariaDB'],
    impact:
      'Shows full-stack architecture, authentication, REST APIs, database relations, and transaction-safe reservations.',
    github: 'https://github.com/Veravekiou/theatre-booking-app',
  },
  {
    title: 'Travel Agency Management System',
    type: 'Management system',
    mediaType: 'desktop',
    mediaLayout: 'desktop-floating',
    mediaClass: 'travel-floating',
    windowLabel: 'Travel Agency System',
    images: [
      {
        src: '/projects/travel-agency-dashboard.webp',
        alt: 'Travel Agency Management System dashboard screen',
        fit: 'contain',
        position: 'top center',
      },
    ],
    galleryImages: [
      {
        src: '/projects/travel-agency-dashboard.webp',
        alt: 'Travel Agency Management System dashboard screen',
        fit: 'contain',
        position: 'top center',
        label: 'dashboard',
      },
      {
        src: '/projects/travel-agency-customers.webp',
        alt: 'Travel Agency Management System customer information table',
        fit: 'contain',
        position: 'top center',
        label: 'customers',
      },
      {
        src: '/projects/travel-agency-bookings.webp',
        alt: 'Travel Agency Management System bookings screen',
        fit: 'contain',
        position: 'top center',
        label: 'bookings',
      },
      {
        src: '/projects/travel-agency-trips.webp',
        alt: 'Travel Agency Management System trips screen',
        fit: 'contain',
        position: 'top center',
        label: 'trips',
      },
    ],
    description:
      'A desktop booking and customer management system for organizing trips, reservations, and dashboard insights in one clean interface.',
    highlights: ['Booking workflow', 'Customer records', 'Dashboard stats'],
    stack: ['Java', 'FXML', 'Maven', 'JDBC'],
    impact:
      'Shows desktop UI development, data handling, dashboard organization, and admin-style management workflows.',
    github: 'https://github.com/Veravekiou/travel-agency-management-system',
  },
  {
    title: 'PetPlanet',
    type: 'Frontend website',
    mediaType: 'desktop',
    mediaLayout: 'web-layered',
    mediaClass: 'petplanet-layered',
    images: [
      {
        src: '/projects/petplanet-home.webp',
        alt: 'PetPlanet homepage hero section',
        fit: 'cover',
        position: 'top center',
        label: 'homepage',
      },
      {
        src: '/projects/petplanet-products.webp',
        alt: 'PetPlanet cats products page',
        fit: 'contain',
        position: 'top center',
        label: 'products',
      },
    ],
    galleryImages: [
      {
        src: '/projects/petplanet-home.webp',
        alt: 'PetPlanet homepage hero section',
        fit: 'contain',
        position: 'top center',
        label: 'homepage',
      },
      {
        src: '/projects/petplanet-products.webp',
        alt: 'PetPlanet cats products page with product dropdown',
        fit: 'contain',
        position: 'top center',
        label: 'products',
      },
      {
        src: '/projects/petplanet-adopt.webp',
        alt: 'PetPlanet adopt now page with pet cards',
        fit: 'contain',
        position: 'top center',
        label: 'adopt',
      },
      {
        src: '/projects/petplanet-about.webp',
        alt: 'PetPlanet about us page',
        fit: 'contain',
        position: 'top center',
        label: 'about',
      },
    ],
    description:
      'A responsive pet shop website with product category pages, adoption filtering, search routing, contact validation, and demo login/sign-up flow.',
    highlights: ['Responsive pages', 'Product filters', 'Form validation'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    impact:
      'Shows responsive layout, multi-page frontend structure, interactive filters, form validation, and polished user flows.',
    github: 'https://github.com/Veravekiou/PetPlanet',
    demo: 'https://veravekiou.github.io/PetPlanet/',
  },
  {
    title: 'FixMyCity',
    type: 'Android mobile app',
    mediaType: 'mobile',
    mediaLayout: 'phone-pair',
    images: [
      {
        src: '/projects/fixmycity-home.webp',
        alt: 'FixMyCity mobile app home dashboard screen',
        fit: 'cover',
        position: 'top center',
      },
      {
        src: '/projects/fixmycity-report.webp',
        alt: 'FixMyCity mobile app new report form screen',
        fit: 'cover',
        position: 'top center',
      },
    ],
    galleryMode: 'mobile-mockup',
    galleryImages: [
      {
        src: '/projects/fixmycity-home.webp',
        alt: 'FixMyCity mobile app home dashboard screen',
        fit: 'contain',
        position: 'top center',
        label: 'home',
      },
      {
        src: '/projects/fixmycity-report.webp',
        alt: 'FixMyCity mobile app new report form screen',
        fit: 'contain',
        position: 'top center',
        label: 'new report',
      },
      {
        src: '/projects/fixmycity-report-details.webp',
        alt: 'FixMyCity report details screen',
        fit: 'contain',
        position: 'top center',
        label: 'details',
      },
      {
        src: '/projects/fixmycity-my-reports.webp',
        alt: 'FixMyCity my reports list screen',
        fit: 'contain',
        position: 'top center',
        label: 'my reports',
      },
      {
        src: '/projects/fixmycity-map-location.webp',
        alt: 'FixMyCity map location picker screen',
        fit: 'contain',
        position: 'top center',
        label: 'map',
      },
    ],
    description:
      'An Android application for reporting local city issues with category selection, map-based location selection, image attachment, and submitted report viewing.',
    highlights: ['Map location', 'Image upload', 'Firestore data'],
    stack: ['Java', 'Android SDK', 'Firebase', 'Firestore', 'RecyclerView'],
    impact:
      'Shows mobile development, Firebase integration, form validation, location-based reporting, and structured Android project organization.',
    github: 'https://github.com/Veravekiou/FixMyCity_Part2',
  },
];

const strengths = [
  {
    title: 'Practical builder',
    text: 'Turning ideas into functional projects with real features.',
  },
  {
    title: 'User-focused',
    text: 'Creating simple flows and clear digital experiences.',
  },
  {
    title: 'Always improving',
    text: 'Learning through real development work and iteration.',
  },
];

const techStack = [
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    fallback: 'React',
    delay: '0s',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    fallback: 'JS',
    delay: '0.16s',
  },
  {
    name: 'PHP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    fallback: 'PHP',
    delay: '0.32s',
  },
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    fallback: 'HTML',
    delay: '0.48s',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    fallback: 'CSS',
    delay: '0.64s',
  },
  {
    name: 'React Native',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    fallback: 'RN',
    delay: '0.8s',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    fallback: 'Node',
    delay: '0.96s',
  },
  {
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    fallback: 'Express',
    delay: '1.12s',
    contrast: true,
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    fallback: 'MySQL',
    delay: '1.28s',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    fallback: 'Firebase',
    delay: '1.44s',
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    fallback: 'Java',
    delay: '1.6s',
  },
  {
    name: 'MariaDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg',
    fallback: 'MDB',
    delay: '1.76s',
  },
  {
    name: 'Firestore',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
    fallback: 'FS',
    delay: '1.92s',
  },
  {
    name: 'Android',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
    fallback: 'Android',
    delay: '2.08s',
  },
  {
    name: 'Expo',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg',
    fallback: 'Expo',
    delay: '2.24s',
    contrast: true,
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    fallback: 'Git',
    delay: '2.4s',
  },
  {
    name: 'JavaFX',
    logo: '',
    fallback: 'JFX',
    delay: '2.56s',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    fallback: 'GH',
    delay: '2.72s',
    contrast: true,
  },
  {
    name: 'Maven',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg',
    fallback: 'Maven',
    delay: '2.88s',
  },
];


const heroHighlights = ['5 Projects', 'Web · Mobile · Desktop', 'Open to junior roles'];

const heroFocus = ['React', 'PHP / MySQL', 'Firebase', 'Java'];

const heroMiniProjects = ['PlanGo', 'Theater Booking', 'FixMyCity'];

function ContactLink({ href, icon: Icon, label }) {
  if (!href) return null;

  return (
    <a
      className="icon-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={18} aria-hidden="true" />
      {label}
    </a>
  );
}

function ProjectGalleryModal({ project, activeIndex, onSelect, onClose }) {
  const galleryImages = project.galleryImages || project.images || [];

  if (!galleryImages.length) return null;

  const activeImage = galleryImages[activeIndex] || galleryImages[0];

  const goToPrevious = () => {
    onSelect((activeIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    onSelect((activeIndex + 1) % galleryImages.length);
  };

  return (
    <div
      className="project-gallery-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onClick={onClose}
    >
      <div
        className="project-gallery-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-gallery-topbar">
          <div>
            <span className="project-gallery-kicker">Project gallery</span>
            <h3>{project.title}</h3>
          </div>
          <button
            className="project-gallery-close"
            type="button"
            aria-label="Close gallery"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="project-gallery-stage">
          {galleryImages.length > 1 && (
            <button
              className="project-gallery-arrow prev"
              type="button"
              aria-label="Previous image"
              onClick={goToPrevious}
            >
              ‹
            </button>
          )}

          {project.galleryMode === 'mobile-mockup' ? (
            <div className="mobile-gallery-device">
              <div className="mobile-gallery-speaker" aria-hidden="true" />
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                style={{ objectPosition: activeImage.position || 'top center' }}
              />
            </div>
          ) : (
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              style={{ objectPosition: activeImage.position || 'top center' }}
            />
          )}

          {galleryImages.length > 1 && (
            <button
              className="project-gallery-arrow next"
              type="button"
              aria-label="Next image"
              onClick={goToNext}
            >
              ›
            </button>
          )}
        </div>

        {galleryImages.length > 1 && (
          <div className="project-gallery-thumbs" aria-label="Gallery images">
            {galleryImages.map((image, imageIndex) => (
              <button
                className={imageIndex === activeIndex ? 'is-active' : ''}
                type="button"
                key={image.src}
                onClick={() => onSelect(imageIndex)}
                aria-label={`Show image ${imageIndex + 1}`}
              >
                <img src={image.src} alt="" aria-hidden="true" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectMedia({ project, priority = false, onOpenGallery }) {
  const images = project.images || [];
  const backgroundImage = images[0]?.src;
  const isWebLayered = project.mediaLayout === 'web-layered';
  const isDesktopFloating = project.mediaLayout === 'desktop-floating';
  const mediaClasses = [
    'case-study-media',
    project.mediaType || 'desktop',
    project.mediaLayout || 'single',
    project.mediaClass || '',
    images.length ? 'has-image' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={mediaClasses}
      style={
        backgroundImage
          ? { '--project-image': `url("${backgroundImage}")` }
          : undefined
      }
    >
      {images.length ? (
        <div className={`media-stage ${project.mediaLayout || 'single'}`}>
          {images.map((image, imageIndex) =>
            isWebLayered ? (
              <div
                className={`browser-preview gallery-trigger shot-${imageIndex + 1}`}
                key={image.src}
                role="button"
                tabIndex={0}
                onClick={() => onOpenGallery?.(project, imageIndex)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onOpenGallery?.(project, imageIndex);
                  }
                }}
                aria-label={`Open ${project.title} gallery`}
              >
                <div className="browser-preview-bar" aria-hidden="true">
                  <span className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="browser-label">
                    {image.label || project.title.toLowerCase()}
                  </span>
                </div>
                <img
                  className={`project-image media-shot ${
                    image.fit === 'cover' ? 'cover' : 'contain'
                  }`}
                  src={image.src}
                  alt={image.alt}
                  loading={priority && imageIndex === 0 ? undefined : 'lazy'}
                  style={{ objectPosition: image.position || 'center' }}
                />
              </div>
            ) : isDesktopFloating ? (
              <div className="desktop-showcase" key={image.src}>
                <div
                  className="desktop-window-preview gallery-trigger shot-1"
                  role="button"
                  tabIndex={0}
                  onClick={() => onOpenGallery?.(project, imageIndex)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      onOpenGallery?.(project, imageIndex);
                    }
                  }}
                  aria-label={`Open ${project.title} gallery`}
                >
                  <div className="desktop-window-bar" aria-hidden="true">
                    <span className="desktop-window-title">
                      {project.windowLabel || project.title}
                    </span>
                    <span className="desktop-window-controls">
                      <i>—</i>
                      <i>□</i>
                      <i>×</i>
                    </span>
                  </div>
                  <img
                    className={`project-image media-shot ${
                      image.fit === 'cover' ? 'cover' : 'contain'
                    }`}
                    src={image.src}
                    alt={image.alt}
                    loading={priority && imageIndex === 0 ? undefined : 'lazy'}
                    style={{ objectPosition: image.position || 'center' }}
                  />
                </div>
              </div>
            ) : (
              <img
                className={`project-image media-shot gallery-trigger shot-${imageIndex + 1} ${
                  image.fit === 'cover' ? 'cover' : 'contain'
                }`}
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading={priority && imageIndex === 0 ? undefined : 'lazy'}
                style={{ objectPosition: image.position || 'center' }}
                onClick={() => onOpenGallery?.(project, imageIndex)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onOpenGallery?.(project, imageIndex);
                  }
                }}
                role="button"
                tabIndex={0}
              />
            ),
          )}
        </div>
      ) : (
        <div className="project-visual" aria-hidden="true">
          <span>{project.visual}</span>
        </div>
      )}
    </div>
  );
}

function App() {
  const navItems = [
    { id: 'top', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [activeGallery, setActiveGallery] = useState(null);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 16);

      const scrollMarker = window.scrollY + 160;
      let nextActiveSection = 'top';

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && scrollMarker >= section.offsetTop) {
          nextActiveSection = id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        nextActiveSection = 'contact';
      }

      setActiveSection(nextActiveSection);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);
    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', isMobileMenuOpen);

    const handleResize = () => {
      if (window.innerWidth > 760) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      document.body.classList.remove('mobile-menu-open');
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle('gallery-open', Boolean(activeGallery));
    return () => document.body.classList.remove('gallery-open');
  }, [activeGallery]);

  useEffect(() => {
    if (!activeGallery) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveGallery(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGallery]);

  const typingPhrases = [
    'building web apps',
    'building mobile apps',
    'designing clean interfaces',
    'working with databases',
  ];
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[typingIndex];
    const isPhraseComplete = !isDeleting && typedText === currentPhrase;
    const isPhraseCleared = isDeleting && typedText === '';

    const timeout = window.setTimeout(() => {
      if (isPhraseComplete) {
        setIsDeleting(true);
        return;
      }

      if (isPhraseCleared) {
        setIsDeleting(false);
        setTypingIndex((prev) => (prev + 1) % typingPhrases.length);
        return;
      }

      const nextText = isDeleting
        ? currentPhrase.slice(0, typedText.length - 1)
        : currentPhrase.slice(0, typedText.length + 1);

      setTypedText(nextText);
    }, isPhraseComplete ? 1200 : isDeleting ? 45 : 85);

    return () => window.clearTimeout(timeout);
  }, [typedText, typingIndex, isDeleting]);

  const emailHref = profile.email
    ? `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio contact - Vera Vekiou')}`
    : '';

  const contactLinks = [
    profile.email && {
      href: emailHref,
      icon: Mail,
      label: profile.email,
    },
    profile.github && {
      href: profile.github,
      icon: Github,
      label: 'GitHub',
    },
    profile.linkedin && {
      href: profile.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
    },
  ].filter(Boolean);

  return (
    <main>
      <header
        className={`site-header${isScrolled ? ' is-scrolled' : ''}${
          isMobileMenuOpen ? ' is-menu-open' : ''
        }`}
      >
        <a
          className="brand"
          href="#top"
          aria-label="Portfolio home"
          onClick={() => {
            setActiveSection('top');
            setIsMobileMenuOpen(false);
          }}
        >
          <span className="brand-mark brand-word" aria-hidden="true">
            <span className="brand-letter">V</span>
            <span className="brand-expand brand-expand-first">era </span>
            <span className="brand-letter">V</span>
            <span className="brand-expand brand-expand-second">ekiou</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              className={activeSection === item.id ? 'active' : ''}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="nav-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume"
          title="Resume"
        >
          <FileText className="nav-resume-icon" size={18} strokeWidth={2.25} aria-hidden="true" />
          <span>Resume</span>
        </a>

        <button
          className="nav-menu-toggle"
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsMobileMenuOpen((open) => !open);
          }}
        >
          <span className="hamburger-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>

        <nav
          className="mobile-menu-panel"
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
        >
          {navItems.map((item) => (
            <a
              className={activeSection === item.id ? 'active' : ''}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero playful-hero centered-home-hero" id="top">
        <div className="centered-hero-avatar" aria-label="Vera Vekiou portrait">
          <img
            className="avatar home-center-avatar"
            src="/avatar.webp"
            alt="Vera Vekiou portrait"
          />
        </div>

        <div className="hero-copy centered-hero-copy">
          <p className="eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            Junior Software Engineer
          </p>
          <h1 className="hero-title">
            <span className="hero-greeting">HI, MY NAME IS</span>
            <span>VERA VEKIOU</span>
          </h1>

          <p className="hero-typing-line" aria-live="polite">
            <span className="hero-typing-text">{typedText}</span>
            <span className="hero-typing-cursor" aria-hidden="true">_</span>
          </p>

          <a className="hero-scroll-hint" href="#about" aria-label="Scroll to About">
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="section about-section about-editorial-section" id="about">
        <div className="about-role-block">
          <p className="eyebrow">About</p>
          <h2 aria-label="Junior Software Engineer">
            <span>Junior</span>
            <span>Software</span>
            <span>Engineer</span>
          </h2>
        </div>

        <div className="about-motion-line" aria-hidden="true">
          <span className="about-line-dot" />
        </div>

        <div className="about-statement-block">
          <p className="about-location">Based in Greece.</p>
          <p className="about-big-statement">
            I build fast, modern digital products with
            <span> clean UIs</span>, <span>solid back-end logic</span>, and
            <span> real results</span>.
          </p>
          <p className="about-support-text">
            I focus on practical applications that combine clear interfaces,
            structured code, and features that feel useful from the first click.
          </p>
          <div className="about-focus-line" aria-label="Development focus areas">
            <span>Web</span>
            <span>Mobile</span>
            <span>Desktop</span>
            <span>Databases</span>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="projects-heading">
          <p className="eyebrow">Projects</p>
          <h2>From ideas to working products.</h2>
          <span className="projects-heading-line" aria-hidden="true" />
        </div>
        <div className="case-study-stack">
          {projects.map((project, index) => (
            <article className="case-study" key={project.title}>
              <div className="case-study-copy">
                <span className="case-study-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="project-meta">
                  <span>{project.type}</span>
                  {index === 0 && <span>Featured</span>}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div
                  className="highlight-row"
                  aria-label={`${project.title} highlights`}
                >
                  {project.highlights.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="tag-row">
                  {project.stack.slice(0, index === 0 ? 6 : 5).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={16} aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} aria-hidden="true" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="case-study-frame">
                <ProjectMedia
                  project={project}
                  priority={index === 0}
                  onOpenGallery={(selectedProject, imageIndex) =>
                    setActiveGallery({ project: selectedProject, imageIndex })
                  }
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-showcase" id="skills">
        <div className="skills-heading centered">
          <p className="eyebrow">Skills</p>
          <h2>Tech Stack</h2>
          <p className="section-text skills-intro">
            Technologies I use to build clean, functional, and user-focused
            applications.
          </p>
        </div>

        <div className="tech-bubble-grid" aria-label="Tech stack">
          {techStack.map((skill) => (
            <div
              className="tech-bubble"
              key={skill.name}
              style={{ '--float-delay': skill.delay }}
            >
              <div
                className={`tech-circle${skill.logo ? ' has-logo' : ''}`}
                aria-hidden="true"
              >
                {skill.logo && (
                  <img
                    className={`tech-logo-image${
                      skill.contrast ? ' needs-contrast' : ''
                    }`}
                    src={skill.logo}
                    alt=""
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                      event.currentTarget.nextElementSibling.style.display = 'grid';
                    }}
                  />
                )}
                <span className={skill.logo ? 'tech-fallback hidden' : 'tech-fallback'}>
                  {skill.fallback}
                </span>
              </div>
              <span className="tech-label">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section get-in-touch-contact" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-grid-bg" aria-hidden="true" />

        <div className="get-in-touch-copy">
          <p className="get-in-touch-shadow">GET IN</p>
          <h2>
            <span>GET IN</span>
            <strong>TOUCH</strong>
          </h2>
          <p className="get-in-touch-note">Open to opportunities.</p>
        </div>

        {contactLinks.length > 0 && (
          <div className="get-in-touch-socials" aria-label="Contact links">
            <div className="social-orb-row">
              {contactLinks.map((link) => (
                <a
                  className="social-orb"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  key={link.label}
                >
                  <link.icon size={24} aria-hidden="true" />
                  <span className={`social-label${link.label.includes('@') ? ' email-label' : ''}`}>
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
            {profile.email && (
              <a className="get-in-touch-email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            )}
          </div>
        )}
      </section>
      {activeGallery && (
        <ProjectGalleryModal
          project={activeGallery.project}
          activeIndex={activeGallery.imageIndex}
          onSelect={(imageIndex) =>
            setActiveGallery((current) =>
              current ? { ...current, imageIndex } : current,
            )
          }
          onClose={() => setActiveGallery(null)}
        />
      )}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
