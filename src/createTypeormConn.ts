import { createConnection } from "typeorm";
import { User } from "./entity/User";

export const createTypeormConn = () => {
  createConnection()
    .then(async connection => {
      console.log("Inserting a new user into the database...");
      const user = new User();
      user.username = "xxx";
      user.email = "xxx@xxx.xxx";
      user.password = "123456";
      await connection.manager.save(user);
      console.log("Saved a new user with id: " + user.id);
      console.log("Loading users from the database...");
      const users = await connection.manager.find(User);
      console.log("Loaded users: ", users);
      console.log(
        "Here you can setup and run express/koa/any other framework."
      );
    })
    .catch(error => console.log(error));
};
