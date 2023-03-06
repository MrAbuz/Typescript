//
// CLASSES:
//
// Classes are a blueprint for creating objects. Makes sense, but what's the difference to objects then?
// Ahhh I think I probably understand (first thought I'm having so I can be wrong). To create objects you can have a type already defined, but
// you always need to create the variable and initialize each property inside. I'm assuming the advantage of classes is to being able to create
// new objects without having to type out the entire object and properties every time we want to create a new one, but just say new User(and then
// the values inside that are specific to that instance, which is way easier and faster), specially to create a lot of objects.

// It's like a blueprint for creating objects. We can define all properties and methods that all objects created from this class will have.
// I think I've understood 100% and it's super useful.

class User {
  name: string;
  public email: string;
  private readonly city: string = "berlin";
  constructor(email: string, name: string) {
    this.email = email; // this.email refers to the email variable that we said in the beginning. Same for name
    this.name = name;
  }
}

const hitesh = new User("h@h.com", "hitesh");
hitesh.name;

// But actually, most of the professionals in typescript dont write classes like that. Those are really big and messy.
// The same code can be written as:
// NICEE!

class User2 {
  private readonly city: string = "berlin";
  constructor(public email: string, public name: string) {}
}
//
//
//
// Modifier keywords : PRIVATE, PUBLIC//
//
//
//
// Aparently there's 3 modifier keywords (private and public are 2), and we'll be learning the 3rd one after

// PRIVATE:
// If we dont want anyone to access the city, we add the "private" keyword.
// It was "readonly" already so we could not change the value, but we could access it. Now with private, we can't access it, gives an error
// hitesh.city //now gives an error

// In javascript we can also call it private using #, which for name would be #name, which would be the same as "private name".
// There's a lot of dicussion in the typescript community if the synthax should be the same as javascript.
// We cant use the private keyword in javascript, just typescript.

// PUBLIC:
// All the properties that we havn't specified as public or private in the class are automatically public.
//         So in which situations is the keyword public useful?
//
//
//
//
// Getters / Setters:
//
//
// Getters and setters are pretty common, like we use them in javascript. "get" is used to get any property. It doesnt mean we always need to get
// a private property, maybe we want to get a public property "by adding some aditional logic" (think this "" is was what he said).
// But in most usecases this getters and setters are being designed so that any private property can be exposed outside but with some aditional
// logic or aditional restrictions/access. (from hitesh summary in the end of the video)
//

class User3 {
  private _courseCount = 1; //since its private we cannot access this outside of this class, but we can inside of the class.

  private readonly city: string = "berlin";
  constructor(public email: string, public name: string) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  // _courseCount is private but we want to design some setters and getters to access it even tho its private.
  // If anybody want to access it must be through the getter or if they want to change it must be through the setter, not directly
  // This is really basic but it could be a lot more complex. We could for example check if there's a unique Id in the user session, and only
  // then we return the course count.
  // From what I'm understanding so far, a private variable you're not able to modify it in the rest of the code, and then you design
  // setters and getters with allowance etc to manage the accessibility to that variable.
  // Looks to me that its also nice because you make sure that through your entire code there won't be a mistake where someone modifies the
  // value for some reason, because they'd have to call the set method and by then they are conscious on what they are doing. But the main reason
  // is probably setting the allowance for who's able to get that value or change that value inside the aplication you're building. Like if the
  // user pays for something, then he can call that. Just wondering, need to see real use cases using classes with privates, getters, setters.

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    //remember, _courseCount is private so we cannot access it outside of the class, but we can inside of the class
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }

  private deleteToken() {
    // we can also have private methods, just as we have private properties (properties means the variables in objects, classes etc)
    console.log("Token deleted");
  }
}

const hiteshh = new User3("h@h.com", "hitesh");
// hiteshh.deleteToken(); //its private we can't

export {};