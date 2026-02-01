// Exercise 1: Define interface Employee extends Person { role: string; salary?: number; } (assuming Person from earlier).
// Create an 'employee' object with all properties, and one with only required ones.

// Exercise 2: Combine interfaces: Define interface Address { street: string; city: string; }
// Then define type FullPerson = Person & Address; (use intersection).
// Create a 'fullUser' object of type FullPerson.

// Exercise 3: Define interface Product { id: number; name: string; price: number; category?: string; stock: number; }
// Make 'stock' readonly.
// Create a type ProductUpdate = Omit<Product, 'id' | 'stock'> & { stock?: number };
// Create an example 'updatePayload: ProductUpdate' that can change price and optionally stock (but not id or readonly stock directly).

// Exercise 4: Define interface BaseEntity { id: number; createdAt: Date; }
// Define interface Auditable { updatedAt: Date; updatedBy: string; }
// Define type AuditedEntity<T> = T & BaseEntity & Auditable;
// Create type AuditedUser = AuditedEntity<User>;
// Create an example 'auditedUser: AuditedUser' with all required fields.

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

// Exercise 6: Define interface ApiResource { url: string; method: 'GET' | 'POST' | 'PUT' | 'DELETE'; }
// Define type SecuredResource = ApiResource & { requiresAuth: boolean; roles?: string[] };
// Create type UserResource = SecuredResource & { ownerId: number };
// Create an example 'profileResource: UserResource' that requires auth and specific role.

// Exercise 7: Define type DeepPartial<T> = {
//   [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
// };
// Use it to create type DeepPartialUser = DeepPartial<User>;
// Create an example 'deepUpdate: DeepPartialUser' that updates nested address if User had address: { street: string; city: string }.

// Exercise 8: Define interface Notification {
//   id: number;
//   message: string;
//   type: 'info' | 'success' | 'warning' | 'error';
//   read: boolean;
//   timestamp: Date;
// }
// Create type NotificationUpdate = Partial<Pick<Notification, 'read' | 'message'>>;
// Create an example 'markAsRead: NotificationUpdate = { read: true };'
// Explain why Pick + Partial is useful here (for updating only specific fields safely).