import type {
  ServiceCategory,
  Testimonial,
  PricingTier,
  TeamMember,
  FAQ,
  ProcessStep,
  TrustStat,
  ServiceRequest,
  Document,
  Message,
} from '@/types';

// ─── Trust Stats ─────────────────────────────────────────────
export const trustStats: TrustStat[] = [
  { value: '500+', label: 'NRIs Served' },
  { value: '15+', label: 'Cities Covered' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support Available' },
];

// ─── Process Steps ───────────────────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Tell Us What You Need',
    description: 'Share your requirements via call, WhatsApp, or our online form. We listen carefully to understand your situation.',
    icon: 'MessageSquare',
  },
  {
    step: 2,
    title: 'We Assess & Plan',
    description: 'Our team evaluates your needs and creates a detailed action plan with timelines and cost estimates.',
    icon: 'ClipboardCheck',
  },
  {
    step: 3,
    title: 'We Execute On-Ground',
    description: 'Verified professionals handle everything locally — from site visits to paperwork to coordination.',
    icon: 'UserCheck',
  },
  {
    step: 4,
    title: 'You Stay Updated',
    description: 'Receive real-time updates with photos, documents, and detailed reports at every stage.',
    icon: 'Bell',
  },
];

// ─── Service Categories ──────────────────────────────────────
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'property-land',
    title: 'Property & Land Services',
    description: 'Complete property management, verification, and legal assistance for your real estate assets in India.',
    icon: 'Building2',
    slug: 'property-land',
    services: [
      {
        id: 'property-verification',
        title: 'Property Verification',
        description: 'Comprehensive verification of property documents, ownership records, and legal clearances before purchase or sale.',
        icon: 'FileSearch',
        benefits: [
          'Prevent fraud with thorough document verification',
          'Get detailed reports with photographic evidence',
          'Expert legal review of all property documents',
        ],
        useCases: [
          'Planning to buy property in India while living abroad',
          'Inherited property that needs verification of ownership',
        ],
      },
      {
        id: 'encroachment-checks',
        title: 'Encroachment Checks',
        description: 'Physical site visits and survey verification to ensure your property boundaries are intact and free from encroachment.',
        icon: 'MapPin',
        benefits: [
          'Regular physical inspections of your property',
          'Boundary verification with official survey records',
          'Legal action support if encroachment is detected',
        ],
        useCases: [
          'Vacant land that hasn\'t been visited in years',
          'Reports from neighbors about boundary disputes',
        ],
      },
      {
        id: 'legal-document-verification',
        title: 'Legal Document Verification',
        description: 'End-to-end verification of sale deeds, title documents, encumbrance certificates, and other legal paperwork.',
        icon: 'Scale',
        benefits: [
          'Certified verification by experienced legal professionals',
          'Digital copies of all verified documents',
          'Complete chain of title verification',
        ],
        useCases: [
          'Preparing property for sale and need updated documentation',
          'Resolving property disputes requiring verified legal documents',
        ],
      },
      {
        id: 'registration-assistance',
        title: 'Registration Assistance',
        description: 'Complete assistance with property registration, stamp duty payment, and sub-registrar office coordination.',
        icon: 'FileCheck',
        benefits: [
          'End-to-end registration support without your presence',
          'Proper stamp duty calculation and payment',
          'Digital copies of registered documents delivered to you',
        ],
        useCases: [
          'Purchasing property and unable to travel for registration',
          'Transferring property ownership to family members',
        ],
      },
      {
        id: 'property-management',
        title: 'Property Management',
        description: 'Ongoing management of your property including maintenance, security, and regular inspections.',
        icon: 'Home',
        benefits: [
          'Monthly property condition reports with photos',
          'Coordination with local maintenance staff',
          'Emergency response for property issues',
        ],
        useCases: [
          'Owning a vacant property in India that needs regular upkeep',
          'Managing rental property from abroad',
        ],
      },
      {
        id: 'tenant-management',
        title: 'Tenant Management',
        description: 'Complete tenant lifecycle management from finding tenants to lease agreements to rent collection.',
        icon: 'Users',
        benefits: [
          'Verified tenant screening and background checks',
          'Legal lease agreement preparation',
          'Monthly rent collection and deposit management',
        ],
        useCases: [
          'Renting out property while living abroad',
          'Dealing with tenant disputes or lease renewals',
        ],
      },
      {
        id: 'property-sale',
        title: 'Property Sale Assistance',
        description: 'End-to-end support for selling your property including valuation, marketing, buyer screening, and registration.',
        icon: 'TrendingUp',
        benefits: [
          'Professional property valuation and pricing strategy',
          'Buyer screening and negotiation support',
          'Complete sale documentation and registration',
        ],
        useCases: [
          'Wanting to sell inherited property in India',
          'Liquidating property assets from abroad',
        ],
      },
    ],
  },
  {
    id: 'house-help',
    title: 'House Help Services',
    description: 'Professional home maintenance, cleaning, repair, and inspection services for your Indian residence.',
    icon: 'Wrench',
    slug: 'house-help',
    services: [
      {
        id: 'cleaning',
        title: 'Regular Cleaning',
        description: 'Scheduled cleaning services for your home including dusting, mopping, bathroom cleaning, and kitchen maintenance.',
        icon: 'Sparkles',
        benefits: [
          'Vetted and verified cleaning professionals',
          'Flexible scheduling — weekly, bi-weekly, or monthly',
          'Before and after photo reports',
        ],
        useCases: [
          'Maintaining a home in India while living abroad',
          'Preparing your home before a visit to India',
        ],
      },
      {
        id: 'deep-cleaning',
        title: 'Deep Cleaning',
        description: 'Thorough deep cleaning service covering every corner of your home, ideal for seasonal maintenance.',
        icon: 'Brush',
        benefits: [
          'Comprehensive cleaning of all rooms and surfaces',
          'Specialized equipment for deep sanitization',
          'Detailed completion report with photos',
        ],
        useCases: [
          'Annual maintenance of your Indian home',
          'Post-renovation or post-tenant cleaning',
        ],
      },
      {
        id: 'repairs',
        title: 'Home Repairs',
        description: 'Professional repair services for plumbing, electrical, carpentry, and general maintenance needs.',
        icon: 'Hammer',
        benefits: [
          'Skilled and vetted repair professionals',
          'Transparent cost estimates before work begins',
          'Photo and video documentation of repairs',
        ],
        useCases: [
          'Leaking taps, electrical faults, or broken fixtures',
          'Aging home requiring periodic repairs',
        ],
      },
      {
        id: 'maintenance',
        title: 'Preventive Maintenance',
        description: 'Regular maintenance schedules to prevent costly repairs — HVAC, plumbing checks, pest control, and more.',
        icon: 'Settings',
        benefits: [
          'Prevent expensive emergency repairs',
          'Scheduled maintenance calendar tailored to your home',
          'Monthly condition reports',
        ],
        useCases: [
          'Homes that have been locked up for extended periods',
          'Properties in humid or extreme weather regions',
        ],
      },
      {
        id: 'gardening',
        title: 'Gardening & Landscaping',
        description: 'Professional garden maintenance including lawn care, pruning, planting, and landscape upkeep.',
        icon: 'TreePine',
        benefits: [
          'Regular garden maintenance schedules',
          'Seasonal planting and landscape design',
          'Photo updates of your garden',
        ],
        useCases: [
          'Maintaining a garden at your Indian home',
          'Preparing outdoor spaces for family events',
        ],
      },
      {
        id: 'security-inspections',
        title: 'Security Inspections',
        description: 'Regular security audits of your property — locks, CCTV, alarm systems, and vulnerability assessments.',
        icon: 'Shield',
        benefits: [
          'Comprehensive security assessment report',
          'Recommendations for security improvements',
          'Coordination with security service providers',
        ],
        useCases: [
          'Vacant homes needing security verification',
          'After a break-in or security concern',
        ],
      },
      {
        id: 'utility-management',
        title: 'Utility Bill Management',
        description: 'Complete management of electricity, water, gas, internet, and property tax payments for your Indian home.',
        icon: 'Zap',
        benefits: [
          'Never miss a utility payment deadline',
          'Digital copies of all payment receipts',
          'Dispute resolution with utility providers',
        ],
        useCases: [
          'Managing utility bills from abroad',
          'Preventing service disconnections on vacant properties',
        ],
      },
      {
        id: 'house-inspections',
        title: 'House Inspections',
        description: 'Detailed property inspections with comprehensive reports covering structural integrity, fixtures, and systems.',
        icon: 'Eye',
        benefits: [
          'Thorough room-by-room inspection',
          'Detailed photo and video documentation',
          'Actionable recommendations for improvements',
        ],
        useCases: [
          'Before buying or renting a property',
          'Annual check on your Indian property',
        ],
      },
    ],
  },
  {
    id: 'personal-assistance',
    title: 'Personal Assistance Services',
    description: 'On-ground personal representation for government work, banking, elder care, and local coordination.',
    icon: 'HeartHandshake',
    slug: 'personal-assistance',
    services: [
      {
        id: 'government-paperwork',
        title: 'Government Paperwork',
        description: 'Assistance with government documentation — Aadhaar, PAN, passport, driving license, and other official paperwork.',
        icon: 'FileText',
        benefits: [
          'Navigate complex government procedures hassle-free',
          'Appointment booking and queue management',
          'Digital copies of all completed documents',
        ],
        useCases: [
          'Renewing Indian passport or other government IDs',
          'Applying for certificates or clearances from India',
        ],
      },
      {
        id: 'banking-support',
        title: 'Banking Support',
        description: 'Assistance with NRE/NRO account management, fixed deposits, KYC updates, and bank-related paperwork.',
        icon: 'Landmark',
        benefits: [
          'Bank visit representation on your behalf',
          'KYC documentation and submission',
          'Account-related issue resolution',
        ],
        useCases: [
          'Updating KYC for Indian bank accounts',
          'Resolving dormant account issues',
        ],
      },
      {
        id: 'local-representation',
        title: 'Local Representation',
        description: 'Act as your trusted local representative for meetings, inspections, court appearances, and official proceedings.',
        icon: 'UserCheck',
        benefits: [
          'Professional representation with proper authorization',
          'Detailed meeting notes and outcome reports',
          'Ongoing coordination with local stakeholders',
        ],
        useCases: [
          'Court hearings or legal proceedings requiring presence',
          'Meetings with builders, contractors, or government officials',
        ],
      },
      {
        id: 'courier-handling',
        title: 'Courier & Document Handling',
        description: 'Secure collection, verification, and dispatch of important documents and parcels within India and internationally.',
        icon: 'Package',
        benefits: [
          'Secure handling with chain-of-custody tracking',
          'International courier coordination',
          'Digital copies before physical dispatch',
        ],
        useCases: [
          'Sending original documents from India to abroad',
          'Collecting documents from various offices',
        ],
      },
      {
        id: 'elder-care',
        title: 'Elder Care Coordination',
        description: 'Comprehensive coordination for elderly parents — medical appointments, daily check-ins, emergency response.',
        icon: 'Heart',
        benefits: [
          'Regular wellness check-ins and reports',
          'Medical appointment scheduling and accompaniment',
          '24/7 emergency response coordination',
        ],
        useCases: [
          'Elderly parents living alone in India',
          'Coordinating medical care for aging parents',
        ],
      },
      {
        id: 'emergency-assistance',
        title: 'Emergency Assistance',
        description: '24/7 emergency response for urgent situations — medical emergencies, property damage, legal issues.',
        icon: 'Siren',
        benefits: [
          'Round-the-clock emergency response team',
          'Immediate on-ground assessment and action',
          'Real-time updates until resolution',
        ],
        useCases: [
          'Medical emergency involving family in India',
          'Property damage due to natural disaster or accident',
        ],
      },
      {
        id: 'travel-support',
        title: 'Travel-Related Support',
        description: 'Assistance with travel arrangements, airport pickups, hotel bookings, and local transportation during your India visits.',
        icon: 'Plane',
        benefits: [
          'Seamless travel coordination for India visits',
          'Airport pickup and local transportation',
          'Help with hotel bookings and event arrangements',
        ],
        useCases: [
          'Planning a trip to India and need local coordination',
          'Arranging family events or functions in India',
        ],
      },
    ],
  },
];

