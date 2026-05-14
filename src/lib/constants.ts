export const SITE_CONFIG = {
  name: 'Paddock',
  description: 'Premium Formula 1 Fan Platform',
  url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  ogImage: '/og.png',
  links: {
    github: 'https://github.com/cerny94/paddock',
    twitter: 'https://twitter.com/paddockf1',
  },
};

export const NAV_LINKS = [
  { href: '/', label: 'Home', icon: 'Home' },
  { href: '/races', label: 'Races', icon: 'Calendar' },
  { href: '/live-timing', label: 'Live', icon: 'Radio' },
  { href: '/drivers', label: 'Drivers', icon: 'Users' },
  { href: '/teams', label: 'Teams', icon: 'Trophy' },
  { href: '/standings', label: 'Standings', icon: 'BarChart3' },
  { href: '/news', label: 'News', icon: 'Newspaper' },
  { href: '/community', label: 'Community', icon: 'MessageSquare' },
];

export const CATEGORIES = [
  { value: 'Transfer', label: '🔄 Transfers' },
  { value: 'Result', label: '🏁 Results' },
  { value: 'Drama', label: '⚡ Drama' },
  { value: 'Technical', label: '🔧 Technical' },
];

export const TIRE_COLORS = {
  soft: '#E8001B',
  medium: '#FFE100',
  hard: '#FFFFFF',
};

export const REACTION_TYPES = [
  { type: 'up', emoji: '👍', label: 'Agree' },
  { type: 'down', emoji: '👎', label: 'Disagree' },
  { type: 'fire', emoji: '🔥', label: 'Hot' },
  { type: 'love', emoji: '❤️', label: 'Love' },
];

export const SESSION_TYPES = ['FP1', 'FP2', 'FP3', 'Sprint', 'Qualifying', 'Race'];

export const PREMIUM_FEATURES = [
  'Ad-free experience',
  'Advanced statistics',
  'Custom notifications',
  'Exclusive interviews',
  'Priority community features',
];
