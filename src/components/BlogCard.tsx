import React from "react";
import { articles } from "../data/BlogData";
import Article from "@/data/BlogData";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  category: string;
}

function BlogCard({ category }: BlogCardProps) {
  return (
    <section className="py-10">
      <div className="">
        <ul className="flex flex-col items-start space-y-3 divide-y">
          {articles.map(
            (item: Article, idx: number) =>
              ((category === "Latest") ||
                item.category === category) && (
                <Link href={`/my-shelf/${item.path}`}
                  key={idx}
                  className="mx-4 py-5 duration-150 dark:border-gray-500 border-gray-300 hover:border-gray-400 dark:hover:border-gray-400"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-x-3 justify-end">
                      <div className="flex h-20 w-20 items-center justify-center">
                        <Image
                          src={item.image_path}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="rounded-lg "
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <div className="flex items-center gap-6 text-xs text-gray-600">
                          <span className="flex items-center gap-2 dark:text-gray-300">
                            {item.date}
                          </span>
                          <span className="flex items-center gap-2 dark:text-gray-300">
                            {item.readTime} MIN READ
                          </span>
                        </div>
                        <Link href={`/my-shelf/${item.path}`} className="mt-2 block text-md font-medium dark:text-gray-200 ">
                          {item.title}
                        </Link>
                        <h3 className="mt-1 text-gray-600 text-sm md:w-[700px] dark:text-gray-300">
                          {item.description}
                        </h3>
                      </div>
                      <Link href={`/my-shelf/${item.path}`} >
                        <FaArrowRight className="dark:text-white font-thin" />
                      </Link>
                    </div>
                  </div>
                </Link>
              )
          )}
        </ul>
      </div>
    </section>
  );
}

export default BlogCard;
