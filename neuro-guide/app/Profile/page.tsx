"use client"
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import NavBar from "../LakshaComps/Comp1";
import Footer from "../NidhiComps/Footer";
import axios, { AxiosResponse } from "axios";

interface Prop {
    children: string;
}

interface Response {
  Question1: number;
  Question2: number;
  Question3: number;
  Question4: number;
  Question5: number;
  Question6: number;
  Question7: number;
  Question8: number;
  diagnosis: string;
  date: string;
}

const Profile = () => {
  const { status, data: session } = useSession();
  const [userResponses, setUserResponses] = useState<Response[]>([]);

  useEffect(() => {
    if (session && session.user && session.user.email) {
      axios
        .get<Response[]>(`/api/fetchAccountValues?email=${encodeURIComponent(session.user.email)}`)
        .then((response: AxiosResponse<Response[]>) => {
          setUserResponses(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user responses:", error);
        });
    }
  }, [session]);
  function formatDate(dateString: string): string {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${month}. ${day}, ${year}`;
  }

  return (
    <>
      <div className="h-screen">
        <Link href="/">
          <button className="m-8 mx-14 btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
        </Link>
        <div className="flex ">
          <div className=" py-20 px-10 mx-14 rounded-3xl skeleton">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 ring-offset-2 w-56 mx-16 my-10 ring rounded-full">
                <div className="avatar placeholder">
                  <div className="bg-violet-600 text-neutral-content rounded-full w-56">
                    <span className="text-7xl">
                      {session?.user?.name?.substring(0, 1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card w-96 ">
              <div className="card-body">
                <h2 className="card-title text-3xl">{session?.user?.name}</h2>
                <p>{session?.user?.email}</p>
                <button className="btn btn-wide bg-blue-700 my-5">
                  {" "}
                  <Link href="/api/auth/signout" className="text-white">
                    Logout
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mockup-window border bg-base-300 shadow-xl">
              <div className=" justify-center px-4 py-16 bg-base-200">
                <p className="text-5xl font-bold">History</p>
                <div className="overflow-x-auto my-10">
                  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr>
                  
                        <th>Diagnosis</th>
                        <th>Date</th>
                        <th>Safety</th>
                        <th>Necessities</th>
                        <th>Heard</th>
                        <th>Active</th>
                        <th>Sleep</th>
                        <th>Stress</th>
                        <th>Joy</th>
                        <th>Contment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* rows */}
                      {userResponses.map((response, index) => (
                        <tr key={index}>
                        
                          <td className="font-bold w-96">{response.diagnosis}</td>
                          <td className="w-96 ">{formatDate(response.date)}</td>
                          <td>{response.Question1}</td>
                          <td>{response.Question2}</td>
                          <td>{response.Question3}</td>
                          <td>{response.Question4}</td>
                          <td>{response.Question5}</td>
                          <td>{response.Question6}</td>
                          <td>{response.Question7}</td>
                          <td>{response.Question8}</td>
                       
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
