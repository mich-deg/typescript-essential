// class Contact {
//   id;
//   name;
//   birthDate;
// }

interface Contact extends Address {
  id: number;
  name: string;
  birthDate?: Date;
}

interface Address {
  line1: string;
  line2?: string;
  province?: string;
  region?: string;
  postalCode: string;
}

let primaryContact: Contact = {
  id: 12345,
  name: "Michael Johnson",
  birthDate: new Date("12-12-1990"),
  postalCode: "1000",
  line1: "addis 100",
};
