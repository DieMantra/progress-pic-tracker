import { type Session } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface Props {
  session?: Session | null;
}

const TopNav: React.FC<Props> = ({ session: data }) => {
  // const session = useSession();

  // const username =
  //   session.data?.user?.name?.split(" ")[0] +
  //   " " +
  //   session.data?.user?.name?.split(" ")[1]?.split("")[0];

  return (
    <nav className="fixed top-0 flex h-12 w-full  items-center justify-between bg-white bg-opacity-50 px-5 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100"
        >
          12h16.5m-16.5
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={`M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5`}
          />
        </svg>
      </div>
    </nav>
  );
};

export default TopNav;
