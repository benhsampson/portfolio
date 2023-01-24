import clsx from "clsx";
import { motion, HTMLMotionProps } from "framer-motion";
import Image from "next/image";
import { MdNorthEast } from "react-icons/md";

interface Props extends Omit<HTMLMotionProps<"a">, "children"> {
  title: string;
  description: string;
  imageSrc: string;
  action?: string;
  dark?: boolean;
  span?: 1 | 2 | 3;
}

export const PortfolioItem = ({
  title,
  description,
  imageSrc,
  action,
  dark = true,
  span = 1,
  ...props
}: Props) => (
  <motion.a
    {...props}
    className={clsx(
      "relative flex h-[30rem] flex-col overflow-hidden rounded-sm md:h-[38rem]",
      dark ? "bg-neutral-800" : "bg-slate-100",
      span === 3 ? "lg:col-span-3" : span === 2 && "lg:col-span-2"
    )}
    whileHover="hover"
    initial="rest"
    animate="rest"
  >
    <div
      className={clsx(
        "pointer-events-none relative flex-1 overflow-hidden",
        !dark && "bg-white"
      )}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover object-top"
        quality={100}
      />
    </div>
    <div className="flex flex-shrink-0 items-start justify-between p-4 sm:p-8">
      <div>
        <h2
          className={clsx(
            "flex gap-2 text-lg",
            dark ? "text-white" : "text-neutral-800"
          )}
        >
          <span>{title}</span>
          {action && (
            <span
              className={clsx(
                "w-fit rounded-full border py-px px-3 text-base ",
                dark
                  ? "border-white/20 text-white/50"
                  : "border-neutral-300 text-neutral-700"
              )}
            >
              {action}
            </span>
          )}
        </h2>
        <p
          className={clsx(
            "text-lg",
            dark ? "text-neutral-400" : "text-neutral-500"
          )}
        >
          {description}
        </p>
      </div>
      <motion.div
        variants={{
          hover: {
            x: 2,
            y: -2,
          },
        }}
      >
        <MdNorthEast
          size={20}
          className={clsx(dark ? "text-white" : "text-neutral-900")}
        />
      </motion.div>
    </div>
  </motion.a>
);
