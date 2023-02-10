import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../server";

const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "localhost:3000" })],
});

async function main() {
  const result = await client.sayHi.query();
  console.log(result);
}
main();
