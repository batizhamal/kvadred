import instance from './instance.ts';

// export interface Company {
//   name: string;
//   price: number;
//   link: string;
//   logo: string;
//   bestIn?: 'rating' | 'deadlines' | 'price';
// }

export interface Company {
  _id: string;
  name: string;
  IGlink: string;
  price: number;
  created_at: string;
  updated_at: string;
  __v: number;
  top: boolean;
  phone: string;
}

export function getBestCompanies(): Promise<Company[]> {
  // return instance()
  //   .get(`/api/companies`)
  //   .then((res) => res.data);

  return new Promise((resolve) => {
    resolve([]);
  });

  // return new Promise((resolve) => {
  //   resolve([
  //     {
  //       name: 'Aberoy',
  //       price: 990500,
  //       link: 'https://aberoy.kz/',
  //       logo: '/aberoy.svg',
  //       bestIn: 'rating',
  //     },
  //     {
  //       name: 'Astana Remont',
  //       price: 1130000,
  //       link: 'https://astanaremont.kz/',
  //       logo: '/astanaremont.png',
  //       bestIn: 'deadlines',
  //     },
  //     {
  //       name: 'UDH',
  //       price: 890500,
  //       link: 'https://www.instagram.com/uidomhome/?hl=en',
  //       logo: '/6773a1a3d57b38aaa3a89166.png',
  //       bestIn: 'price',
  //     },
  //   ]);
  // });
}

export function getCompanies(): Promise<Company[]> {
  return instance()
    .get(`/api/companies`)
    .then((res) => res.data);

  // return new Promise((resolve) => {
  //   resolve([
  //     {
  //       name: 'Aberoy',
  //       price: 990500,
  //       link: 'https://aberoy.kz/',
  //       logo: '/aberoy.svg',
  //     },
  //     {
  //       name: 'Astana Remont',
  //       price: 1130000,
  //       link: 'https://astanaremont.kz/',
  //       logo: '/astanaremont.png',
  //     },
  //     {
  //       name: 'UDH',
  //       price: 890500,
  //       link: 'https://www.instagram.com/uidomhome/?hl=en',
  //       logo: '/6773a1a3d57b38aaa3a89166.png',
  //     },
  //     {
  //       name: 'Aberoy',
  //       price: 990500,
  //       link: 'https://aberoy.kz/',
  //       logo: '/aberoy.svg',
  //     },
  //     {
  //       name: 'Astana Remont',
  //       price: 1130000,
  //       link: 'https://astanaremont.kz/',
  //       logo: '/astanaremont.png',
  //     },
  //     {
  //       name: 'UDH',
  //       price: 890500,
  //       link: 'https://www.instagram.com/uidomhome/?hl=en',
  //       logo: '/6773a1a3d57b38aaa3a89166.png',
  //     },
  //   ]);
  // });
}
