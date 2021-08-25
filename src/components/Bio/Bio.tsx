import { motion } from "framer-motion";
import radial from "../../assets/img/radial.png";

interface Client {
  name: string;
  url: string;
}

const clients: Client[] = [
  { name: "Supernova AI", url: "https://www.supernova.ai/" },
  { name: "Kwolco Ltd", url: "https://www.kwolco.com/" },
  { name: "Farming the Future", url: "https://www.farmingthefuture.uk/" },
  { name: "Global Canopy", url: "https://globalcanopy.org/" },
  { name: "Matthew Shribman", url: "https://www.matthewshribman.com/" },
];

export const Bio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen p-4 mt-20 md:mt-0 md:ml-60 text-sm"
    >
      <div>
        <div className="mb-4">
          <img src={radial} alt="radial" className="w-full md:w-40 mb-4"></img>
          <div className="mb-2">
            I am a developer and designer happiest at the intersection of
            technology, science and visual communication.
          </div>
          <div className="mb-2">
            I am fascinated by interactive visualisation as a means to generate
            value and communicate insights from complex data.
          </div>
          <div className="mb-2">
            I enjoy working iteratively, combining computational thinking with
            creativity to build immersive data-driven experiences.
          </div>
        </div>
        <div className="pb-4">
          <div className="mb-2">
            I have worked on data visualisation projects for various NGO's,
            startups and established organizations including:
          </div>
          <div>
            {clients.map((client) => (
              <a href={client.url} target="_blank" rel="noreferrer noopener">
                <div className="mb-1">
                  - <u>{client.name}</u>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
