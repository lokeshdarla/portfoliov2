import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import Layout from '@/components/Layout';

interface PostProps {
  params: {
    slug: string;
  };
}

const getPostContent = (slug: string) => {
  const filePath = `src/app/my-shelf/${slug}.md`;
  const content = fs.readFileSync(filePath, 'utf8');


  const matterResult = matter(content);
  return matterResult;
};

const PostPage = ({ params }: PostProps) => {
  const post = getPostContent(params.slug);

  return (
    <Layout>
      <div className="flex flex-col bg-white dark:bg-black items-center justify-center relative">
        <div className="my-12 text-center">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-4 bg-blue-500 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 text-blue-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-black">
              {post.data.date}
            </span>
          </div>
          <h1 className="text-4xl text-slate-600 dark:text-slate-50 max-w-2xl leading-snug">
            {post.data.title}
          </h1>
        </div>
        <div className="">
          <article className="prose     prose-img:rounded-xl dark:prose-invert">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
