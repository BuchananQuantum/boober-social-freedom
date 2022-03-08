export const accountInfo = [
  {
    id: 1,
    label: 'ID',
    value: 'dcfasyo_Dfdjl',
    active: true
  },
  {
    id: 2,
    label: 'Created',
    value: '2022/03/07 23:13',
    active: true
  },
  {
    id: 3,
    label: 'Email',
    value: 'tony@gmail.com',
    active: true,
    email: true
  },
  {
    id: 4,
    label: 'Description',
    value: 'No Description',
    active: false
  },
  {
    id: 5,
    label: 'VAT number',
    value: 'No VAT number',
    active: false
  }
];

export const billingInfo = [
  {
    id: 1,
    label: 'Send email to',
    value: 'tony@gmail.com',
    active: true,
    email: true
  },
  {
    id: 2,
    label: 'Address',
    value: `39 Burgee Drive. <br />
            Tuckekerton, NJ 08087`,
    active: true
  },
  {
    id: 3,
    label: 'Phone number',
    value: '+1-302-464-8832',
    active: true,
    phone: true
  },
  {
    id: 4,
    label: 'Invoice prefix',
    value: '7C23435',
    active: true,
    important: true
  }
];

export const logs = [
  {
    id: 1,
    status: 200,
    error: false,
    reqType: 'POST',
    path: '/v1/invoiceitems',
    date: '2019/02/23',
    time: '15:29:45'
  },
  {
    id: 2,
    status: 400,
    error: true,
    reqType: 'POST',
    path: '/v1/invoiceitems',
    date: '2019/02/19',
    time: '21:32:12'
  },
  {
    id: 3,
    status: 200,
    error: false,
    reqType: 'POST',
    path: '/v1/invoices/in_1Dnkhadfk',
    date: '2019/02/26',
    time: '12:23:43'
  },
  {
    id: 4,
    status: 200,
    error: false,
    reqType: 'POST',
    path: '/v1/invoices/in_1Dnkhadfk',
    date: '2019/02/12',
    time: '23:32:12'
  },
  {
    id: 5,
    status: 404,
    error: true,
    reqType: 'POST',
    path: '/v1/invoices/in_1Dnkhadfk',
    date: '2019/02/08',
    time: '02:20:23'
  },
  {
    id: 6,
    status: 200,
    error: false,
    reqType: 'POST',
    path: '/v1/invoices/in_1Dnkhadfk',
    date: '2019/02/01',
    time: '12:29:34'
  }
];
