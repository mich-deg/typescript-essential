// class Contact {
//   id;
//   name;
//   birthDate;

// }
type ContactName = string;

type ContactBirthDate = Date | string | number;
interface Contact extends Address {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status: ContactStatus;
}

// enum ContactStatus {
//   Active = "active",
//   Inactive = "inactive",
//   New = "new",
// }

type ContactStatus = "active" | "inactive" | "new";
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
  status: "active",
};

function getBirthDate(contact: Contact) {
  if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  } else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

// typing function
interface Contact1 {
  id: number;
  name: string;
}

function clone(source: Contact1): Contact1 {
  return Object.apply({}, source);
}

const a: Contact1 = { id: 123, name: "Mike Chapple" };
const b = clone(a);

// Generics
function cloneGeneric<T>(source: T): T {
  return Object.apply({}, source);
}

const aG: Contact1 = { id: 123, name: "Mike Chapple" };
const bG = clone(aG);

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = cloneGeneric(dateRange);
