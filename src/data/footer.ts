import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { SocialLink, ContactInfo } from '../types';

export const socialLinks: SocialLink[] = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Facebook, label: "Facebook" }
];

export const contactInfo: ContactInfo[] = [
  { icon: Mail, text: "hello@gostylist.com" },
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: MapPin, text: "San Francisco, CA" }
];

export const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Cookie Policy" },
  { href: "#", label: "GDPR Compliance" }
];