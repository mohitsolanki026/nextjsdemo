import Heading from "@/app/component/Heading";
import { ID, RANDOM_IMG_1200_400 } from "@/constants/constent";
import { blogData } from "@/data/data";
import { spliceParaInWord } from "@/utils/utils";

const Page = async ({ params }) => {
  const { id } = await params;
  const img = (
    await fetch(
      `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/1200/500`
    )
  ).url;
  const post = blogData.find((data) => data.id === id);

  if (!post) {
    return <p>Post not found</p>; // Handle case where post is not found
  }

  const arr = spliceParaInWord(post.desc, 30);
  return (
    <div className="flex bg-white-light p-5 flex-col relative min-h-fit">
      <div className="rounded-md overflow-hidden">
        <img src={img} alt="a" className="min-w-full" />
      </div>
      <div className="min-h-full mx-16 max-md:mx-0 backdrop-blur-lg my-5">
        <div className="pb-5">
          <Heading className="text-4xl">
            <span>{post.title}</span>
          </Heading>
          <span className="flex justify-end max-md:justify-start py-2 space-x-4 font-extralight max-md:text-xs">
            <span>Author: {post.author}</span>
            <span>Posted Date: {post.postedAt}</span>
          </span>
        </div>
        <div className="space-y-3 text-md tracking-widest">
          {arr.map((para, index) => (
            <div
              key={index}
              className="p-2 first-letter:text-2xl first-letter:text-blue-900 first-letter:font-bold"
            >
              <p className="indent-5 capitalize">{para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const ids = blogData.map((item) => item.id);

  return ids.map((id) => ({
    id: encodeURIComponent(id.toString()),
  }));
}

export default Page;
