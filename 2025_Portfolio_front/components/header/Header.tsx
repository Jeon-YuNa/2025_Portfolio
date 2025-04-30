"use client";
import TextBox from "../main/subcomponents/TextBox";
import Clock from "./subcomponents/Clock";
// import'../../../img/headerlogo.png'
// import "moment/locale/ko";
const Header = () => {
  return (
    <header className="py-6" data-aos="fade-down" data-aos-duration="1200">
      <div className="flex justify-between items-start">
        <a href="/">
          <h1 className="mb-3 w-[19vw] h-[9vh]"></h1>
        </a>
        <Clock />
      </div>
      <nav className="flex gap-12 justify-center pl-60">
        <a href="/projects">
          <TextBox text="Project" />
        </a>
        <a href="/skill">
          <TextBox text="skill" />
        </a>
        <a href="/visitors">
          <TextBox text="visitor note" />
        </a>
      </nav>
    </header>
  );
};
export default Header;
