import React from "react";
import Image from "next/image";

const ImgPage = () => {
  return (
    <div>
      <Image src="/nodejs.png" alt={"node-js-img"} width={427} height={1000} />
      <Image src="/vsc-cb.png" alt={"vsc-img-cb"} width={500} height={1000} />
    </div>
  );
};

export default ImgPage;
