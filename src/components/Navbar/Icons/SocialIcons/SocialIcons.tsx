import { Github } from "./Github/Github";
import { LinkedIn } from "./LinkedIn/Linkedin";

export const SocialIcons = () => {
  return (
    <div className="flex items-center">
      <div className="opacity-30 hover:opacity-70 mr-2">
        <LinkedIn />
      </div>
      <div className="opacity-30 hover:opacity-70">
        <Github repoUrl="https://github.com/rowlandwilliams" />
      </div>
    </div>
  );
};
