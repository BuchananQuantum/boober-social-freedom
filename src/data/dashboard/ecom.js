import product1 from 'assets/img/products/ecommerce/1.jpg';
import product2 from 'assets/img/products/ecommerce/2.jpg';
import product3 from 'assets/img/products/ecommerce/3.jpg';
import product4 from 'assets/img/products/ecommerce/4.jpg';
import product5 from 'assets/img/products/ecommerce/5.jpg';
import product6 from 'assets/img/products/ecommerce/6.jpg';
import product7 from 'assets/img/products/ecommerce/7.jpg';

export const notifications = [
  {
    id: 1,
    title: '<strong>5 products</strong> didn’t publish to your Facebook page',
    linkFor: 'products',
    type: 'warning'
  },
  {
    id: 2,
    title: '<strong>7 orders</strong> have payments that need to be captured',
    linkFor: 'payments'
  },
  {
    id: 3,
    title: '<strong>50+ orders</strong> need to be fulfilled',
    linkFor: 'orders'
  }
];

export const saleItems = [
  {
    title: 'Hoe on Hoes',
    amount: '15,450',
    subAmount: '13,675',
    type: 'standard',
    percent: 21.8,
    className: 'border-200 border-bottom border-end pb-4'
  },
  {
    title: 'Items sold',
    amount: '1,054',
    subAmount: '13,675',
    type: 'warning',
    percent: 21.8,
    className: 'border-200 border-md-200 border-bottom border-md-end pb-4 ps-3'
  },
  {
    title: 'Refunds',
    amount: '$145.65',
    subAmount: '13,675 ',
    type: 'up',
    percent: 21.8,
    className:
      'border-200 border-bottom border-end border-md-end-0 pb-4 pt-4 pt-md-0 ps-md-3'
  },
  {
    title: 'Gross sale',
    amount: '$100.26',
    subAmount: '$109.65 ',
    type: 'down',
    percent: 21.8,
    className:
      'border-200 border-md-200 border-bottom border-md-bottom-0 border-md-end pt-4 pb-md-0 ps-3 ps-md-0'
  },
  {
    title: 'Shipping',
    amount: '$365.53',
    subAmount: '13,675 ',
    type: 'up',
    percent: 21.8,
    className: 'border-200 border-md-bottom-0 border-end pt-4 pb-md-0 ps-md-3'
  },
  {
    title: 'Processing',
    amount: '861',
    subAmount: '13,675 ',
    type: 'pending',
    percent: 21.8,
    className: 'pb-0 pt-4 ps-3'
  }
];

export const totalSale = {
  lastMonth: [50, 80, 60, 80, 65, 90, 130, 90, 30, 40, 30, 70],
  previousYear: [110, 30, 40, 50, 80, 70, 50, 40, 110, 90, 60, 60]
};

export const topProducts = [
  ['Invoices', '2020', '2021'],
  ['Are Due', 43, 85],
  ['Upon receit', 83, 73],
  ['Not 30 days', 86, 62],
  ['After receit', 72, 53],
  ['Joke on Joel', 80, 50],
  ['Im on of the', 50, 70],
  ['Biggest Sub-Contractord', 80, 90]
];

const recentPurchaseTableBadge = [
  { content: 'Success', type: 'success', icon: 'check' },
  { content: 'Blocked', type: 'secondary', icon: 'ban' },
  { content: 'Pending', type: 'warning', icon: 'stream' }
];
export const recentPurchaseTableData = [
  {
    customer: 'Sylvia Plath',
    email: 'buchananquantum@outlook.com',
    product: 'Corner Girls',
    status: recentPurchaseTableBadge[0],
    amount: '$99'
  },
  {
    customer: 'Homer',
    email: 'buchananquantum@outlook.com',
    product: 'Geo-Code Purchasing',
    status: recentPurchaseTableBadge[0],
    amount: '$634'
  },
  {
    customer: 'Edgar Allan Poe',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[1],
    amount: '$199'
  },
  {
    customer: 'William Butler Yeats',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[0],
    amount: '$798'
  },
  {
    customer: 'Rabindranath Tagore',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing"',
    status: recentPurchaseTableBadge[1],
    amount: '$318'
  },
  {
    customer: 'Emily Dickinson',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[2],
    amount: '$11'
  },
  {
    customer: 'Giovanni Boccaccio',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[0],
    amount: '$31'
  },
  {
    customer: 'Oscar Wilde',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[0],
    amount: '$43'
  },
  {
    customer: 'John Doe',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[0],
    amount: '$57'
  },
  {
    customer: 'Emma Watson',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[1],
    amount: '$999'
  },
  {
    customer: 'Sylvia Plath',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[2],
    amount: '$199'
  },
  {
    customer: 'Rabindranath Tagore',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[1],
    amount: '$999'
  },
  {
    customer: 'Anila Wilde',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[2],
    amount: '$199'
  },
  {
    customer: 'Jack Watson ',
    email: 'buchananquantum@outlook.com',
    product: 'Personal Listing',
    status: recentPurchaseTableBadge[1],
    amount: '$999'
  }
];

