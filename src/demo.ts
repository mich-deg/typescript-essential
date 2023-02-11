// class Contact {
//   id;
//   name;
//   birthDate?;

// }
type ContactName = string;

type ContactBirthDate = Date | string | number;
// interface Contact extends Address {
//   id: number;
//   name: ContactName;
//   birthDate?: ContactBirthDate;
//   status: ContactStatus;
// }

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
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
  // postalCode: "1000",
  // line1: "addis 100",
  // status: "active",
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

//keyof type operator

type ContactFields = keyof Contact;

const field: ContactFields = "name";

// typeof operator

function toContact(nameOrContact: string | Contact): Contact {
  if (typeof nameOrContact === "object") {
    return {
      id: nameOrContact.id,
      name: nameOrContact.name,
      status: nameOrContact.status,
    };
  } else {
    return {
      id: 0,
      name: nameOrContact,
      status: "active",
    };
  }
}

//Indexed access types

type awesome = Contact["id"];

interface ContactEvent {
  contactId: Contact["id"];
}

// defining dynamic but limited types with records
let X: Record<string, string | number> = { name: "Wruce Bayne" };
X.number = 1234;

// Partial type - constructs a type with all properties of Type set to optional.

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

// Omit type

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
