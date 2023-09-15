//ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

//DB Connect
import { dbConnect } from "../config/db";

const app = express();

//JSON Middleware
app.use(express.json())

//Routes
import router from "./router";

// Logger
import Logger from "../config/logger";

const port = config.get<number>("port")

app.use("/api", router)

app.listen(port, async () => {
  await dbConnect()
  //Logger
  Logger.info(`Server is runnig on Port: ${port}`)
})