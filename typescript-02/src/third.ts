// Abstract Classes

// They are very similar to interfaces, that's why we explained a bit more of interfaces in the previous lesson
// Job interviewers love to ask what's the use of abstract classes when interfaces are available.

// With interfaces, we implemented interfaces in classes with the keyword "implement"

abstract class TakePhotos {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void; // the abstract keyword here means we're not going to implement/define it here (type the logic inside the method), but
  //                            others will need to implement this getSepia() to follow this abstract class.
  getReelTime(): number {
    //(here suppose that we are doing some complex logic and calculations)
    return 8;
  }
  //THIS IS WHAT'S DIFFERENT FROM INTERFACES: You can add logic and implement a method inside an abstract class, not just define it.
  //This is why we also use the word abstract in the method above, because the ones with abstract you are just defining them.
}

//const hc = new TakePhoto("test", "Test");
// You cannot create an object form an abstract class, you need to create it from the class that is extending the abstract class

class Facebook extends TakePhotos {
  //Facebook is inheriting TakePhoto
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter); //to create the constructor here, we need to pass this "super" keyword stating the values that are coming from the
    //                           inherited abstract class constructor. This is a common synthax that we'll see
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const hc2 = new Facebook("test", "Test", 3); // You can create objects from the class that is inheriting the abstract class, not from the
//                                                abstract class itself

hc2.getReelTime(); //we can use this, and its logic is implemented in the abstract class, this is the difference to interfaces.

//
//
// TLDR about Abstract Classes:
//
// They are just like interfaces.
// We cannot create an object directly from an abstract class. It has to be from a class that is inheriting the abstract class.
// They help to define the class that is inheriting them to get a certain structure and compulsory things that they need to add.
// If you want them to add a method but not define it, you add the keyword "abstract"
// But the main difference is this, is that you can define the logic of a method to give them a feature by default.
