// Exercise 1: Define interface Employee extends Person { role: string; salary?: number; } 
// Create an 'employee' object with all properties, and one with only required ones.

interface Person {
    name: string;
    age: number;
    email?: string;

}

interface Employee extends Person {
    role: string;
    salary?: number;
}

// Exercise 2: Combine interfaces: Define interface Address { street: string; city: string; }
// Then define type FullPerson = Person & Address; (use intersection).
// Create a 'fullUser' object of type FullPerson.

interface Address {
    street: string;
    city: string;
}

type FullPerson = Person & Address;
let fullUser: FullPerson = { name: "Hristo", age: 23, email: "Hristo@abv.bg", street: "Hristo Stoichkov 18", city: "Sofia"}

// Exercise 3: Define interface Product { id: number; name: string; price: number; category?: string; stock: number; }
// Make 'stock' readonly.
// Create a type ProductUpdate = Omit<Product, 'id' | 'stock'> & { stock?: number };
// Create an example 'updatePayload: ProductUpdate' that can change price and optionally stock (but not id or readonly stock directly).

interface Product {
    id: number;
    name: string;
    price: number;
    category?: string;
    readonly stock: number;
}

type ProductUpdate = Omit<Product, 'id' | 'stock'> & {stock?: number}

let updatePayload: ProductUpdate = {
    name: "Electric brush",
    price: 44,
    category: "Bathroom",
    stock: 33
}

// Exercise 4: Define interface BaseEntity { id: number; createdAt: Date; }
// Define interface Auditable { updatedAt: Date; updatedBy: string; }
// Define type AuditedEntity<T> = T & BaseEntity & Auditable;
// Create type AuditedUser = AuditedEntity<User>;
// Create an example 'auditedUser: AuditedUser' with all required fields.

interface BaseEntity {
    id: number;
    createdAt: Date;
}

type Auditable = {
    updatedAt: Date;
    updatedBy: string;
}

interface User {
    name: string;
    email?: string;
    age: number;
    address: string;
    preferences: string;
}

type AuditedEntity<T> = T & BaseEntity & Auditable;

type AuditedUser = AuditedEntity<User>;


let auditedUser: AuditedUser = {
    id: 41245,
    createdAt: new Date("2016-11-08T19:16:02"),
    updatedAt: new Date("2016-11-09T19:16:02"),
    updatedBy: "Georgi",
    name: "Georgi Ivanov",
    email: "Georgi@abv.bg",
    age: 33,
    address: "Hristo Botev 9",
    preferences: "limited"
}

console.log("Audited User:", auditedUser);

// Exercise 5: Define interface OrderItem { productId: number; quantity: number; price: number; }
// Define type Order = {
//   id: number;
//   userId: number;
//   items: OrderItem[];
//   total: number;
//   status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
// };
// Create a function calculateOrderTotal(items: OrderItem[]): number that sums quantity * price.
// Create an example 'order: Order' with 2 items.

interface OrderItem {
    productId: number;
    quantity: number;
    price: number;
}

type Order = {
    id: number;
    userId: number;
    items: OrderItem[];
    total: number;
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
}

function calculateOrderTotal(items: OrderItem[]): number {
    return items
        .map(item => item.price * item.quantity)
        .reduce((sum, itemsTotal) => sum + itemsTotal, 0)
        
}

let firstOrder: Order = {
    id: 12342,
    userId: 124,
    items: [{productId: 42, quantity: 22, price: 44},
            {productId: 22, quantity: 32, price: 34},
            {productId: 32, quantity: 52, price: 24}],
    total: 0,
    status: "pending"

}

let secondOrder: Order = {
    id: 12342,
    userId: 124,
    items: [{productId: 15, quantity: 62, price: 44},
            {productId: 13, quantity: 62, price: 34},
            {productId: 12, quantity: 62, price: 24}],
    total: 0,
    status: "delivered"

}

firstOrder.total = calculateOrderTotal(firstOrder.items)
secondOrder.total = calculateOrderTotal(secondOrder.items)


// Exercise 6: Define interface ApiResource { url: string; method: 'GET' | 'POST' | 'PUT' | 'DELETE'; }
// Define type SecuredResource = ApiResource & { requiresAuth: boolean; roles?: string[] };
// Create type UserResource = SecuredResource & { ownerId: number };
// Create an example 'profileResource: UserResource' that requires auth and specific role.

interface ApiResource {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

type SecuredResource = ApiResource & {requiresAuth: boolean; roles?: string[]};
type UserResource = SecuredResource & { ownerId: number };
let profileResource: UserResource = {
    url: "www.google.bg",
    method: 'GET',
    requiresAuth: true,
    roles: ["User", "Admin"],
    ownerId: 123
}

// Exercise 7: Define type DeepPartial<T> = {
//   [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
// };
// Use it to create type DeepPartialUser = DeepPartial<User>;
// Create an example 'deepUpdate: DeepPartialUser' that updates nested address if User had address: { street: string; city: string }.

interface User {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    zip: number;
  };
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}


type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
}

// type DeepPartialUser = DeepPartial<User>; Result is below

type DeepPartialUser = {
  name?: string;                       
  age?: number;                         
  address?: {                           
    street?: string;
    city?: string;
    zip?: number;
  };
  preferences?: {                       
    theme?: 'light' | 'dark';
    notifications?: boolean;
  };
}
  