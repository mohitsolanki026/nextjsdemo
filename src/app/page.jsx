"use client";

import { useEffect, useState } from "react";
import { CarouselPlugin } from "./component/CarouselDemo";
import Heading from "./component/Heading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="max-w-[65vw] mx-auto">
      <Heading className={"py-10"}>Home Page</Heading>
      <div className="pb-10 rounded-lg overflow-hidden">
        <CarouselPlugin />
      </div>

      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aliquam
        minima? Nisi dolorum tenetur, autem voluptas omnis, neque excepturi aut
        fugiat dicta libero non iure illum nihil ullam quia eius corrupti.
        Corrupti harum repellendus nisi ad veniam asperiores voluptates. Quaerat
        quam voluptatibus repellendus, eveniet omnis nulla in, esse similique
        ducimus nobis repudiandae vitae iusto, quis ad. Corporis deserunt eum
        possimus, illum eveniet ab excepturi quibusdam aperiam dolor vero
        praesentium a magni impedit molestiae expedita fugit porro modi
        perferendis, ad voluptatum temporibus est non provident. Id, quae hic
        illum inventore quas quod, saepe nemo nam, porro dicta rem vero quos
        necessitatibus.
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aliquam
        minima? Nisi dolorum tenetur, autem voluptas omnis, neque excepturi aut
        fugiat dicta libero non iure illum nihil ullam quia eius corrupti.
        Corrupti harum repellendus nisi ad veniam asperiores voluptates. Quaerat
        quam voluptatibus repellendus, eveniet omnis nulla in, esse similique
        ducimus nobis repudiandae vitae iusto, quis ad. Corporis deserunt eum
        possimus, illum eveniet ab excepturi quibusdam aperiam dolor vero
        praesentium a magni impedit molestiae expedita fugit porro modi
        perferendis, ad voluptatum temporibus est non provident. Id, quae hic
        illum inventore quas quod, saepe nemo nam, porro dicta rem vero quos
        necessitatibus.
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aliquam
        minima? Nisi dolorum tenetur, autem voluptas omnis, neque excepturi aut
        fugiat dicta libero non iure illum nihil ullam quia eius corrupti.
        Corrupti harum repellendus nisi ad veniam asperiores voluptates. Quaerat
        quam voluptatibus repellendus, eveniet omnis nulla in, esse similique
        ducimus nobis repudiandae vitae iusto, quis ad. Corporis deserunt eum
        possimus, illum eveniet ab excepturi quibusdam aperiam dolor vero
        praesentium a magni impedit molestiae expedita fugit porro modi
        perferendis, ad voluptatum temporibus est non provident. Id, quae hic
        illum inventore quas quod, saepe nemo nam, porro dicta rem vero quos
        necessitatibus.
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aliquam
        minima? Nisi dolorum tenetur, autem voluptas omnis, neque excepturi aut
        fugiat dicta libero non iure illum nihil ullam quia eius corrupti.
        Corrupti harum repellendus nisi ad veniam asperiores voluptates. Quaerat
        quam voluptatibus repellendus, eveniet omnis nulla in, esse similique
        ducimus nobis repudiandae vitae iusto, quis ad. Corporis deserunt eum
        possimus, illum eveniet ab excepturi quibusdam aperiam dolor vero
        praesentium a magni impedit molestiae expedita fugit porro modi
        perferendis, ad voluptatum temporibus est non provident. Id, quae hic
        illum inventore quas quod, saepe nemo nam, porro dicta rem vero quos
        necessitatibus.
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aliquam
        minima? Nisi dolorum tenetur, autem voluptas omnis, neque excepturi aut
        fugiat dicta libero non iure illum nihil ullam quia eius corrupti.
        Corrupti harum repellendus nisi ad veniam asperiores voluptates. Quaerat
        quam voluptatibus repellendus, eveniet omnis nulla in, esse similique
        ducimus nobis repudiandae vitae iusto, quis ad. Corporis deserunt eum
        possimus, illum eveniet ab excepturi quibusdam aperiam dolor vero
        praesentium a magni impedit molestiae expedita fugit porro modi
        perferendis, ad voluptatum temporibus est non provident. Id, quae hic
        illum inventore quas quod, saepe nemo nam, porro dicta rem vero quos
        necessitatibus.
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aliquam
        minima? Nisi dolorum tenetur, autem voluptas omnis, neque excepturi aut
        fugiat dicta libero non iure illum nihil ullam quia eius corrupti.
        Corrupti harum repellendus nisi ad veniam asperiores voluptates. Quaerat
        quam voluptatibus repellendus, eveniet omnis nulla in, esse similique
        ducimus nobis repudiandae vitae iusto, quis ad. Corporis deserunt eum
        possimus, illum eveniet ab excepturi quibusdam aperiam dolor vero
        praesentium a magni impedit molestiae expedita fugit porro modi
        perferendis, ad voluptatum temporibus est non provident. Id, quae hic
        illum inventore quas quod, saepe nemo nam, porro dicta rem vero quos
        necessitatibus.
      </div>
    </div>
  );
};
export default Home;
