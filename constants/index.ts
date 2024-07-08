'use client';

import {
  Clapperboard,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
  Grid3X3,
  Bookmark,
  Contact,
} from 'lucide-react';

export const sidebarLinks = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    type: 'Link',
  },
  {
    name: 'Search',
    href: '/search',
    icon: Search,
    type: 'Button',
  },
  {
    name: 'Explore',
    href: '/explore',
    icon: Compass,
    type: 'Link',
  },
  {
    name: 'Reels',
    href: '/reels',
    icon: Clapperboard,
    type: 'Link',
  },
  {
    name: 'Messages',
    href: '/messages',
    icon: MessageCircle,
    type: 'Link',
  },
  {
    name: 'Notifications',
    href: '/notifications',
    icon: Heart,
    type: 'Button',
  },
  {
    name: 'Create',
    href: '/create',
    icon: PlusSquare,
    type: 'Link',
  },
];

export const profileTabs = [
  {
    title: "Posts",
    href: "",
    Icon: Grid3X3,
  },
  {
    title: "Reels",
    href: "reels",
    Icon: Clapperboard,
  },
  {
    title: "Saved",
    href: "saved",
    Icon: Bookmark,
  },
  {
    title: "Tagged",
    href: "tagged",
    Icon: Contact,
  },
];

export const settingTabs = [
  { title: "Edit profile", value: "edit-profile" },
  { title: "Professional account", value: "professional-account" },
  { title: "Notifications", value: "notifications" },
  { title: "Privacy and security", value: "privacy-and-security" },
  { title: "Login activity", value: "login-activity" },
  { title: "Emails from Instagram", value: "emails-from-instagram" },
];
