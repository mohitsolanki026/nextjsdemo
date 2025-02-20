import Heading from "../component/Heading";
import { ID, RANDOM_IMG_1200_600, WEBSITENAME } from "../../constants/constent";
import About from "./About.mdx";

const Page = async () => {
  const img = await fetch(RANDOM_IMG_1200_600);
  return (
    <div className="space-y-5 min-w-screen">
      <div>
        <Heading>About</Heading>
      </div>
      <div>
        <img
          src={img.url}
          alt={ID}
          className="min-w-full max-h-fit object-cover"
        />
      </div>
      <div className="text-justify dark:text-white px-24">
        <About websiteName={WEBSITENAME} />
      </div>
    </div>
  );
};

export default Page;