// ─── Testimonials ────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    role: 'Software Engineer',
    location: 'San Francisco',
    country: 'USA',
    quote: 'NRI Solutions saved me from a property fraud. Their verification team discovered discrepancies in the title deed that my lawyer in India missed. The detailed report with photographic evidence was incredibly thorough. I can\'t imagine managing property in India without them.',
    rating: 5,
    avatar: '/images/avatars/avatar-1.jpg',
    service: 'Property Verification',
  },
  {
    id: '2',
    name: 'Priya Nair',
    role: 'Consultant Physician',
    location: 'London',
    country: 'UK',
    quote: 'My parents are in their 80s in Kerala, and I was constantly worried about their wellbeing. NRI Solutions provides regular check-ins, coordinates their medical appointments, and gives me detailed updates. It\'s like having a caring family member on the ground.',
    rating: 5,
    avatar: '/images/avatars/avatar-2.jpg',
    service: 'Elder Care Coordination',
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Business Owner',
    location: 'Dubai',
    country: 'UAE',
    quote: 'Managing three rental properties in Ahmedabad was a nightmare until I found NRI Solutions. They handle everything — from tenant screening to rent collection to maintenance. Their monthly reports are detailed and the team is incredibly responsive on WhatsApp.',
    rating: 5,
    avatar: '/images/avatars/avatar-3.jpg',
    service: 'Tenant Management',
  },
  {
    id: '4',
    name: 'Sunita Reddy',
    role: 'IT Project Manager',
    location: 'Sydney',
    country: 'Australia',
    quote: 'I needed someone to manage the deep cleaning and maintenance of our ancestral home in Hyderabad. NRI Solutions not only handled it perfectly but also identified structural issues that needed immediate attention. Their preventive approach has saved us lakhs in potential repair costs.',
    rating: 5,
    avatar: '/images/avatars/avatar-4.jpg',
    service: 'Home Maintenance',
  },
  {
    id: '5',
    name: 'Vikram Mehta',
    role: 'Data Scientist',
    location: 'Toronto',
    country: 'Canada',
    quote: 'The government paperwork in India is daunting even when you\'re there. Doing it from Canada seemed impossible until NRI Solutions stepped in. They handled my PAN card renewal, property tax clearance, and even bank KYC updates — all with proper documentation.',
    rating: 5,
    avatar: '/images/avatars/avatar-5.jpg',
    service: 'Government Paperwork',
  },
  {
    id: '6',
    name: 'Lakshmi Iyer',
    role: 'Financial Analyst',
    location: 'Singapore',
    country: 'Singapore',
    quote: 'When my mother had a medical emergency, NRI Solutions was at the hospital within an hour. They coordinated with doctors, managed hospital paperwork, and kept me updated every step of the way. Their emergency response is genuinely 24/7.',
    rating: 5,
    avatar: '/images/avatars/avatar-6.jpg',
    service: 'Emergency Assistance',
  },
];

