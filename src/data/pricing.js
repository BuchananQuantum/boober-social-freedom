import freeIcon from 'assets/img/icons/free.svg';
import proIcon from 'assets/img/icons/pro.svg';

export const pricingData = [
  {
    id: 0,
    title: 'Single',
    subTitle: 'For teams that need to create project plans with confidence.',
    price: 0,
    url: '/e-commerce/billing',
    buttonText: 'Boober Free Trial',
    isFeatured: false,
    featureTitle: 'Track team projects with free:',
    features: [
      { id: 1, title: 'Free Trial Item' },
      { id: 2, title: 'Free Trial Item' },
      { id: 3, title: 'Free Trial Item' },
      { id: 4, title: 'Free Trial Item' },
      { id: 5, title: 'Free Trial Item' }
    ]
  },
  {
    id: 1,
    title: 'Business',
    subTitle:
      'For teams and companies that need to manage work across initiatives.',
    price: 39,
    url: '/e-commerce/billing',
    buttonText: 'Get Business',
    isFeatured: true,
    featureTitle: 'Everything in Premium, plus:',
    features: [
      { id: 1, title: 'Portfolios / Profile' },
      { id: 2, title: 'Custom fields' },
      { id: 3, title: 'Onboarding plan' },
      { id: 4, title: 'Resource Management' },
      { id: 5, title: 'On-Site Marketing' }
    ]
  },
  {
    id: 2,
    title: 'Professional',
    subTitle: 'For Established Professionals.',
    price: 99,
    url: '/e-commerce/billing',
    buttonText: 'Purchase',
    isFeatured: false,
    featureTitle: 'Everything in Business, plus:',
    features: [
      { id: 1, title: 'Geo-Code Purchasing' },
      { id: 2, title: 'Tags', tag: { label: 'Coming soon', type: 'primary' } },
      { id: 3, title: 'Team Leader Roles' },
      { id: 4, title: 'Search Engine Structuring' }
    ]
  }
];

export const pricingAltData = [
  {
    id: 0,
    title: 'Free',
    price: 0,
    period: 'm',
    icon: freeIcon,
    url: '#!',
    buttonText: 'Start free Boober trial',
    isFeatured: false,
    features: [
      { id: 0, title: 'View Broadcasts', isActive: true },
      { id: 1, title: 'Messaging', isActive: true },
      { id: 2, title: 'Subscriptions', isActive: true },
      { id: 3, title: 'Subscribed News Feed', isActive: true },
      { id: 4, title: 'Integrations with WhatsApp', isActive: false },
      { id: 5, title: 'Payment Credits ', isActive: false },
      { id: 6, title: 'Unlimted Follows', isActive: false },
      { id: 7, title: 'Unlimited Searches', isActive: false }
    ]
  },
  {
    id: 1,
    title: 'Pro',
    price: 99,
    period: 'm',
    icon: proIcon,
    url: '#!',
    buttonText: 'Purchase Now',
    isFeatured: true,
    features: [
      { id: 0, title: 'Unlimited Broadcast views', isActive: true },
      { id: 1, title: 'Unlimited Messaging', isActive: true },
      { id: 2, title: 'Advanced Searching', isActive: true },
      { id: 3, title: 'Best of the Week News', isActive: true },
      { id: 4, title: 'Integrations with OnlyFans', isActive: true },
      { id: 5, title: 'Payments', isActive: true },
      { id: 6, title: 'Unlimted Subscriptions', isActive: true },
      { id: 7, title: 'Unlimited Video Calling', isActive: true }
    ]
  }
];
