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
}).catch(err => console.log(err))
