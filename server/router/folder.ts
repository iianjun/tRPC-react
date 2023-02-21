import { t } from "../trpc";
import { z } from "zod";
import FilesController from "../controller/folder";

export const folderRouter = t.router({
  create: t.procedure
    .use((opts) => {
      return opts.next({
        ctx: {
          req: opts.ctx.req,
          res: opts.ctx.res,
          _id: "63f40ae146eead332a240e82",
        },
      });
    })
    .input(
      z.object({
        name: z.string(),
        clientX: z.number(),
        clientY: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return FilesController.create(input, ctx._id);
    }),
  getFolders: t.procedure
    .use((opts) => {
      return opts.next({
        ctx: {
          req: opts.ctx.req,
          res: opts.ctx.res,
          _id: "63f40ae146eead332a240e82",
        },
      });
    })
    .query(async ({ ctx }) => {
      return FilesController.getFolders(ctx._id);
    }),
});

export type FolderRouter = typeof folderRouter;
