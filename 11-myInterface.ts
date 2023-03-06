// They are really similar to "type" or "type aliases".
// We'll get to know the differences between them here

// Imagine the scenario of a new user with some properties: email, userId, google login, database id etc
// We'll start a trial for this user, and we want to give him a discount code aswell
// This scenario will help us understand

// What makes interfaces really interesting is the definition of functions and there are a couple of ways we can define them
interface Costumer {
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
// This compulsory part might be wrong.

const hitesh: Admin = {
  dbId: 22,
  email: "h@h.com",
  role: "admin",
  githubToken: "github",
  userId: 2211,
  startTrial: () => {
    return "trial started";
  },
  startTrial2: () => {
    return "trial started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    //interestingly we can just say "name" instead of "couponname", what matters is that we add a value of string. We don't need to match the name
    //for some reason this parameters are not compulsory, I could've not added them even tho I declared them. Didn't understand why
    //could've just did here like getCoupon: () => { return 10; }
    return 10;
  },
};

//------------------------------
// We can also add properties to the interface by calling him again.
// This is usually useful when the 1st interface is stored in other files, libraries, made from other devs, and you want to add some properties.
// This is sometimes called "Re-opening the interface". Basically adding more properties to an existing interface
// This is as I understood one of the things you can't do in type aliases. You can extend in type aliases, but not change an already existing named interface.

interface Costumer {
  githubToken: string;
}

//-----------------------------
// Another advantage we get with interfaces is inheritance:
// We get the same properties of the other interface and we add some

interface Admin extends Costumer {
  // We could extend more than one, like "extends Costumer, OtherInterface"
  // This we could also do in type aliases
  role: "admin" | "ta" | "learner"; //this is learned in the "myUnion.ts" part, defining the only values that can be assigned. From what I understood is like another way of doing Enums, maybe I'm wrong.
}

// With interfaces we can extend them from another interface and add properties, we can re-open them and add properties into it
// We have to make sure any package or library that we have instaled dont have an interface with the same name or we'll mess everything ahah

// "Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
// Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add
// new properties vs an interface which is always extendable.
// For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other
// kind of declaration. If you would like a heuristic, use interface until you need to use features from type".
// Some words from the typescript docs

// So that part where I typed "interface Costumer" again and added more properties to an already existing interface named Costumer, that can't
// be done in "Type Aliases".
// Thought being able to add methods (functions) was the main distinction but apparently not.

export {};
