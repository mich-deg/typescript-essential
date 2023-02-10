// class Contact {
//   id;
//   name;
//   birthDate;
// }

interface Contact extends Address {
  id: number;
  name: ContactName;
  birthDate?: Date;
  status: ContactStatus;
}

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New = "new",
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
  status: ContactStatus.Active,
};

type ContactName = string;

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

function identity<Type>(arg: Type): Type {
  return arg;
}
