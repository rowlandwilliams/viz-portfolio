import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  projectUrl: string | undefined;
  mainImgSrc: string;
  imgName: string;
}

export const MainImage = ({ projectUrl, mainImgSrc, imgName }: Props) => {
  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer">
      <div className="rounded-md h-full">
        <AnimatePresence exitBeforeEnter>
          <motion.img
            key={mainImgSrc}
            src={mainImgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-md h-96 md:h-144 object-scale-down"
          />
        </AnimatePresence>
      </div>
    </a>
  );
};
