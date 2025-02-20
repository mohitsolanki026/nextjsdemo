"use client";
import { blogData } from "../../data/data";
import BlogCard_2 from "../component/BlogCard_2";

export const dynamic = "force-static"; // Ensures static generation at build time
// export const revalidate = 60; // (Optional) Enables ISR, regenerating every 60 seconds

const BlogPage = () => {
  
  return (
    <div className="flex gap-5 flex-wrap items-center mx-1 justify-evenly">
      {blogData.map((blog, index) => (
        <BlogCard_2 blog={blog} key={blog.id} index={index + 1} />
        // <BlogCard blog={blog} key={blog.id} index={index+1}/>
      ))}
      {/* <BlogCard_2 blog={blogData[0]} index={1} />
      <BlogCard blog={blogData[0]} index={1}/> */}
    </div>
  );
};

export default BlogPage;