export const marketShare = [
  { id: 1, value: 53000000, name: 'John', color: 'primary' },
  { id: 2, value: 19000000, name: 'Tony', color: 'info' },
  { id: 3, value: 20000000, name: 'Joel', color: 'warning' }
];

export const totalOrder = [110, 100, 250, 210, 530, 480, 320, 325];

export const shoppingCartItems = [
  {
    id: 1,
    title: 'Initiated',
    amount: 43.6,
    barWidth: 50,
    items: ' Session: <span class ="text-600">6817</span> ',
    variant: 'primary',
    iconColor: 'success',
    icon: 'caret-up'
  },
  {
    id: 2,
    title: 'Abandonment rate',
    amount: 13.11,
    barWidth: 25,
    items: '<span class ="text-600">44</span>  of 61',
    variant: 'danger',
    iconColor: 'danger',
    icon: 'caret-up'
  },
  {
    id: 3,
    title: 'Bounce rate',
    amount: 12.11,
    barWidth: 35,
    items: '<span class ="text-600">8</span>  of 61',
    variant: 'primary',
    iconColor: 'success',
    icon: 'caret-up'
  },
  {
    id: 4,
    title: 'Completion rate',
    amount: 43.6,
    barWidth: 43,
    items: '<span class ="text-600">18</span>  of 179',
    variant: 'primary',
    iconColor: 'danger',
    icon: 'caret-down'
  },
  {
    id: 5,
    title: 'Revenue Rate',
    amount: 60.5,
    barWidth: 60,
    items: '<span class ="text-600">18</span>  of 179',
    variant: 'primary',
    iconColor: 'success',
    icon: 'caret-up'
  }
];

export const returningCustomerData = {
  newData: [
    [20, 40, 20, 80, 50, 80, 120, 80, 50, 120, 110, 110],
    [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70],
    [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50],
    [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60],
    [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80],
    [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50],
    [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70],
    [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50],
    [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110],
    [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70],
    [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110],
    [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70]
  ],
  returningData: [
    [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70],
    [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50],
    [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60],
    [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80],
    [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50],
    [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70],
    [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50],
    [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110],
    [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70],
    [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110],
    [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70],
    [20, 40, 20, 80, 50, 80, 120, 80, 50, 120, 110, 110]
  ]
};

export const products = [
  {
    id: 1,
    img: product1,
    title: 'Pimp Hand Strong',
    type: 'Pimping',
    unit: 19,
    price: 69
  },
  {
    id: 2,
    img: product2,
    title: 'Area Code Hoes',
    type: 'Geo-Codes',
    unit: 19,
    price: 69
  },
  {
    id: 3,
    img: product3,
    title: 'Pay your Bills On Time',
    type: 'SmartContract',
    unit: 16,
    price: 34
  },
  {
    id: 4,
    img: product4,
    title: 'Off-Contract Development',
    type: 'Shoes',
    unit: 11,
    price: 250
  },
  {
    id: 5,
    img: product5,
    title: 'Worst Client Ever',
    type: 'Pita',
    unit: 10,
    price: 24
  },
  {
    id: 6,
    img: product6,
    title: 'Not Fried Chicken',
    type: 'NFC',
    unit: 10,
    price: 24
  },

  {
    id: 7,
    img: product7,
    title: 'Tony Tank Tony',
    type: 'TheMan',
    unit: 15,
    price: 24
  }
];
