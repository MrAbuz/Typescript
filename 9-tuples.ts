// tuples - in a broad view its just a special array. Specifies the types, the order of the types, and how many parameters.
// A value of type [number, string] is guaranteed to have a length of 2, with a "number" at element 0 and a "string" at element 1.
// exists in typescript, but doesnt exist in javascript

// imagine that you want the array to have a string, a number and a boolean but in that specific order (useful in a lot of cases in real apps
// that are expecting a certain value to be in the first spot, then a certain value in the 2nd spot, like API calls)
const user1: (string | number)[] = [1, "hc"];
const user2: (string | number)[] = ["hc", 1]; //both of this work, but they dont specify an order
// to do it, we convert it into a tuple:
let user3: [string, number, boolean];

user3 = ["hc", 131, true];

//------------

let rgb: [number, number, number] = [255, 123, 122]; //this is a guarantee that all 3 numbers will be here

//-----------
// we can ofc add a tuple as a type

type User = [number, string];

const newUser: User = [112, "example@google.com"];

// but there's something wrong about tuples:

newUser.push("hello"); //this should give an error because you shouldn't be allowed to add an extra value to a tuple array
