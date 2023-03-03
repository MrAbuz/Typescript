"use strict";
exports.__esModule = true;
// READONLY: suppose that we're adding this id to mongo db. you dont want anyone to change the value of "_id" further down the road. So you add the keyword "readonly"
// "?" OPTIONAL: not all users have creditcard, so we add "?" in the credcardDetails so that parameter is optional. You can add that parameter or not
var myUser = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.email = "h@gmail.com"; // we can change the email
