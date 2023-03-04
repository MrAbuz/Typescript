// They are really similar to "type" or "type aliases".
// We'll get to know the differences between them here

// Imagine the scenario of a new user with some properties: email, userId, google login, database id etc
// We'll start a trial for this user, and we want to give him a discount code aswell
// This scenario will help us understand

//what makes interfaces really interesting is the definition of functions and there are a couple of ways we can define them
interface Client {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string; //this is the 1st way to define functions here (hitesh says he prefers the other one). returns a string
  startTrial2(): string; //this is the 2nd way, which hitesh thinks is better and more clear to understand
  getCoupon(couponname: string, value: number): number;
}

// From what I understood, interfaces make it compulsory to call those functions, and that they must return a certain type, but we dont need to
// declare in the interface which logic that function will have. We're making it compulsory for the function to be called, and what it will return.

const hitesh: Client = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  startTrial: () => {
    return "trial started";
  },
  startTrial2: () => {
    return "trial started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    //interestingly we can just say "name" instead of "couponname", what matters is that we add a value of string. We don't need to match the name
    //for some reason this parameters are compulsory, I could've not added them even tho I declared them. Didn't understand why
    //could've just did here like getCoupon: () => { return 10; }
    return 10;
  },
};
