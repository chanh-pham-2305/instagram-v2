'use client';

import {
  Clapperboard,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
} from 'lucide-react';

export const sidebarLinks = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
  },
  {
    name: 'Search',
    href: '/search',
    icon: Search,
    hideOnMobile: true,
  },
  {
    name: 'Explore',
    href: '/explore',
    icon: Compass,
  },
  {
    name: 'Reels',
    href: '/reels',
    icon: Clapperboard,
  },
  {
    name: 'Messages',
    href: '/messages',
    icon: MessageCircle,
  },
  {
    name: 'Notifications',
    href: '/notifications',
    icon: Heart,
    hideOnMobile: true,
  },
  {
    name: 'Create',
    href: '/create',
    icon: PlusSquare,
  },
];
