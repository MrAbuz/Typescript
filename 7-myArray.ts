const superHeroes: string[] = [];
//const heroPower: number[] = [];
const heroPower: Array<number> = []; //another way of declaring is like this, it's exactly the same, just different synthax

superHeroes.push("spiderman");
heroPower.push(2);

type User = {
  name: string;
  isActive: boolean;
};

//can also create an array of objects type User
const allUsers: User[] = [];

allUsers.push({ name: "", isActive: true });

//also to create an array of arrays of numbers
const MLModels: number[][] = [
  [255, 255, 255],
  [2, 3, 4],
  //we cant add "string" here
];

export {};
