import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const getPostContent = () => {
  const file = `src/app/blog/gradio-t.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};


const PostPage = () => {
  const post = getPostContent();
  return (
    <div className=" flex flex-col items-center justify-center relative">
      <Link href={'/#blog'} className="p-3   self-start m-5 rounded-full border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
        <FaChevronLeft size={15} className="text-blue-700" />
      </Link>
      <div className="my-12 text-center">
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-4 bg-blue-500 border-0 dark:bg-gray-700" />
          <span className="absolute px-3  text-blue-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">July 08, 2023</span>
        </div>
        <h1 className="text-4xl text-slate-600 max-w-2xl leading-snug">Gradio: Simplifying Interactive UI Development for ML Models</h1>
      </div>
      <div className="px-5">
        <article className="prose md:prose-md prose-sm lg:prose-lg prose-img:rounded-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default PostPage;
