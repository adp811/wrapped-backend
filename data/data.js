export const data = [
  {
    users: [
      {
        userID: 0,
        userFirstName: 'John',
        userLastName: 'Doe',
        userEmail: 'johndoe@email.com',
        userPassword: 'password123',
        userDOB: '1-01-2000',
        annualIncome: 50000,

        accounts: [
          {
            accountId: 0,
            accountType: 'Capital One QuickSilver',

            transactions: [
              {
                id: 0,
                amount: 19.03,
                date: '02-17-2021',
                category: 'Food',
                location: 'Chipotle',
              },
              {
                id: 1,
                amount: 54.01,
                date: '02-18-2021',
                category: 'Gas',
                location: 'Shell',
              },
              {
                id: 2,
                amount: 80.52,
                date: '2-20-2021',
                category: 'Shopping',
                location: 'Target',
              },
            ],
          },

          {
            accountId: 1,
            accountType: 'Capital One 360 Checking',

            transactions: [
              {
                id: 0,
                amount: 30.99,
                date: '6-12-2021',
                category: 'Shopping',
                location: 'Amazon',
              },
              {
                id: 1,
                amount: 1023.43,
                date: '7-12-2021',
                category: 'Housing',
                location: 'N/A',
              },
              {
                id: 2,
                amount: 1027.43,
                date: '8-21-2021',
                category: 'Utilities',
                location: 'N/A',
              },
            ],
          },
        ],
      },

      {
        userID: 1,
        userFirstName: 'Jane',
        userLastName: 'Doe',
        userEmail: 'janedoe@email.com',
        userPassword: 'password123',
        userDOB: '06-01-2000',
        annualIncome: 100000,

        accounts: [
          {
            accountId: 0,
            accountType: 'Credit Card',

            transactions: [
              {
                id: '',
                amount: '',
                date: '',
                category: '',
              },
              {
                id: '',
                amount: '',
                date: '',
                category: '',
              },
              {
                id: '',
                amount: '',
                date: '',
                category: '',
              },
            ],
          },

          {
            accountId: 1,
            accountType: 'Debit Card',

            transactions: [
              {
                id: '',
                amount: '',
                date: '',
                category: '',
              },
              {
                id: '',
                amount: '',
                date: '',
                category: '',
              },
              {
                id: '',
                amount: '',
                date: '',
                category: '',
              },
            ],
          },
        ],
      },
    ],
  },
];
