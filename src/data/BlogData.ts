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
    index: 0,
    image_path: "https://yt3.googleusercontent.com/GsP5Yvc5jOSop4SJf_75wdOYaEbO-7ZyYhnARodAGRnEMh-OQjGPGzUz2ZtzsHPtqFyHGvmbEtI=s900-c-k-c0x00ffffff-no-rj",
    title: "React + Firebase",
    description: "How to Integrate Google Firebase with React Application",
    date: "11-02-2024",
    readTime: "5 Min Read",
    category: "Coding",
    path: "javascript:void(0)",
  },
  {
    index: 1,
    image_path: "https://user-images.githubusercontent.com/5418178/177059352-fe91dcd5-e17b-4103-88ae-70d6d396cf85.png",
    title: "A Deep Dive into the World of JSON Web Tokens (JWT)",
    description: "A journey through secure authentication, decoding the secrets behind digital trust.",
    date: "11-02-2024",
    readTime: "5 Min Read",
    category: "Tutorials",
    path: "javascript:void(0)",
  },
  {
    index: 2,
    image_path: "https://avatars.githubusercontent.com/u/51063788?v=4",
    title: "Introducing Gradio",
    description: "Simplifying Interactive UI Development for Machine Learning Models",
    date: "11-02-2024",
    readTime: "5 Min Read",
    category: "Stories",
    path: "javascript:void(0)",
  },
  {
    index: 3,
    image_path: "https://img.freepik.com/premium-photo/cctv-camera-logo_1003030-9405.jpg",
    title: "The Third Eye",
    description: "Enhancing Security with Machine Learning and Deep Learning",
    date: "11-02-2024",
    readTime: "5 Min Read",
    category: "Stories",
    path: "javascript:void(0)",
  }
];
