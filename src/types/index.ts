export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}