// to use when the data structure we want to create is composed of more than 1 type

let score: number | string = 33;

score = 44;
score = "hitesh";

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

export {};
