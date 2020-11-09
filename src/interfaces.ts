export interface IItem {
  email: string;
  gender: string;
  phone: string;
  nat: string;
  id: object;
  login: { uuid: string };
  picture: { thumbnail: string; medium: string; large: string };
  location: {
    city: string;
    country: string;
    state: string;
    postcode: number;
    street: {
      name: string;
      number: number;
    };
  };
  dob: { age: number; date: string };
  name: { first: string; last: string; title: string };
}
