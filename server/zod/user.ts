import { z } from "zod";

export const userInput = z.object({
  email: z.string().nullish(),
  password: z.string().nullish(),
  background: z.string().nullish(),
});
