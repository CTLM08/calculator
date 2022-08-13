import React, { useState } from "react";
import moment from "moment";
import { Icon } from "@iconify/react";

const App = () => {
  const time = new Date();
  const [num1, setnum] = useState(0);
  return (
    <div className="bg-stone-300 overflow-y-hidden w-full h-screen flex items-center absolute justify-center">
      <div className=" w-auto   calculator_shadow2 relative z-[9999]">
        <div className="p-5">
          <div className="flex flex-row text-sm justify-between">
            <div className="gap-14 flex flex-row">
              <div className="mt-1">{moment(time).format("hh:mm")}</div>
              <div className="gap-1 mt-2.5 flex flex-row ml-11">
                <div className="h-1 w-4 bg-black rounded-full "></div>
                <div className="h-1 w-1 bg-black rounded-full "></div>
              </div>
              
            </div>
            <div className="flex flex-row ">
            <Icon icon="ant-design:signal-filled" className="mt-1 ml-4" />
              <Icon icon="akar-icons:wifi" className="h-4 w-4 mt-0.5 ml-1" />
              <Icon
                icon="akar-icons:battery-medium"
                className="ml-1 h-5 w-5 mt-0.5"
              />
            </div>
          </div>
          <input
            value={num1}
            disabled
            className="input2 w-full mt-3   rounded-xl h-20 flex items-center text-right p-5 text-2xl"
          />

          <div className="mt-6 grid grid-cols-4 gap-4 text-xl">
            <div className=" calculator_shadow3 w-full h-16 flex items-center justify-center">
              <button className="">AC</button>
            </div>
            <div className="  calculator_shadow3  w-full h-16 flex items-center justify-center">
              <button className="">
                <Icon icon="bi:backspace-fill" className="w-5 h-5" />
              </button>
            </div>
            <div className="  calculator_shadow3  w-full h-16 flex items-center justify-center">
              <button className="">%</button>
            </div>
            <div className=" calculator_shadow3 w-full h-16 flex items-center justify-center">
              <button className="">
                <Icon icon="fa6-solid:divide" className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-4 text-xl">
            {[
              "7",
              "8",
              "9",
              "x",
              "4",
              "5",
              "6",
              "-",
              "1",
              "2",
              "3",
              "=",
              "0",
              ".",
              "+",
            ].map((e) => (
              <div className="mt-2 calculator_shadow3 w-full h-16 flex items-center justify-center">
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full absolute -bottom-10 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a8a29e"
            fill-opacity="1"
            d="M0,320L34.3,277.3C68.6,235,137,149,206,122.7C274.3,96,343,128,411,165.3C480,203,549,245,617,250.7C685.7,256,754,224,823,202.7C891.4,181,960,171,1029,192C1097.1,213,1166,267,1234,282.7C1302.9,299,1371,277,1406,266.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Icon
        icon="charm:face-smile"
        className="hover:animate-spin absolute left-2 top-2 h-96 w-96 text-stone-400"
      />
    </div>
  );
};

export default App;
