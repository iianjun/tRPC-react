import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { z } from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";
export const t = initTRPC.create();
const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "Hi";
  }),
  logToServer: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;
      throw new Error("Wron");
    })
    .mutation((req) => {
      console.log("Client says", req.input);
    }),
});
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/trpc", createExpressMiddleware({ router: appRouter }));
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
export type AppRouter = typeof appRouter;
