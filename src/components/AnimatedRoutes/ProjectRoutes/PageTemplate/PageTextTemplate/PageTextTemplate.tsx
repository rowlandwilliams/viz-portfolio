import { FadeInOnScrollComponent } from "../FadeInOnScrollComponent/FadeInOnScrollComponent";

interface Props {
  headerText: string;
  sectionParagraphs: string[] | undefined;
}

export const PageTextTemplate = ({ headerText, sectionParagraphs }: Props) => {
  return (
    <FadeInOnScrollComponent>
      {sectionParagraphs ? (
        <div className={"text-lg py-16"}>
          <div>
            <div className="text-xl font-tt-interfaces-demi mb-6">
              {headerText}
            </div>
            {sectionParagraphs.map((sectionParagraph) => (
              <div className="py-2">{sectionParagraph}</div>
            ))}
          </div>
        </div>
      ) : null}
    </FadeInOnScrollComponent>
  );
};
