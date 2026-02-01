// Exercise 1: Define a type alias ID
// Create a variable 'userId' of type ID and assign both a string and a number to it in separate lines.

type ID =  string | number;
let userId: ID = "Hello"
userId = 45

// Exercise 2: Define a type alias Point;
// Create an array 'points' of type Point[] and add two objects to it.

type Point = {x: number, y: number;}
let points: Point[] = [{x:21, y:22},{x:43, y:21}]
console.log(points);

points.push({x:55, y:31});
console.log(points);



// Exercise 3: Define a type alias Config ;
// Create a function getConfig(): Config that returns a sample config object.

type Config = { debug: boolean; logLevel: 'info' | 'error' | 'warn'; };
let status: Config = {debug: true, logLevel: "error"}

function getConfig(obj: Config): Config{
    return obj
}
console.log(getConfig(status));

// Exercise 4: Define type Address ;
// Create a type UserWithAddress;
// Create an object 'completeUser' of UserWithAddress with all fields, including optional country.

type Address = { street: string; city: string; zip: number; country?:string}
type UserWithAddress = { id: number; name: string; email: string; address: Address}
let user: UserWithAddress = { 
    id: 34153,
     name: "Hristo",
     email: "Hristo00@abv.bg",
     address: {
        street: "Makedonska 14",
        city: "London",
        zip: 6223,
        country: "United Kindom"
     }}

// Exercise 5: Define type LoginForm ;
// Create type LoginFormErrors ;
// Create an example 'formErrors: LoginFormErrors'

type LoginForm = { username: string, password: string, rememberMe?: boolean}
type LoginFormErrors = { [K in keyof LoginForm]?: string}
let formErrors: LoginFormErrors = { password: "Must be at least 8 characters long"}


// Exercise 6: Define type ApiSuccess<T> ;
// Define type ApiError ;
// Define type ApiResult<T> = ApiSuccess<T> | ApiError;
// Create two variables: successResult: ApiResult<User[]> and errorResult: ApiResult<never>

type Users = { name: string, age: number}
type ApiSuccess<T> = { status: "success", data: T, timestamp: Date }
type ApiError = { status: "error", message: string, code?: number}
type ApiResult<T> = ApiSuccess<T> | ApiError
let successResult: ApiResult<Users[]>
let errorResult: ApiResult<never>

// Exercise 7: Define type Paginated<T> = {
//   items: T[];
//   total: number;
//   page: number;
//   pageSize: number;
//   hasNext: boolean;
// };
// Create type UsersPage = Paginated<User>;
// Create an example 'usersPage: UsersPage' with 3 users, total 50, page 2.
type User = {
    id: number;
    name: string;
    email?: string;
}

type Paginated<T> = {
   items: T[];
   total: number;
   page: number;
   pageSize: number;
   hasNext: boolean;
 };

 type UsersPage = Paginated<User>;

 const usersPage: UsersPage = {
    items: [
        { id: 4, name: "Hristo", email: "hristo@abv.bg" },
        { id: 5, name: "Mitoko", email: "mitko@abv.bg" },
        { id: 6, name: "Georgi", email: "georgi@abv.bg" },
    ],
    total: 24,
    page: 4,
    pageSize: 4,
    hasNext: true
 };

 console.log("Users on page 2:", usersPage.items);
 console.log("Total Users:", usersPage.total);
 console.log("Current page:", usersPage.page);
 console.log("Has next page:", usersPage.hasNext);
 



// Exercise 8: Define type SearchFilters = {
//   query?: string;
//   category?: string;
//   minPrice?: number;
//   maxPrice?: number;
//   sort?: 'price-asc' | 'price-desc' | 'newest';
// };
// Create a function buildQueryParams(filters: SearchFilters): string that returns a query string like '?query=phone&minPrice=100&sort=price-asc'

type SearchFilters = {
    query?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: 'price-asc' | 'price-desc' | 'newest'
}

function buildQueryParams(filters: SearchFilters): string {
    const params = new URLSearchParams
    
    for(const [key, value] of Object.entries(filters)) {
        if(value !== undefined || value !== null) {
            params.append(key, String(value))
        }
    }

    const queryString = params.toString();

    return queryString ? `?${queryString}` : '';
}

// Exercise 9: Define type FormControl<T> = {
//   value: T;
//   touched: boolean;
//   dirty: boolean;
//   valid: boolean;
//   errors?: Record<string, string>;
// };
// Create type LoginFormState = {
//   username: FormControl<string>;
//   password: FormControl<string>;
// };
// Create initial state 'initialLogin: LoginFormState' with empty values.

type FormControl<T> = {
    value: T;
    touched: boolean;
    dirty: boolean;
    valid: boolean;
    errors?: Record<string, string> | undefined;
}

type LoginFormState = {
    username: FormControl<string>;
    password: FormControl<string>;
}

const initialLogin: LoginFormState = {
  username: {
    value: '',
    touched: false,
    dirty: false,
    valid: true,          
    errors: undefined
  },
  password: {
    value: '',
    touched: false,
    dirty: false,
    valid: true,
    errors: undefined
  }
};


const invalidState: LoginFormState = {
  username: {
    value: '',
    touched: true,
    dirty: true,
    valid: false,
    errors: { required: 'Username is required' }
  },
  password: {
    value: '123',
    touched: true,
    dirty: true,
    valid: false,
    errors: { minlength: 'Password must be at least 8 characters' }
  }
};

