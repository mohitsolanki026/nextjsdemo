import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavLink } from "./NavLink";

const BlogCard = async ({ blog,index }) => {
  const img = (await fetch(blog.imgUrl)).url;
  return (
    <NavLink href={`/posts/${blog.id}`} className={"group"}>
      <Card className="w-[300px] overflow-hidden ring-1">
        <CardContent className="relative ">
          <img src={img} alt={blog.imgName} />
          <span className="absolute -right-5 -top-5 w-16 h-16 text-2xl text-purple-700 font-lobster backdrop-blur-xl pr-3 pt-3 bg-red-200 flex justify-center items-center rounded-full group-hover:text-6xl group-hover:w-40 group-hover:h-40 transition-all duration-150 ease-in-out flex-col">
            <span>{index+1}</span>
            <span className="hidden group-hover:block text-sm animate-pulse">Click For More...</span>
          </span>

        </CardContent>
        <CardHeader>
          <CardTitle className="text-purple-500 font-semibold">{blog.title} </CardTitle>
          <CardDescription className="line-clamp-2 text-[14px] capitalize text-slate-500">
            {blog.desc}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between text-xs ">
          <span>Author: {blog.author}</span>
          <span>Posted At: {blog.postedAt}</span>
        </CardFooter>
      </Card>
    </NavLink>
  );
};

export default BlogCard;