// ─── Pricing Tiers ───────────────────────────────────────────
export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹2,999',
    period: 'one-time',
    description: 'Perfect for one-time tasks and single service requests.',
    highlighted: false,
    ctaText: 'Get Started',
    features: [
      { text: '1 service request', included: true },
      { text: 'Photo updates & documentation', included: true },
      { text: 'Email support', included: true },
      { text: 'Completion report', included: true },
      { text: 'Video call updates', included: false },
      { text: 'Dedicated representative', included: false },
      { text: 'Priority support', included: false },
      { text: 'Document handling', included: false },
      { text: 'Emergency response', included: false },
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '₹7,999',
    period: '/month',
    description: 'Ideal for ongoing property management and regular assistance.',
    highlighted: true,
    ctaText: 'Most Popular',
    features: [
      { text: 'Up to 5 service requests/month', included: true },
      { text: 'Photo updates & documentation', included: true },
      { text: 'WhatsApp & email support', included: true },
      { text: 'Monthly detailed reports', included: true },
      { text: 'Monthly video call update', included: true },
      { text: 'Priority support', included: true },
      { text: 'Up to 3 document handling/month', included: true },
      { text: 'Dedicated representative', included: false },
      { text: 'Emergency response', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹19,999',
    period: '/month',
    description: 'Complete peace of mind with a dedicated representative.',
    highlighted: false,
    ctaText: 'Go Premium',
    features: [
      { text: 'Unlimited service requests', included: true },
      { text: 'Photo & video documentation', included: true },
      { text: 'WhatsApp, email & phone support', included: true },
      { text: 'Weekly detailed reports', included: true },
      { text: 'Weekly video call updates', included: true },
      { text: 'Priority 24/7 support', included: true },
      { text: 'Unlimited document handling', included: true },
      { text: 'Dedicated representative', included: true },
      { text: '24/7 emergency response', included: true },
    ],
  },
];

// ─── Team Members ────────────────────────────────────────────
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Arjun Krishnamurthy',
    role: 'Founder & CEO',
    bio: 'Former NRI who returned to India after 15 years in the US. Experienced firsthand the challenges NRIs face managing affairs in India.',
    avatar: '/images/team/team-1.jpg',
  },
  {
    id: '2',
    name: 'Meera Desai',
    role: 'Head of Operations',
    bio: '12+ years in property management and real estate. Oversees all on-ground service delivery across 15+ cities.',
    avatar: '/images/team/team-2.jpg',
  },
  {
    id: '3',
    name: 'Ravi Shankar',
    role: 'Legal Advisor',
    bio: 'Practicing advocate with 20 years of experience in property law. Specializes in NRI property transactions and disputes.',
    avatar: '/images/team/team-3.jpg',
  },
  {
    id: '4',
    name: 'Anita Gupta',
    role: 'Client Relations Manager',
    bio: 'Passionate about client satisfaction. Ensures every NRI gets personalized attention and seamless communication.',
    avatar: '/images/team/team-4.jpg',
  },
];

