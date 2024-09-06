"use client";
import Image from "next/image";
import { Charts } from "./components/Charts";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrServerCluster } from "react-icons/gr";
export default function Home() {
  return (
    <div className="App text-black h-screen relative max-w-md mx-auto">
      <nav className="w-full absolute top-0 right-0 flex justify-around items-end px-3 py-5">
        <h1 className="text-4xl text-white text-left digital_font">
          Remote
          <br /> Monitoring
        </h1>
        <div className="px-3 py-1  rounded-r-full rounded-l-full text-white bg-black border border-white ">
          Truck_id: 50c-2
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center px-3 pt-[130px] ">
        <div className="w-full  flex flex-col justify-center items-start  rounded-3xl  bg-[#84F2D6] px-3 py-5">
          <h3 className="text-2xl font-bold">Average TKPH</h3>
          <h2 className="text-5xl data_font flex justify-end items-end">
            <p className="font-semibold">3085</p>
            <p className="text-xl  pb-1"> TKPH</p>
          </h2>
          <h4 className="text-2xl">
            Rated TKPH : <span>3760</span>
          </h4>
        </div>
        <div className=" w-full flex justify-center items-center gap-x-2">
          <div className="w-full flex flex-col justify-center items-start  rounded-3xl  bg-[#E8647C] px-3 py-5 mt-3">
            <h3 className="text-2xl font-semibold text-white">Stress</h3>
            <h2 className="text-4xl data_font flex justify-end items-end">
              <p className="font-semibold mr-1">3085</p>
              <p className="text-lg pb-1">psi</p>
            </h2>
            <h4 className="text-sm">
              Rated Psi : <span>3760 psi</span>
            </h4>
          </div>
          <div className="w-full flex flex-col justify-center items-start  rounded-3xl  bg-[#FC6B3F] px-3 py-5 mt-3">
            <h3 className="text-2xl text-white font-bold">Load</h3>
            <h2 className="text-4xl data_font flex justify-end items-end">
              <p className="font-semibold mr-1">3085</p>
              <p className="text-lg pb-1">Tons</p>
            </h2>
            <h4 className="text-sm">
              Rated tons : <span>9890 tons</span>
            </h4>
          </div>
        </div>
        <div className="py-5 w-full flex flex-col justify-start items-start bg-[#DFE0D4] rounded-xl mt-3 px-3">
          <h5 className="text-2xl">TKPH</h5>
          <div className="w-full px-2 flex flex-col justify-start items-start">
            <div className="w-full flex justify-around items-start">
              <p className="w-full text-left">Rated TKPH : 4900</p>
              <div className="w-full  flex justify-center items-center gap-2 text-xs">
                <p>Load : 340 tons</p>
                <p>Speed : 45kph</p>
              </div>
            </div>
            <div className="w-full rounded-r-full rounded-l-full h-[20px] bg-black relative overflow-hidden ">
              <div className="w-[200px] absolute top-0 left-0 h-full bg-green-400 shadow-inner shadow-slate-300 rounded-r-full rounded-l-full"></div>
            </div>
            <div className=" w-full flex justify-around text-black text-xs ">
              {" "}
              <p>low</p> <p>optimal</p> <p>high</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Charts />
        </div>
      </div>
      <div className=" h-[50px] text-gray-400 px-4 rounded-xl mb-3 bg-[rgba(97,97,97,0.36)] backdrop-blur-sm border border-[rgb(66,66,66)] fixed bottom-[50px] left-[50%] -translate-x-1/2 flex justify-center items-center gap-5">
        <div className=" flex flex-col justify-center items-center">
        <MdDashboard className="text-lg" />
        <p className="text-xs">Dashboard</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
        <CgProfile  className="text-lg" />
        <p className="text-xs">Profile</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
        <GrServerCluster  className="text-lg" />
        <p className="text-xs">Clusters</p>
        </div>
      </div>
    </div>
  );
}
