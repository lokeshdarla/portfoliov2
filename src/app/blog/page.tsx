import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import Layout from "@/components/Layout";

const getPostContent = () => {
  const file = `src/app/blog/gradio-t.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};


const PostPage = () => {
  const post = getPostContent();
  return (
    <Layout>


      <div className=" flex flex-col bg-white dark:bg-black items-center justify-center relative">

        <div className="my-12 text-center">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-4 bg-blue-500 border-0 dark:bg-gray-700" />
            <span className="absolute px-3  text-blue-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-black">July 08, 2023</span>
          </div>
          <h1 className="text-4xl text-slate-600 dark:text-slate-50 max-w-2xl leading-snug">Gradio: Simplifying Interactive UI Development for ML Models</h1>
        </div>
        <div className="px-5">
          <article className="prose md:prose-md prose-sm  dark:text-white lg:prose-lg prose-img:rounded-xl">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
