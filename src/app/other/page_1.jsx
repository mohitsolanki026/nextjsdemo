import { CarouselDemo } from "@/app/component/CarouselDemo";
import Heading from "@/app/component/Heading";
import { blogData } from "@/data/data";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(`https://jsonplaceholder.org/posts/${id}`);
  const response = await data.json();
  const images = await Promise.all(
    Array.from({ length: 5 }).map(
      async (_) =>
        await fetch(
          `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/400/300`
        ).then((res) => res.url)
    )
  );
  return (
    <div className="grid grid-cols-2 gap-10 text-justify mb-10 max-sm:grid-cols-1 ">
      <div className="space-y-3">
        <Heading>{response.title}</Heading>
        <p className="indent-14 mt-10">{response.content}</p>
      </div>
      <div className="mx-5 flex justify-center items-start max-sm:justify-center max-sm:items-center">
        <div className="flex justify-start items-start sticky right-0 top-10 p-2">
          <CarouselDemo images={images} />
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const ids = Array.from({ length: blogData.length }).map(
    (_, index) => index + 1
  );
  return ids.map((id) => ({
    id: id.toString(),
  }));
}

export default page;
