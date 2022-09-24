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
  },
  {
    id: '2',
    title: 'Faculdade',
    address: 'R. Oswaldo Cruz, 277 - Boqueirão, Santos - SP, 11045-907',
  },
];
