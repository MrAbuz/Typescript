// check the documentation to get some reminders of generics If I need:
// https://www.typescriptlang.org/docs/handbook/2/generics.html

// Generics:
// <T> is an indication that it will be a Generic.
// From my understanding so far is that generics is a way for us to create components (functions, arrays, components etc)
// that can be called using any type, and return any type. We can turn those components generic to the type.

// First, arrays are already generics. We have learnt we can also declare the type of an array like this:
const score: Array<number> = [];
const names: Array<string> = [];
// If we think about it, array is a generic term and you can use any type inside of it. So the synthax is pretty much the same, using the < >.

// If we want to create a function where we add a certain type as an argument, and we return that exact same type:

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

// But people normally prefer to define it like this:

function identityFour<T>(val: T): T {
  return val;
}
// Apparently it doesnt have to be "T", we tried with "A" and worked the same, just needs to be the same letter or word.

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "whiskey", type: 10202 }); //we can pass our own types to this generic functions
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
  // using a generic array as an input
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
// arguments. Need to understand this better with more examples of generics if and how it can return other types.
// Imo what makes sense to me is that you can return any type like "number" in generics, but you have the possibility to return the same type
// that you add as argument if that's the case. But makes sense for a generics to be able to return a specific type aswell. Might be wrong
//

// <T,> He says we'll see some codebases use this. This comma is normally used in react projects etc to mention that this is not an HTML tag
// like <h1> or <p>, but rather that its generic. Makes sense because react is where you use html with js code, and <T> could be confusing.

export {};

//
//
//
//
//
//
//
//
// Using Type Parameters in Generic Contraints (check example: https://www.typescriptlang.org/docs/handbook/2/generics.html)
// He didnt explain this well but I think I got it from this example, like in a generic way being able to constrain a parameter to
// another in "relative" terms.
//
//
//
//
//
//
//
//
// We can declare a type parameter that is constrained by another type parameter
// Better to read the docs with that link but the example as I understood is as follows (the example gave by hitesh was weak):
//
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

// This one will take 2 input generics, we can use as much as we want to take as an input
// From my understanding this means that we can create a type, in this case Key, that is constrained by the type Type, so that (in this example)
// its value will always need to be whatever keys values the data from type Type has. So the type is constrained by another type even tho
// we don't know what the other type is.

getProperty(x, "a");
//getProperty(x, "m");    //Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
//

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}

// anotherFunction(3, "4") fails because "4" is not a number, from what I understand with "extends" it needs to be atleast type number
//
//
//
//
//
//
//
//
//
//
//
//
// Using Class Types in Generics:
//
//
//
//
//
//
//
//
//
// We're gonna use an example of selling courses and quizes, two sellable items.
// We want to create a class where could take a quizz, or a course, and we want to create some methods that work for both of them
//
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  // this is a generic class that takes a generic argument, not only Quizes or Courses, but we can take other products aswell.
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
