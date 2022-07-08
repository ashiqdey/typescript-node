import "reflect-metadata";
import express, {
  Application,
} from "express";
const app: Application = express();
import { AppDataSource } from "./data-source"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





var typesRoutes = require('./routes/types.route.ts');
app.use("/types", typesRoutes)

var ormRoutes = require('./routes/orm.route.ts');
app.use("/orm", ormRoutes)




AppDataSource.initialize().then(async () => {

  console.log("Database connected");

  app.listen(5000, () => console.log("server running on port 5000"))

  /*
  console.log("Inserting a new user into the database...")
  const user = new User()
  user.firstName = "Timber"
  user.lastName = "Saw"
  user.age = 25
  await AppDataSource.manager.save(user)
  console.log("Saved a new user with id: " + user.id)

  console.log("Loading users from the database...")
  const users = await AppDataSource.manager.find(User)
  console.log("Loaded users: ", users)

  console.log("Here you can setup and run express / fastify / any other framework.")
  */
}).catch(err => console.log(err))
