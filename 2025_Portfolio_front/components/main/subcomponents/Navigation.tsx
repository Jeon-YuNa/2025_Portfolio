import TextBox from "./TextBox";

const Navigation = () => {
  return (
    <nav
      className="flex flex-col justify-end"
      data-aos="fade"
      data-aos-delay="600"
    >
      <a target="_blank" href="tel:010-5318-3450">
        <TextBox text="tell" />
      </a>
      <a target="_blank" href="mailto:hellodbsk@naver.com">
        <TextBox text="email" />
      </a>
      <a target="_blank" href="https://github.com/Jeon-YuNa">
        <TextBox text="github" />
      </a>
      <a target="_blank" href="https://open.kakao.com/o/stGM4sCg">
        <TextBox text="kakaotalk" />
      </a>
    </nav>
  );
};
export default Navigation;
