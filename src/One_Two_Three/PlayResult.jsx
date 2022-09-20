import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectStatus,
  updateGamePlay,
  updateGameWin,
  updateThanosChoose,
} from "../feature/statusSlice";

export default function PlayResult() {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    dispatch(updateThanosChoose(randomNumber));
    dispatch(updateGamePlay());
    document.getElementsByClassName("choosen")[1].classList.remove("opacity-0");
    document.getElementById("playGame").classList.add("hidden");
  };
  useEffect(() => {
    if (status.ironChoose === 0) {
      if (status.thanosChoose === 2) {
        dispatch(updateGameWin());
      }
    } else if (status.ironChoose === 1) {
      if (status.thanosChoose === 0) {
        dispatch(updateGameWin());
      }
    } else {
      if (status.thanosChoose === 1) {
        dispatch(updateGameWin());
      }
    }
  }, [status.totalGamePlay]);
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-amber-400">
        I'm Hayate and you will be <br /> suffered from my SURIKEN!!!
      </h1>
      <h2 className="text-2xl font-semibold text-green-400">
        Số bàn thắng: <span className="text-amber-400">{status.gameWin}</span>
      </h2>
      <h2 className="text-2xl font-semibold text-green-400">
        Số bàn chơi:{" "}
        <span className="text-amber-400">{status.totalGamePlay}</span>
      </h2>
      <button
        id="playGame"
        className="bg-green-400 text-white p-1 rounded-md font-bold hover:bg-red-400 hidden"
        onClick={handleClick}
      >
        Play game
      </button>
    </div>
  );
}
//bỏ luôn nút phay game, ấn chọn kéo,búa,bao hiện ra kết quả
//thêm các thông báo: số màn thua,hòa
