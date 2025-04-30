"use client";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useEffect } from "react";
import ImageBox from "./ImageBox";
import UseSkills from "./UseSkills";
import Description from "./Description";
import Buttons from "./Buttons";
import { ProjectData } from "@/types/projects";

const Article = ({ title, skills, desc, siteURL, likes, id }: ProjectData) => {
  const { displayText, startScramble } = useScrambleText(title);
  useEffect(() => {
    startScramble();
  }, [startScramble]);

  return (
    <article>
      <h2 className="font-bold text-4xl pt-6 mb-6">{displayText}</h2>
      <ImageBox siteURL={siteURL} image={title} />
      <UseSkills skills={skills} />
      <Description desc={desc} />
      <Buttons siteURL={siteURL} likes={likes} id={id} />
    </article>
  );
};
export default Article;
