import { cn } from "@/utils/cn";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto bg-transparent",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  repoURL,

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  repoURL: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border  justify-start flex flex-col space-y-4",
        className
      )}
    >
      {/* {header} */}
      <Image src={header || ''} unoptimized alt="image" width={600} height={300} className="h-44 object-cover rounded-xl" />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {repoURL && (
          <Link href={repoURL} className="px-3 text-black dark:text-white  dark:border-white/[0.2] py-1 border w-fit my-2 flex items-center gap-2 rounded-2xl text-sm">
            Github <FaExternalLinkAlt />
          </Link>
        )}

        <div className="font-sans font-bold text-xl text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-base text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
