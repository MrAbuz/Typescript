// You can actualy use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type
// This is super good for example when you'd have to type the type of the user object in the parameters for a lot of different function
// And even the user for example had 15 different values, would be bad to have to add all of them when declaring the type in the input of the function, for a lot of different functions.
// Easy to look to 4-myObjects.ts to compare
// This is a type alias for an object

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });

export {};
