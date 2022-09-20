import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../feature/statusSlice";
const imageSource = [
  "./images/keo.png",
  "./images/bua.png",
  "./images/bao.png",
];
export default function Thanos() {
  const status = useSelector(selectStatus);
  const index = status.thanosChoose;
  return (
    <div className="flex flex-col items-center">
      <div className="choosen bg-white border-4 border-teal-400 rounded-md opacity-0 animate__bounce animate__animated animate__infinite">
        <img
          width="60px"
          src={index === -1 ? imageSource[0] : imageSource[index]}
          alt=""
        />
      </div>
      <div>
        <img width="180px" src="./images/playerComputer.png" alt="" />
      </div>
    </div>
  );
}
