const User = {
  name: "hitesh",
  email: "hitesh@lco.dev",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
// this function expects that we'll be passing some object

createUser({ name: "hitesh", isPaid: false });
// there's a weird behaviour hitesh explained, if I do: createUser({ name: "hitesh", isPaid: false, email: "h@h.com"}); it gives an error, because createUser() is not expecting an email.
// but if we create it as a variable "let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"} and pass it like createUser(newUser), it wont give an error
// WEIRD behaviour of JS / TS. Not all of the weirdness of javascript is gone, but there's a better way of defining the function that we'll learn later

// Sometimes the syntax to return an object is confusing. It's as follows:
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

// Returning an object just like this can be confusing for some people because of the {}{}
function createTeacher(): {} {
  return {};
}

export {};
