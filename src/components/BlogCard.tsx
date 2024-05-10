import React from "react";
import { articles } from "../data/BlogData";
import Article from "@/data/BlogData";
import Image from "next/image";
import Link from "next/link";

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
              ((category === "Latest" && idx < 3) ||
                item.category === category) && (
                <li
                  key={idx}
                  className="mx-4 py-5 duration-150 hover:rounded-xl hover:border-white"
                >
                  <Link href='/blog' className="space-y-3">
                    <div className="flex items-center gap-x-3">
                      <div className="flex h-20 w-20 items-center justify-center">
                        <Image
                          src={item.image_path}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <div className="flex items-center gap-6 text-xs text-gray-600">
                          <span className="flex items-center gap-2">
                            {item.date}
                          </span>
                          <span className="flex items-center gap-2">
                            {item.readTime} MIN READ
                          </span>
                        </div>
                        <h2 className="mt-2 block text-lg font-medium ">
                          {item.title}
                        </h2>
                        <h3 className="mt-1 text-gray-600 md:w-[700px]">
                          {item.description}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </section>
  );
}

export default BlogCard;