// ─── FAQs ────────────────────────────────────────────────────
export const faqs: FAQ[] = [
  {
    question: 'How does NRI Solutions work?',
    answer: 'Simply tell us what you need through our form, WhatsApp, or phone call. We assess your requirements, create an action plan, execute on-ground with verified professionals, and keep you updated at every step with photos, documents, and reports.',
  },
  {
    question: 'Which cities do you operate in?',
    answer: 'We currently operate in 15+ major cities across India including Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata, Jaipur, Kochi, and more. We are rapidly expanding to tier-2 cities as well.',
  },
  {
    question: 'How do you verify your team members?',
    answer: 'Every team member undergoes a rigorous verification process including Aadhaar verification, police background checks, previous employment verification, and professional reference checks. We also carry professional liability insurance for your protection.',
  },
  {
    question: 'Can I track the progress of my service request?',
    answer: 'Absolutely. You receive real-time updates via WhatsApp, email, or through your client dashboard. We provide photo and video evidence at every stage, so you can see exactly what\'s happening with your request.',
  },
  {
    question: 'What if I need help outside business hours?',
    answer: 'Our Standard and Premium plans include extended support hours. Premium plan members get 24/7 emergency support. For Starter plan users, we respond within 4 business hours to all queries.',
  },
  {
    question: 'Do you handle legal matters?',
    answer: 'We provide legal documentation support and coordinate with verified legal professionals for property-related legal work. For court appearances and complex legal matters, we work with our panel of experienced advocates.',
  },
  {
    question: 'How are your services priced?',
    answer: 'We offer three flexible plans — Starter (one-time tasks), Standard (monthly support), and Premium (dedicated representative). Pricing starts from ₹2,999. Contact us for a custom quote based on your specific needs.',
  },
  {
    question: 'Is my personal information secure?',
    answer: 'We take data security very seriously. All personal information is encrypted, and we follow strict privacy protocols. We never share your information with third parties without your explicit consent.',
  },
];

