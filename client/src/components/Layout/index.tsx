import React from "react";
import { LayoutProps } from "./index.d";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import "../../styles/global.scss";
import Header from "../Header";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTExMjN8MHwxfHNlYXJjaHwxMHx8RG9nfGVufDB8MHx8fDE2NzY1MTg5NTU&ixlib=rb-4.0.3&q=80&w=1080";
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
        <img src={imgUrl ? imgUrl : DEFAULT_IMAGE} className="background" />
        <Header onChangeUrl={(url) => setImgUrl(url)} />
        <main className="main">{children}</main>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default Layout;
