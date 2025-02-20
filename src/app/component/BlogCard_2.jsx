import { useEffect, useState } from "react";
import { NavLink } from "./NavLink";

const BlogCard_2 = ({ blog, index }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <NavLink href={`/posts/${blog.id}`} className={"group "}>
      <div className="rounded-lg grid grid-cols-12 w-full overflow-hidden bg-white text-black  ring-1">
        <div className="col-span-4 object-cover">
          <img src={blog.imgUrl} alt={blog.imgName} className="h-[220px]" />
        </div>
        <div className="col-span-8 p-8 capitalize flex flex-col justify-between relative dark:bg-black text-slate-500">
          <div className="text-purple-500 font-semibold absolute">
            {blog.title}
          </div>
          <div className="pt-10 line-clamp-3">{blog.desc}</div>
          <div className="flex justify-between items-center text-xs dark:text-white ">
            <span>
              Author : <span>{blog.author}</span>
            </span>
            <span>
              Posted at : <span> {blog.postedAt}</span>
            </span>
            <span className="absolute -right-5 -top-5 w-20 h-20 text-2xl text-purple-700 font-lobster backdrop-blur-xl pr-3 pt-3 bg-red-200 flex justify-center items-center rounded-full  group-hover:-right-20 group-hover:-top-20 transition-all duration-1000 ease-in-out flex-col">
              <span>{index}</span>
            </span>

            <div className="absolute -right-[50%] top-0 w-[50%] h-full text-6xl text-purple-700 font-lobster backdrop-blur-xl pr-3 pt-3 bg-green-100 flex justify-center items-center group-hover:right-[0%] transition-all duration-500 ease-in-out flex-col">
              <span>{index}</span>
              <span className="text-sm animate-pulse">
                Click For More Details...
              </span>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default BlogCard_2;
