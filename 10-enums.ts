// Enums exist when you wanna restrict choice to certain values
// Ex: for an order status: wishlist, delivered, shipped, returned´
// Enums are one of the few features Typescript has which is not a type-level extension of Javascript.
// From what I understood enums are only available in typescript.

enum SeatChoice {
  AISLE = 10, // by default the enums are 0, 1, 2, 3 like in solidity (AISLE=0),but we can define it to start at a number we want,and be ex 10,11,12
  MIDDLE, // here if we did MIDDLE = 22, after AISLE = 10 (just hover over to see), WINDOW would be 23, FOURTH would be 24. The following are always 1 number above.
  WINDOW, // we can also assign strings like WINDOW = "window" instead of numbers, and we'd have to assign values to all of the others.
  FOURTH, // because if we assign a number, it assumes the following are 1 number above. But if we assign to strings, it cannot assign and asks for us to assign the others.
}

const hcSeat = SeatChoice.AISLE;
// A lot of options to change this but by default they are like 0, 1, 2 ,3. But we can change it to other values, or to strings.
// Dunno if its important to learn this changes to 0, 1, 2, 3 tho, we'll see in the future.

export {};
