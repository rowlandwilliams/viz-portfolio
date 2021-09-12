import { Route } from "react-router-dom";
import { ImgData } from "../../../types";
import { designData } from "../../utils/designData";
import { importAllImages } from "../ProjectsGrid/ProjectColumns/Project/utils";
import { DesignPageTemplate } from "./DesignPageTemplate/DesignPageTemplate";

const designImages: ImgData[] = importAllImages(
  require.context("../../../assets/img/design/"),
  ".jpg"
);

export const DesignRoutes = () => {
  return (
    <>
      {designData.map((designProject) => (
        <Route exact path={"/" + designProject.imgFolderName}>
          <DesignPageTemplate
            imgName={designProject.imgFolderName}
            projectImages={designImages.filter((image) => {
              const re = new RegExp(designProject.imgFolderName, "g");
              return image.slug.match(re);
            })}
          />
        </Route>
      ))}
    </>
  );
};
