import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

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
      <Link href={'/#blog'} className="p-3 fixed top-10 left-10 rounded-2xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
        <IoIosArrowRoundBack size={20} />
      </Link>
      <div className="my-12 text-center">
        <h1 className="text-4xl text-slate-600 max-w-2xl leading-snug">Gradio: Simplifying Interactive UI Development for ML Models</h1>
        <p className="text-slate-400 mt-2">July 08, 2023</p>
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
