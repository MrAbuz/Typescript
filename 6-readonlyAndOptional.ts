type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};
// READONLY: suppose that we're adding this id to mongo db. you dont want anyone to change the value of "_id" further down the road. So you add the keyword "readonly"
// "?" OPTIONAL: not all users have creditcard, so we add "?" in the credcardDetails so that parameter is optional. You can add that parameter or not

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

myUser.email = "h@gmail.com"; // we can change the email
//myUser._id = "asa";  // we can't change the _id cuz it has "readonly" in the type

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

// COMBINING TYPES:
// we can create a type that combines other types and adds some
// this is great when each type we're adding has a lot of parameters and a dev wont want to type them all again, so he just combines those times and adds some parameters
// normally combining two types is a good practise and used, but adding the extra parameters he says looks a bit hacky and is not that good practise but we can do it if we want
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
