import express, {
  Application,
} from "express";
const app: Application = express();


var routes = require('./routes/route.ts');
app.use("/", routes)


app.listen(5000, () => console.log("server running on port 5000"))