import { BLOG_API, BLOG_IMAGE_PREFIX } from "@/constants/constent";

const BlogPage = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(`${BLOG_API}/${slug}`);
  const data = await res.json();
  const blog = data.blog;
  console.log(blog);

  return (
    <div className="text-4xl">
      <div className="space-y-3">
        <div>
          <img
            className="max-h-screen w-full"
            src={`${BLOG_IMAGE_PREFIX}/${blog.image}`}
            alt={blog.image}
          />
        </div>
        <div className="content text max-w-[65vw] mx-auto">
          <h1 className="h1">{blog.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const res = await fetch(BLOG_API);
  const data = await res.json();
  const arr = data.blogs.map((item) => item.slug);

  return arr.map((slug) => ({
    slug: slug.toString(),
  }));
};

export default BlogPage;
