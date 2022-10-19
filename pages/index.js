import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="w-1/2 h-full"></div>
        <div className="bg-cyan-50 flex justify-center  items-center h-full w-1/2 relative">
          <div className="rounded-full bg-indigo-700 w-80 h-80"></div>
          <div className="absolute bottom-0 h-1/2 w-full bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg"></div>
        </div>
      </div>
    </>
  );
}
