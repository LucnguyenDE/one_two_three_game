import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStatus, updateIronChoose } from "../feature/statusSlice";

const imageSource = [
  "./images/keo.png",
  "./images/bua.png",
  "./images/bao.png",
];
export default function IronMan() {
  const status = useSelector(selectStatus);
  const index = status.ironChoose;
  const dispatch = useDispatch();
  const handleClick = (e) => {
    console.log(
      "e.currentTarget.id: ",
      e.currentTarget.id,
      typeof e.currentTarget.id
    );
    dispatch(updateIronChoose(Number(e.currentTarget.id)));
    document.getElementsByClassName("choosen")[0].classList.remove("opacity-0");
    document.getElementById("playGame").classList.remove("hidden");
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="choosen bg-white border-4 border-teal-400 rounded-md opacity-0 animate__bounce animate__animated animate__infinite">
        <img
          // className="animate__bounce animate__animated animate__infinite"
          width="60px"
          src={index === -1 ? imageSource[0] : imageSource[index]}
          alt=""
        />
      </div>
      <div>
        <img width="180px" src="./images/player.png" alt="" />
      </div>
      <div className="space-x-2">
        <button
          id="0"
          className=" bg-white hover:bg-sky-400 p-2 border-4 border-amber-400 rounded-md"
          onClick={handleClick}
        >
          <img width="30px" src={imageSource[0]} alt="" />
        </button>
        <button
          id="1"
          className=" bg-white hover:bg-sky-400 p-2 border-4 border-amber-400 rounded-md"
          onClick={handleClick}
        >
          <img width="30px" src={imageSource[1]} alt="" />
        </button>
        <button
          id="2"
          className=" bg-white hover:bg-sky-400 p-2 border-4 border-amber-400 rounded-md"
          onClick={handleClick}
        >
          <img width="30px" src={imageSource[2]} alt="" />
        </button>
      </div>
    </div>
  );
}
