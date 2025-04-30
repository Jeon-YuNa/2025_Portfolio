import Image from "next/image";
import { ProjectData } from "../data/projectData";
import { ProjectImages } from "../data/image";
const ImageBox = ({
  siteURL,
  image,
}: Pick<ProjectData, "siteURL" | "image">) => {
  return (
    <div
      className="imgBox h-[30vh] mx-auto mb-3 overflow-hidden"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <a href={siteURL} target="_blank">
        <Image src={ProjectImages[`${image}`]} alt="" className="img"></Image>
      </a>
    </div>
  );
};

export default ImageBox;
