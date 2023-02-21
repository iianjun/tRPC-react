import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { createContext } from "./context";
import { appRouter } from "./router";
import mongoose from "mongoose";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

mongoose
  .connect("mongodb://127.0.0.1:27017/noter")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Error while connecting to DB");
    console.error(e);
  });

app.use("/trpc", createExpressMiddleware({ router: appRouter, createContext }));
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
