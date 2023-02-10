import React from "react";
import { trpc } from "./utils/trpc";

const Test = () => {
  const hello = trpc.sayHi.useQuery();
  console.log(hello.data);
  return <div>Hello</div>;
};

export default Test;
