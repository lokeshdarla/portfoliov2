export default interface Article {
  index: number;
  image_path: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  path: string;
}

export const articles: Article[] = [
  {
    index: 3,
    image_path: "/blog/rag.png",
    title: "Retrieval-Augmented Generation",
    description: "Enhancing Security with Machine Learning and Deep Learning",
    date: "11-02-2024",
    readTime: "5 Min Read",
    category: "Stories",
    path: "rag-blog",
  },
  {
    index: 0,
    image_path: "/blog/firebase.png",
    title: "React + Firebase",
    description: "How to Integrate Google Firebase with React Application",
    date: "11-02-2024",
    readTime: "5 Min Read",
    category: "Coding",
    path: "react-firebase",
  },
  {
    index: 1,
    image_path: "/blog/jwt.png",
    title: "A Deep Dive into the World of JSON Web Tokens (JWT)",
    description: "A journey through secure authentication, decoding the secrets behind digital trust.",
    date: "11-02-2024",
    readTime: "5 Min Read",
    category: "Tutorials",
    path: "jwt-auth",
  },
  {
    index: 2,
    image_path: "/blog/gradio.png",
    title: "Introducing Gradio",
    description: "Simplifying Interactive UI Development for Machine Learning Models",
    date: "11-02-2024",
    readTime: "5 Min Read",
    category: "Stories",
    path: "gradio-t",
  },

];
