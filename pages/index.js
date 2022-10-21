import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="w-1/2 h-full">
          <div className="w-full h-1/6 flex pt-4 pl-5">
            <span className="h-3 w-3 bg-black rounded-full inline-block mt-1.5 mr-2"></span>
            <p>
              <b>Untitled UI</b>
            </p>
          </div>
          <div className="w-full h-4/6 flex justify-center items-center">
            <div>
              <p className="text-4xl mb-3 font-normal">
                <b>Welcome back</b>
              </p>
              <p className="font-normal text-gray-500 mb-10">
                Welcome back! Please enter your details
              </p>
              <p>
                <b>Email</b>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-1"
                  placeholder="Email address"
                ></input>
              </p>
              <p className="mt-3">
                <b>Password</b>
              </p>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-1"
                placeholder="Password"
              ></input>
              <div className="flex mt-4 mb-4">
                <input type="checkbox" className=" accent-purple-700"></input>
                <p className="ml-2 text-xs mr-6">
                  <b>Remember for 30 days</b>
                </p>
                <p className=" text-purple-700 text-xs ml-3">
                  Forgot password?
                </p>
              </div>
              <div className="w-full h-10 bg-purple-700 rounded-md flex justify-center items-center mb-3">
                <p className="text-white">Sign in</p>
              </div>
              <div className="w-full h-10 rounded-md flex justify-center items-center border-solid border-gray-300 border-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                  className=" w-6 mr-2"
                ></img>
                <p className="">Sign in with Google</p>
              </div>
              <div className="w-full h-10 flex justify-center items-center mt-6">
                <p className=" text-gray-500">Don't have an account?</p>
                <p className=" text-purple-700 ml-2">Sign Up</p>
              </div>
            </div>
          </div>
          <div className="w-full h-1/6">
            <p className="mt-20 ml-5 text-gray-400">© Untitled UI 2069</p>
          </div>
        </div>
        <div className=" bg-slate-100 flex justify-center  items-center h-full w-1/2 relative">
          <div className="rounded-full bg-indigo-700 w-80 h-80"></div>
          <div className="absolute bottom-0 h-1/2 w-full bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg"></div>
        </div>
      </div>
    </>
  );
}
