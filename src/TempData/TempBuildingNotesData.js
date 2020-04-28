const Buildings_List = [
  {
    id: 1,
    name: 'Building G',
    images: '',
    notes: [
      {
        id: 1,
        note: 'Buried electrical outlet.',
      },
      {
        id: 2,
        note: 'Sparky fixing non-working outlets by friday 2/28/2020.',
      },
    ],
    floors: [
      {
        id: 1,
        name: '1',
        units: [
          {
            id: 1,
            name: '101',
            notes: 'Broken dishwasher',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Building A',
    images: '',
    notes: [
      {
        id: 1,
        note: 'Buried coax outlet.',
      },
      {
        id: 2,
        note: 'Cable guy fixing non-working outlets by friday 2/28/2020.',
      },
    ],
    floors: [
      {
        id: 1,
        name: '1',
        units: [
          {
            id: 1,
            name: '101',
            notes: 'fan dishwasher',
          },
        ],
      },
    ],
  },
];

export default Buildings_List;
