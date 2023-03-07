// Title of this section: "Why interfaces are important"

// Here we will do this scenario: We are building a mobile app that uses a camera.

// Interface is like a guideline that lists all the things that we'll need in order to build a feature, all the properties, all the methods
// that we'll need 100%.

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  // Now, who ever wants to utilize stories in their aplication, should have a method createStory() etc.
  // Basically from my understanding, interfaces lists all the things that we'll need in order to build a feature, all the properties, all the
  // methods that we'll need 100%. This brings consistency to the code and makes sure there's less errors.
  createStory(): void;
}

// Now in our entire aplication in this example, doesnt matter how or who is building it, if anybody wants to create a feature to take photos,
// should always follow this interface.
// We're also learning that we use the keyword "implements" to create a class from an interface.

class Instagram implements TakePhoto {
  // the interface forces us to have those properties
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string // you can add properties, what you can't do is not adding properties that are in the interface
  ) {}

  createStory(): void {
    console.log("Story was created");
  }
}

export {};
