export default [
  {
    id: 1,
    rentier: {
      firstName: 'Jan',
      lastName: '',
    },
    timing: {
      start: '10:00',
      expectedDuration: 1,
      actualDuration: 1.2,
    },
    equipment: {
      type: 'kayak',
      amount: 1,
      vests: 2,
      paddles: 2,
    },
    payment: {
      fee: 20,
      paid: 20,
      toPay: 0,
    },
    comment: '',
  },
  {
    id: 2,
    rentier: {
      firstName: 'Jonathan',
      lastName: 'Dlugonazwiskowy',
    },
    timing: {
      start: '10:05',
      expectedDuration: 1,
      actualDuration: 1.2,
    },
    equipment: {
      type: 'waterbike',
      amount: 1,
      vests: 4,
      paddles: 0,
    },
    payment: {
      fee: 25,
      paid: 0,
      toPay: 25,
    },
    comment: '',
  },
  {
    id: 3,
    rentier: {
      firstName: 'Jan-Jonathan',
      lastName: 'Woreczko Dlugonazwiskowy',
    },
    timing: {
      start: '11:05',
      expectedDuration: 1,
      actualDuration: 2,
    },
    equipment: {
      type: 'rowboat',
      amount: 1,
      vests: 2,
      paddles: 2,
    },
    payment: {
      fee: 30,
      paid: 30,
      toPay: 30,
    },
    comment: 'Wędkarze',
  },
];
