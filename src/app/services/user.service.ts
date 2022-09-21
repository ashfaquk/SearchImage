import { user } from "../Models/user";

export class UserService {
  user: user[];

  constructor() {
    this.user = [];
  }

  RegUser(user: user) {

    this.user.push(user);
    console.log("users", this.user);
    return "1";
  }

  getUsers() {
    return this.user;
  }

  loginIn(user: user) {
    var validate = false;
    this.user.forEach(element => {
      console.log("element", element)
      console.log("user", user)
      if (element.username == user.username && element.password == user.password) {
        validate = true;
      }
    });
    return validate;
  }

  //new user('Ashfaq', "Password@1", "Password@1")
}
