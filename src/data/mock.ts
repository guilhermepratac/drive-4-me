export type CarsClassesType = typeof CarsClasses[0];

export const CarsClasses = [
  {
    id: 'UberX-123',
    title: 'Motorista',
    multiplier: 1,
    image: require('../../assets/images/cars/UberX.webp'),
  },
];

export type RecentRidesType = typeof RecentRides[0];

export const RecentRides = [
  {
    id: '1',
    title: 'Casa',
    address: 'R. João Caetano, 136 - Encruzilhada, Santos - SP, 11070-311',
    description: 'R. João Caetano, 136 - Encruzilhada, Santos - SP, 11070-311',
    location: {
      lat: -23.961290,
      lng:  -46.347370,
    },
  },
  {
    id: '2',
    title: 'Faculdade',
    address: 'R. Oswaldo Cruz, 277 - Boqueirão, Santos - SP, 11045-907',
    description: 'R. Oswaldo Cruz, 277 - Boqueirão, Santos - SP, 11045-907',
    location: {
      lat: -23.964579,
      lng:  -46.321762,
    },
  },
];
