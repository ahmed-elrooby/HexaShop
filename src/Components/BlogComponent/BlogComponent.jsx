"use client";
import { Context } from "@/Context/Context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const BlogComponent = () => {
  const { productsData } = useContext(Context);

  return (
    <div className="w-[90%] mx-auto my-5">
      <h1 className="block my-[10px] mx-auto font-bold text-center text-[25px] text-[--primary]">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
        {productsData?.map((prod) => (
          <Link
            key={prod.id}
            className="border p-3 transition-all group hover:shadow-2xl hover:bg-[--primary] hover:text-white rounded-lg max-sm:odd:flex-row-reverse md:flex-col border-[--primary] flex items-center gap-2"
            href={`/Blogs/${prod.id}`}
          >
            <Image
              src={prod?.thumbnail}
              alt={prod?.title}
              className="object-cover max-w-[400px]"
              width={200}
              height={200}
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold group-hover:text-white text-[20px] text-[--primary]">
                {prod.title}
              </h1>
              <p>{prod.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
