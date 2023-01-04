import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "../utils/api";

import BottomNav from "../components/layouts/BottomNav";
import TopNav from "../components/layouts/TopNav";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <TopNav session={session} />

      <Component {...pageProps} />
      {/* <BottomNav /> */}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
