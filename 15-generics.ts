// check the documentation to get some reminders of generics If I need:
// https://www.typescriptlang.org/docs/handbook/2/generics.html

// Generics:
// <T> is an indication that it will be a Generic.
// From my understanding so far that I'm 10 min into is that generics is a way for us to create components (functions, arrays, components etc)
// that can be called using any type, and return any type. We can turn those components generic to the type.

// First, arrays are already generics. We have learnt we can also declare the type of an array like this:
const score: Array<number> = [];
const names: Array<string> = [];
// If we think about it, array is a generic term and you can use any type inside of it. So the synthax is pretty much the same, using the < >.

// Imagine that we want to create a function where we add a certain type as an argument, and we return that exact same type.
// With this we can't add other types except boolean and number, and our type anotation isnt making sure we return the same type we insert.
function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}
// any is a horrible keyword that we must avoid at all costs, except in super specific situations
// This identity2 doesnt work also because even tho you can use any type, you can't make sure it'll return the same type as you added as argument

function identityThree<Type>(val: Type): Type {
  return val;
}
// This is the syntax that allows us to do what we want. We can add any type,and it will return that same exact type,doesnt matter what type it is.

//But people normally prefer to define it like this:

function identityFour<T>(val: T): T {
  return val;
}
//Apparently it doesnt have to be "T", tried with "A" and worked the same, just needs to be the same letter or word in the 3 places

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "whiskey", type: 10202 }); //we can pass this generic functions our own types
identityFour(true); //in the cases where the typescript can infer the type your using in the argument, you dont need to say in <> when
//                    calling the function
//
//
//
//
// Arrays and arrow functions:
//
//
//
//
//
//

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

// This same function as an arrow function:

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};

// From what he said this doesn't have to return T. It could return another type. What I think matters is the function working with generic type
// arguments.

// <T,> He says we'll see some codebases use this. This comma is normally used in react projects etc to mention that this is not an HTML tag
// like <h1> or <p>, but rather that its generic.

export {};
