import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";

interface Props extends HTMLMotionProps<"a"> {}

export const Button = ({ children, className, ...props }: Props) => (
  <motion.a
    {...props}
    className={clsx(
      className,
      "inline-flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-white"
    )}
    whileHover="hover"
    initial="rest"
    animate="rest"
  >
    {children}
    <motion.span
      variants={{
        hover: {
          x: 2,
        },
      }}
    >
      <MdArrowForward />
    </motion.span>
  </motion.a>
);
