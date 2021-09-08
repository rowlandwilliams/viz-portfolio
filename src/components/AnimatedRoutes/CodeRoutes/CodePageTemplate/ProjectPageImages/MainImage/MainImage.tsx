import { AnimatePresence, motion } from "framer-motion";

interface Props {
  projectUrl: string | undefined;
  mainImgSrc: string;
  imgName: string;
  imgHeight: number;
}

export const MainImage = ({ projectUrl, mainImgSrc, imgHeight }: Props) => {
  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer">
      <AnimatePresence exitBeforeEnter>
        <motion.img
          key={mainImgSrc}
          src={mainImgSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-md object-scale-down"
          style={{ height: imgHeight }}
        />
      </AnimatePresence>
    </a>
  );
};
