"use client";
import TextBox from "../main/subcomponents/TextBox";
import moment from "moment";
import { useState } from "react";
// import'../../../img/headerlogo.png'
// import "moment/locale/ko";
const Header = () => {
  const Time = moment().format("hh:mm:ss");
  const TimeAMPM = moment().format("a");

  return (
    <header className="py-6" data-aos="fade-down" data-aos-duration="1200">
      <div className="flex justify-between items-start">
        <a href="/">
          <h1 className="mb-3 w-[19vw] h-[9vh]"></h1>
        </a>
        <div>
          <span className="font-black text-3xl mr-4">{TimeAMPM}</span>
          <span className="font-black text-6xl inline-block w-[18vw]">
            {Time}
          </span>
        </div>
      </div>
      <nav className="flex gap-12 justify-center pl-60">
        <a href="/projects">
          <TextBox text="Project" />
        </a>
        <a href="/skill">
          <TextBox text="skill" />
        </a>
        <a href="/visitors">
          <TextBox text="visitor's note" />
        </a>
      </nav>
    </header>
  );
};
export default Header;
