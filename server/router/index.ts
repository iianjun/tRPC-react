import { userRouter } from "./user";
import { folderRouter } from "./folder";
import { t } from "../trpc";
export const router = t.router;
export const appRouter = router({
  user: userRouter,
  folder: folderRouter,
});

export type AppRouter = typeof appRouter;
