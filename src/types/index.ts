export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  useCases: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  services: Service[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  country: string;
  quote: string;
  rating: number;
  avatar: string;
  service: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  highlighted: boolean;
  ctaText: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  serviceType: string;
  message: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  serviceInterest: string;
  notes: string;
}

export interface ServiceRequest {
  id: string;
  title: string;
  serviceType: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
  description: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
  category: string;
}

export interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  timestamp: string;
  read: boolean;
  priority: 'normal' | 'high';
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
