import React from "react";
import { LayoutProps } from "./index.d";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import "../../styles/global.scss";
import Header from "../Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [imgUrl, setImgUrl] = useState<string>("");
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <img src={imgUrl} className="background" />
        <Header onChangeUrl={(url) => setImgUrl(url)} />
        <main>{children}</main>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default Layout;
