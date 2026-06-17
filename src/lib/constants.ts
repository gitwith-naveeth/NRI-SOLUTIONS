import type { NavLink } from '@/types';

export const SITE_NAME = 'NRI Solutions';
export const SITE_TAGLINE = 'Your Trusted Presence in India';
export const SITE_DESCRIPTION = 'Property management, home maintenance, paperwork assistance, and local coordination for NRIs.';
export const SITE_URL = 'https://nrisolutions.in';

export const CONTACT_EMAIL = 'info@nrisolutions.in';
export const CONTACT_PHONE = '+91-XXXX-XXXXXX';
export const WHATSAPP_NUMBER = '+91XXXXXXXXXX';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Property & Land', href: '/services/property-land' },
      { label: 'House Help', href: '/services/house-help' },
      { label: 'Personal Assistance', href: '/services/personal-assistance' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export const COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Singapore',
  'United Arab Emirates',
  'Germany',
  'Netherlands',
  'New Zealand',
  'Other',
];

export const SERVICE_TYPES = [
  'Property Verification',
  'Property Management',
  'Home Maintenance',
  'Legal Documentation',
  'Tenant Management',
  'Elder Care',
  'Government Paperwork',
  'Banking Assistance',
  'Emergency Assistance',
  'Other',
];

export const TIMEZONES = [
  'EST (UTC-5)',
  'CST (UTC-6)',
  'MST (UTC-7)',
  'PST (UTC-8)',
  'GMT (UTC+0)',
  'CET (UTC+1)',
  'GST (UTC+4)',
  'SGT (UTC+8)',
  'AEST (UTC+10)',
  'NZST (UTC+12)',
  'IST (UTC+5:30)',
];
