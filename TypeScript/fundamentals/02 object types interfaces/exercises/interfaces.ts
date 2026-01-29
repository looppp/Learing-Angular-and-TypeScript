// Exercise 1: Define an interface Person with properties name: string and age: number.
// Create an object 'user' that matches this interface and log it to console.

// Exercise 2: Extend the Person interface to add an optional property 'email?: string'.
// Create two objects: one with email, one without. Ensure TypeScript doesn't complain.


// Exercise 3: Make the 'age' property in Person readonly.
// Create an object, then try to change age after creation — observe and fix the error if needed.

interface Person {
     name: string;
     readonly age: number;
     email?: string | undefined;
}

class User implements Person {
    constructor(public name: string, public readonly age: number, public email?: string){}
    
    greeting(): string {
        return `Hello, my name is ${this.name} and i am ${this.age} years old.`
    }
    printEmail(): string {
        return this.email ? `${this.name}'s Email is ${this.email}` : `${this.name} does't have an email`
    }
    changeAge(): string {
        return "Error: Cannot assign to 'age' because it is a read-only property."
    }

}

    let user = new User("Hristo", 22);
    let userTwo = new User("Georgi", 33, "georgi@abv.bg")
    console.log(userTwo.greeting())
    console.log(userTwo.printEmail());
    console.log(user.greeting());
    console.log(user.printEmail());
    console.log(user.changeAge())
    
    
