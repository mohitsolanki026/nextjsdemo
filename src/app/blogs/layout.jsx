import Heading from "../component/Heading";
import BlogPage from "./page";

const layout = ({children}) => {
  return (
    <div className="space-y-10 max-w-[65vw] mx-auto">
      <Heading>Blogs</Heading>
      <div className="flex h-screen gap-2 overflow-auto relative scroll-none py-2">
        <div className="grow-0 pt-4 min-w-40 border-r-2 border-purple-400 border-dashed sticky top-0 max-lg:hidden max-lg:min-w-28 font-bold">
          Sidebar
        </div>
        <div className="grow h-screen pl-5 ">
          {/* <marquee>hello</marquee> */}
          {/* <BlogPage /> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const views = [1, 2];

  return views.map((id) => ({
    view: id.toString(),
  }));
};
export default layout;
