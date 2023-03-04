// to use when the data structure we want to create is composed of more than 1 type
// he's gonna walk us through some situations

let score: number | string = 33;

score = 44;
score = "hitesh";

//-----------------

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitesh", id: 334 };

hitesh = { username: "hc", id: 334 }; //in the future I can define it with a username (as an admin) and its okay

//-----------------

function getDbId(id: number | string) {
  //making some API calls
  console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId("3");

function getDb(id: number | string) {
  //id.toLowerCase(); without ifs gives error because it can also be a number
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
}

//-----------------

// Arrays

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
// if you want to have both types in the same array:
// const data3: string | number[] = ["1", "2", 3]; //either this is a mistake
// const data3: string[] | number[] = ["1", "2", 3]; //this is also a mistake because thats array of just numbers or array of just strings
// classic mistake he says
const data3: (string | number)[] = ["1", "2", 3]; //must be like this to have both numbers and strings in the same array
export {};

//-----------------
//we can actually make our numbers be very strict
//so from what I observe here, after ":" we can also strict its values instead of just identifying the types

let pi: 3.14 = 3.14;
//pi = 3.145 we cant change it

//for example if we're creating an app for airplane flights
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew" we cant do this, which is helpful
