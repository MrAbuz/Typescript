// We're gonna be talking about some cases where we wanna be extra cautious, some examples:

function detectType(val: number | string) {
  //return val.toLowerCase(); alone doesnt work because it could be a number
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  // if the id is here or not, imagine we're looking for some id in the database and maybe there's no id being provided
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  // This example is copied from the docs:
  // The typeof of an array is "object". didn't understand why but it is. if we go to a console and say typeof [1,2,3] it says object.
  // Something to keep in mind
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        // this is how you loop through an entire array?
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
// the case that it doesnt cover here is an empty string "". Empty string is included in the truthy and falsy values
