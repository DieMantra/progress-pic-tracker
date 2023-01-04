import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TopNav from "../components/layouts/TopNav";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const session = useSession();
  return (
    <>
      <Head>
        <title>Progress Pic Tracker</title>
        <meta
          name="description"
          content="Exercise progress tracker, image generator"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Image
        src="/beach-cartwheel.jpg"
        alt="hero section cartwheel"
        className="fixed top-0 z-[-10] h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="fixed top-0 z-[-10] h-full w-full bg-gradient-to-b from-white via-white to-purple-100 opacity-90"></div>
      <div className="container z-20 h-[100vh] pt-16">
        <header className="px-3 pt-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Weight Loss Journey!
          </h1>
          <div className="pt-5">
            <p className="font-normal text-gray-600">
              Track your weight loss through photos and a replay of all the
              images.
            </p>
            <p className="font-light text-gray-700">
              Join our community and start your journey today.
            </p>
          </div>
        </header>
        <main>
          <div className="flex w-full justify-center pt-10">
            {session.data?.user ? (
              <div className="flex flex-col items-center justify-center gap-1 ">
                <Link
                  className="btn-primary flex w-48 items-center justify-center"
                  href={"/dashboard"}
                >
                  Go to Dashboard
                </Link>
                <p className="text-sm font-light">or</p>
                <button
                  onClick={() => signOut()}
                  className="text-sm font-light text-violet-800 hover:text-violet-300"
                >
                  Logout of current account
                </button>
              </div>
            ) : (
              <button className="btn-primary" onClick={() => signIn()}>
                Login
              </button>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
