// class Contact {
//   id;
//   name;
//   birthDate;
// }

interface Contact {
  id: number;
  name: string;
  birthDate?: Date;
}

let primaryContact: Contact = {
  id: 12345,
  name: "Michael Johnson",
  birthDate: new Date("12-12-1990"),
};