// ─── Why Choose Us ───────────────────────────────────────────
export const whyChooseUs = [
  {
    title: 'Verified & Trustworthy',
    description: 'Background-checked team with documented processes. Every professional is Aadhaar-verified and reference-checked.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Transparent Communication',
    description: 'Real-time updates with photo evidence, video calls, and detailed reports. You always know what\'s happening.',
    icon: 'Eye',
  },
  {
    title: 'End-to-End Service',
    description: 'From paperwork to property management — one point of contact for all your needs in India.',
    icon: 'Layers',
  },
  {
    title: 'NRI-First Approach',
    description: 'Timezone-friendly support, WhatsApp integration, and digital-first processes designed for NRIs.',
    icon: 'Globe',
  },
];

// ─── Dashboard Mock Data ─────────────────────────────────────
export const mockServiceRequests: ServiceRequest[] = [
  {
    id: 'SR-001',
    title: 'Property Tax Payment — Koramangala Villa',
    serviceType: 'Property Management',
    status: 'completed',
    priority: 'normal',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-18',
    description: 'Annual property tax payment for the Koramangala property. Tax amount: ₹45,000.',
  },
  {
    id: 'SR-002',
    title: 'Tenant Screening — Indiranagar Apartment',
    serviceType: 'Tenant Management',
    status: 'in-progress',
    priority: 'high',
    createdAt: '2024-02-01',
    updatedAt: '2024-02-10',
    description: 'Screen and verify 3 prospective tenants for the 2BHK apartment in Indiranagar.',
  },
  {
    id: 'SR-003',
    title: 'Deep Cleaning — Whitefield House',
    serviceType: 'House Help',
    status: 'pending',
    priority: 'normal',
    createdAt: '2024-02-12',
    updatedAt: '2024-02-12',
    description: 'Complete deep cleaning before family visit in March. Include pest control treatment.',
  },
  {
    id: 'SR-004',
    title: 'Bank KYC Update — SBI Account',
    serviceType: 'Personal Assistance',
    status: 'in-progress',
    priority: 'urgent',
    createdAt: '2024-02-08',
    updatedAt: '2024-02-14',
    description: 'Update KYC documents for NRO account at SBI Jayanagar branch. Documents submitted, awaiting verification.',
  },
];

