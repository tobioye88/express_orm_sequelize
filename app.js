import bodyParser from "body-parser";
// import dotenv from "dotenv"; --> i am removing this because it will be called in another file before this page is fully executed
import express from "express";
import { connection } from "./config/config.js"; //--> it's called here
import { bookRouter } from "./routes/book.route.js";

// dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use("/books", bookRouter);

try {
  connection.authenticate().then(() => {
    console.log("authenticated");
  });
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

try {
  await connection.sync({ force: false });
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log("App running on " + PORT);
});
