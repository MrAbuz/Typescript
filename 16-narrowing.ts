// Narrowing:
// Everything that we're learning here are different ways to narrow the type:
// As I'm understanding, Narrowing is used when we want to add some logic that only works in one type of the parameter, or the other,
// or if the parameters are the same type, or if they have the same value, or the one that has x property. So narrowing the logic to the type,
// value, properties of the inputs. Pretty much as I understand so far.

// All this lessons, type narrowing, in operator, instanceof and Type predicates, Descriminated Union and Exhaustiveness Checking with never, are
// included in the Narrowing in general, as different ways to narrow down the type:

// We're gonna be talking about some cases where we wanna be extra cautious, some examples:

function detectType(val: number | string) {
  //return val.toLowerCase(); alone doesnt work because it could be a number
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  // if the id is here or not, imagine we're looking for some id in the database and maybe there's no id being provided
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  // This example is copied from the docs:
  // The typeof of an array is "object". didn't understand why but it is. if we go to a console and say typeof [1,2,3] it says object.
  // Something to keep in mind
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        // this is how you loop through an entire array?
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
// The case that it doesnt cover here is an empty string "". Empty string is included in the truthy and falsy values, and we should take
// that possibility into consideration. Didn't understand how, he wasn't explicit. Can read more about it in the documentation.
//
//
//
//
//
//
//
// The "in" operator narrowing:
//
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
// (there's always good documentation in any topic we're doing here in this series, just putting some links sometimes to remind but there's for
// every topic)
// Javascript has an operator for determining if an object has a property with a name: the in operator. Nice!
// (remind that properties in objects are the "name", "age" in object = {name: "hitesh", age: "11"}).
// The example in the documentation is nice to understand, should go there and read.
//
//
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//
//
//
//
//
//
//
// Instanceof and Type Predicates:
//
//
//
//
//
//
//
// Instanceof:
//
// JavaScript has an operator for checking whether or not a value is an “instance” of another value.
// "Anything that can be constructed with the 'new' keyword, that's when this instanceof comes into picture"
// We can create classes, objects, arrays with the 'new' keyword. For now I've only seen creating objects through classes but okay!
//
// This example comes from the docs:

// new Date() //we can do this easily or new Array()
// 'instanceof' is almost like 'typeof'. Typeof checks for the default types, instanceof checks whether this object is an instance of some class
// or something like that.
// So from my understanding it's more than typeof, where instanceof is either the same type but also an instance of something from that type, but
// would like to see examples in the real world. Like if an object is an instance of the class that created that object, and ofc same type.

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
//
//
//
// Type predicates:
//
// From my understanding and I'm really not sure here, my hints, is that Type predicates allows us to create more complex logic to narrow
// down the type into a specific type, where we can add that logic in a function and in the end say the type that it returns if its correct.
// Our examples are straight forward but probably we could add some more ifs with another logic and only then it is true.
// Try to check a little bit more if I get to need this one

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  // If we didnt add "pet is Fish" it would return a normal boolean. Like this it returns Fish, which is what we want to type narrow.
  // Which means that below, after if (isFish(pet)), the pet will just be of type Fish, instead of both types.
  // Is the use case to do this "isFish" but with complex logic?
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    //now we can check the type condition directly like this. But not understanding the use case 100%.
    pet;
    return "fish food";
  } else {
    pet;
    return "bird Food";
  }
}

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
// Discriminated Union and Exhaustiveness Checking with Never:
// In the docs "The never Type" and "Exhaustiveness checking" are separate topics, but hitesh says they should be thought of together and
// separated they don't make sense.
//
//
//
//
//
//
//
// Descriminated Union:
// Hitesh says this one is really bad. He doesn't like it.
// From what I understood it's having the same property across all interfaces with different values, to then be able to choose the type by
// saying shape.kind === "square", then do this, if variable.kind === "circle", do that.
// We can use any other name besides "kind" as long as its the same property name across all the interfaces you want.

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side;
}

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
// "The never Type" and "Exhaustiveness checking"
// Two topics in typescript docs but Hitesh prefers to explain and combine them into a single topic:

function getArea(shape: Shape) {
  //the idea is you do exhaustive switch and case check
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side;
    // But besides the two cases that we have covering both types of Shape, we should also have a "default" case, which should be of type "never",
    // so that our code is prepared to deal with any future change that happens to the code, which adds another case, or type in this case.
    // This is a precautionary step to make sure our code is future proof
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
