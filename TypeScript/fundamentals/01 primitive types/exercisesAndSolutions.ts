// Exercise 1: Declare a variable 'name' of type string and assign it the value "John".
// Try assigning a number to it afterwards and observe the error.
let name: string = "John";
// name = 44; // <- error here

// Exercise 2: Declare 'age' as number and 'isActive' as boolean.
// Create a function checkAge(age: number): boolean that returns true if age > 18.
let age: number = 25;
let isActive: boolean = true;

function checkAge(age: number):boolean {
    return age > 18;
}
// Exercise 3: Declare 'maybeValue' as any and assign different values (string, number, object).
// Now change it to unknown and see what changes are required to use the value (use typeof checks).
let maybeValue: any = "horror"
maybeValue = 99;
maybeValue = true;

//let maybeValue = undefined;

// Exercise 4: Declare 'nullableString' as string | null.
// Create a function greet(name: string | null): string that returns "Hello, Guest" if name is null.

let nullableString: string | null = null;

function greet(name: string | null): string{
    return name ? `Hello, ${name}` : "Hello, Guest"
}