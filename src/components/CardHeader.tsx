import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-8", className)}>
      <div className="inline-flex items-center justify-center">
        <StarIcon className="size-9 text-emerald-300 gap-2" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="self-center text-sm lg:text-base max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};