export const mockDocuments: Document[] = [
  {
    id: 'DOC-001',
    name: 'Property Tax Receipt 2024',
    type: 'PDF',
    size: '245 KB',
    uploadedAt: '2024-01-18',
    category: 'Tax Documents',
  },
  {
    id: 'DOC-002',
    name: 'Tenant Agreement — Indiranagar',
    type: 'PDF',
    size: '1.2 MB',
    uploadedAt: '2024-01-25',
    category: 'Legal Documents',
  },
  {
    id: 'DOC-003',
    name: 'Property Inspection Report — Jan 2024',
    type: 'PDF',
    size: '3.8 MB',
    uploadedAt: '2024-01-30',
    category: 'Reports',
  },
  {
    id: 'DOC-004',
    name: 'Encumbrance Certificate',
    type: 'PDF',
    size: '890 KB',
    uploadedAt: '2024-02-05',
    category: 'Legal Documents',
  },
  {
    id: 'DOC-005',
    name: 'Utility Payment Receipts — Q4 2023',
    type: 'PDF',
    size: '560 KB',
    uploadedAt: '2024-02-10',
    category: 'Bills & Receipts',
  },
];

export const mockMessages: Message[] = [
  {
    id: 'MSG-001',
    sender: 'Meera Desai — Operations',
    subject: 'Tenant Screening Update',
    preview: 'Hi Rajesh, we have completed the background verification for 2 out of 3 prospective tenants. Both candidates look promising...',
    timestamp: '2024-02-14T10:30:00',
    read: false,
    priority: 'high',
  },
  {
    id: 'MSG-002',
    sender: 'Ravi Shankar — Legal',
    subject: 'Property Tax Clearance Confirmed',
    preview: 'Good news! The property tax for your Koramangala villa has been successfully paid. I have attached the receipt...',
    timestamp: '2024-02-13T15:45:00',
    read: true,
    priority: 'normal',
  },
  {
    id: 'MSG-003',
    sender: 'Anita Gupta — Client Relations',
    subject: 'Monthly Service Summary — January 2024',
    preview: 'Please find attached your monthly service summary for January 2024. We completed 3 service requests...',
    timestamp: '2024-02-01T09:00:00',
    read: true,
    priority: 'normal',
  },
  {
    id: 'MSG-004',
    sender: 'Support Team',
    subject: 'KYC Update — Action Required',
    preview: 'The bank has requested additional documents for your KYC update. We need a recent utility bill and your NRI status proof...',
    timestamp: '2024-02-12T14:20:00',
    read: false,
    priority: 'high',
  },
];
