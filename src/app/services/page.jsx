import React from "react";
import Services from "./Services.mdx";
import Heading from "../component/Heading";
import { ID, RANDOM_IMG_1200_600, WEBSITENAME } from "../../constants/constent";
const page = async () => {
  const img = await fetch(RANDOM_IMG_1200_600);
  return (
    <div className="space-y-5 min-w-screen">
      <div>
        <Heading>Services</Heading>
      </div>
      <div>
        <img src={img.url} alt={ID} className='min-w-full max-h-fit object-cover'/>
      </div>
      <Services websiteName={WEBSITENAME} className="mt-16 px-10" />
    </div>
  );
};

export default page;
