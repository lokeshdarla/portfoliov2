import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <div id="works" className="relative z-30 flex flex-col items-center justify-center
    ">
      <div id="works" className="text-left dark:bg-black  dark:bg-grid-white/[0.1] bg-grid-black/[0] relative flex items-start md:justify-start justify-center ">
        <p className="text-4xl sm:text-7xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-700 py-8 mt-10">
          Works
        </p>
      </div>
      <div className="z-45 items-center justify-center flex max-w-7xl">
        <BentoGrid className="max-w-screen  md:px-20 px-2 mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              repoURL={item.repoURL}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>

    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {

    title: "Ollivander's Store",
    description: "Ollivanders Store is a Harry Potter-themed E-Commerce Wand store where you can purchase wands of your choice.",
    header: "https://raw.githubusercontent.com/lokeshdarla/Ollivanders_store/main/working_images/working_image_1.png",
    repoURL: "https://github.com/lokeshdarla/Ollivanders_store",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Chemsite",
    description: "Chemsite is a website designed for a chemistry professor to promote his research work.",
    header: "https://raw.githubusercontent.com/lokeshdarla/portfolio/main/public/projects/chemsite.gif",
    repoURL: "https://github.com/lokeshdarla/chemsite",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Unknown",
    description: "Unknown is a pseudonymous share website where users' data will be encrypted with passlib.",
    header: "https://raw.githubusercontent.com/lokeshdarla/portfolio/main/public/projects/Unknown.gif",
    repoURL: "https://github.com/lokeshdarla/Unknown",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cypher Link",
    description:
      "Cypher Link is a decentralized crowdfunding platform designed to empower indie developers",
    header: "https://raw.githubusercontent.com/lokeshdarla/Cypher-Link/main/working-images/image1.png",
    repoURL: "https://github.com/lokeshdarla/Cypher-Link",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Foodio",
    description: "Foodio is a mobile application built with React Native using Expo for the frontend and Express.js for the backend.",
    header: "https://github.com/lokeshdarla/foodio/raw/main/images/foodio.gif",
    repoURL: "https://github.com/lokeshdarla/foodio",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "TechSynergy",
    description: "ReactJs landing page with jest testing and storybook functionality.",
    header: "https://raw.githubusercontent.com/lokeshdarla/portfolio/main/public/projects/Dashboarddd.gif",
    repoURL: "https://github.com/lokeshdarla/dashboarddd",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Socio-Marketo",
    description: "Socio-Marketo is a decentralized application (dApp) that revolutionizes social media by integrating blockchain technology.",
    header: "https://raw.githubusercontent.com/lokeshdarla/Socio-Marketo/main/images/11.png",
    repoURL: "https://github.com/lokeshdarla/Socio-Marketo",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
