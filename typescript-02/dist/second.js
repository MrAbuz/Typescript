"use strict";
// Title of this section: "Why interfaces are important"
// Now in our entire aplication in this example, doesnt matter how or who is building it, if anybody wants to create a feature to take photos,
// should always follow this interface.
// We're also learning that we use the keyword "implements" to create a class from an interface.
class Instagram {
    // the interface forces us to have those properties
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short // you can add properties, what you can't do is not adding properties that are in the interface
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story was created");
    }
}
