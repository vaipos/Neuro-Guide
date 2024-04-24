"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <>
      <div className="px-5 py-8 flex justify-between mx-8 ">
        <Link href="/" className="font-bold text-2xl">
          NeuroGuide
        </Link>
        <div className="flex ">
          <Link href="/Quiz" className="px-10 text-lg">
            Quiz
          </Link>
          <Link href="https://colab.research.google.com/drive/1wXla-izcZTCDFpQlhoe0baSwuwGiadzN#scrollTo=AhvVBVVhLZm4" className="px-10 text-lg">
            Chat
          </Link>
          <Link href="/AboutUs" className="px-10 text-lg">
            About Us
          </Link>

          <div className="flex items-center ml-4 -my-9 bg-transparent">
            {status === "authenticated" && (
              <div className="dropdown dropdown-bottom dropdown-end bg-transparent">
                <div
                  tabIndex={0}
                  role="button"
                  className=" bg-transparent border-transparent"
                >
                  <div className="avatar">
                    <div className="w-17 rounded-full">
                      <div className="avatar placeholder">
                        <div className="bg-violet-600 text-neutral-content rounded-full w-12">
                
                          <span className="text-lg">
                            {session.user?.name?.substring(0, 1)}
                          </span>
                  
                         
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                              <Link href="/Profile">
                  <li>
                    <a>{session.user?.email}</a>
                  </li>
                  </Link>
                  <li>
                    <Link href="/api/auth/signout" className="">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">
                <div className="flex">
                  <svg
                    className="h-7 w-8 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="my-1">Login</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
