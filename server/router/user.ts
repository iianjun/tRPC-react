import { t } from "../trpc";
import { z } from "zod";
import UsersController from "../controller/user";
import { userInput } from "../zod";

export const userRouter = t.router({
  create: t.procedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return UsersController.create(input);
    }),
  get: t.procedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const { id } = input;
      return UsersController.get(id);
    }),
  updateUser: t.procedure
    .use((opts) => {
      return opts.next({
        ctx: {
          req: opts.ctx.req,
          res: opts.ctx.res,
          _id: "63f40ae146eead332a240e82",
        },
      });
    })
    .input(userInput)
    .mutation(async ({ input, ctx }) => {
      return UsersController.update(input, ctx._id);
    }),
});

export type UserRouter = typeof userRouter;
