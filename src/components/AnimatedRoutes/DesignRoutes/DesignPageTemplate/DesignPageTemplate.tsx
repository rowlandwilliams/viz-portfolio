import { motion } from "framer-motion";
import { ImgData } from "../../../../types";
import { FadeInOnScrollComponent } from "../../CodeRoutes/CodePageTemplate/FadeInOnScrollComponent/FadeInOnScrollComponent";

interface Props {
  imgName: string;
  projectImages: ImgData[];
}

export const DesignPageTemplate = ({ projectImages }: Props) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={
        "w-full p-4 md:py-8 bg-white transition-all ease-in-out duration-150 mt-24 md:mt-8 md:ml-20 md:mr-16 max-w-7xl "
      }
    >
      <div className="relative md:ml-40">
        {projectImages.map((imgObject) => (
          <FadeInOnScrollComponent threshold={0.05}>
            <img
              src={imgObject.module.default}
              alt={imgObject.slug}
              className="mb-8"
            ></img>
          </FadeInOnScrollComponent>
        ))}
      </div>
    </motion.div>
  );
};
