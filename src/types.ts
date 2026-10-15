export interface ApplianceType {
  id: string;
  name: string;
  category: 'Laundry' | 'Refrigeration' | 'Cooking' | 'Dishwashers' | 'AC' | 'Small Appliances';
  icon: string;
  commonIssues: string[];
  basePriceAED: number;
  estRepairTimeMin: number;
  description: string;
}

export interface SymptomOption {
  id: string;
  label: string;
  severity: 'low' | 'medium' | 'high' | 'emergency';
  estCostRange: string;
}

export interface DubaiArea {
  id: string;
  name: string;
  zone: string;
  activeTechnicians: number;
  estArrivalMin: number;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Laundry' | 'Refrigeration' | 'Cooking' | 'Dishwashers' | 'AC' | 'All';
  description: string;
  issuesSolved: string[];
  features: string[];
  pricingStartingAED: number;
  warrantyPeriod: string;
  responseTime: string;
  badge?: string;
  image: string;
}

export interface TestimonialReview {
  id: string;
  author: string;
  area: string;
  appliance: string;
  rating: number;
  reviewDate: string;
  text: string;
  verified: boolean;
  avatarText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface BrandItem {
  name: string;
  logoText: string;
  tagline: string;
}
