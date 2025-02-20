import Link from "next/link";
import { BLOG_API, BLOG_IMAGE_PREFIX } from "@/constants/constent";
import { redirect } from "next/navigation";

// This function will run at build time to fetch the list of blogs and generate static paths.
export async function generateStaticParams() {
  const res = await fetch(BLOG_API);
  const data = await res.json();
  return data.blogs.map((blog) => ({
    slug: blog.slug, // each blog's slug will be used to create the paths
  }));
}

const Page = async () => {
  let data = [];
  try {
    const res = await fetch(BLOG_API);
    data = await res.json();
  } catch (error) {
    redirect("/");
  }

  return (
    <div className="max-w-[65vw] mx-auto my-5 space-y-5 flex flex-col">
      {data.blogs.map((blog) => (
        <Link key={blog.id} href={`/blog-post/${blog.slug}`}>
          <div className="border rounded-lg flex max-md:flex-col space-x-5 ">
            <div className="max-w-[350px] max-md:w-full bg-green-100">
              <img
                src={`${BLOG_IMAGE_PREFIX}/${blog.image}`}
                alt="ID"
                className="rounded-lg min-w-full"
              />
            </div>
            <div>
              <p className="h1 px-5">{blog.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;

// "use client";

// import { BLOG_API, BLOG_IMAGE_PREFIX } from "@/constants/constent";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const page = () => {
//   const [blogs, setBlogs] = useState([]);
//   useEffect(() => {
//     const fetchBlog = async () => {
//       const res = await fetch(BLOG_API);
//       const data = await res.json();
//       setBlogs(data.blogs);
//     };

//     fetchBlog();
//   }, []);
//   return (
//     <div className="max-w-[65vw] mx-auto my-5 space-y-5 flex flex-col">
//       {blogs.map((blog) => (
//         <Link key={blog.id} href={`/blog-post/${blog.slug}`}>
//           <div className="border rounded-lg  flex max-md:flex-col space-x-5 ">
//             <div className="max-w-[350px] max-md:w-full bg-green-100">
//               <img
//                 src={`${BLOG_IMAGE_PREFIX}/${blog.image}`}
//                 alt="ID"
//                 className="rounded-lg min-w-full"
//               />
//             </div>
//             <div className="">
//               <p className="h1 px-5">{blog.title}</p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default page;
