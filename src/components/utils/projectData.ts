export const projectData = [
  {
    imgName: "flow",
    projectTitle: "Flow - Agri-data & Insight",
    projectSubTitle:
      "A custom geo-visualisation solution for Kwolco, a Kenyan Agri-research company with deep knowledge of the African sugar market.",
    projectOverview: [
      "Kwolco is an agri-trade research company based in Nairobi, Kenya. They support the ever growing need to supply and feed East and Southern Africa’s expanding population through deep trade focused research, which helps their clients best choose how to grow, trade and move products to market.",
      "Their clients include trade houses, major retailers, banks and consultancy firms, all looking for a better insight into the opaque commodities markets of Eastern and Southern Africa.",
    ],
    projectProblem: [
      "Kwolco collates large volumes of data on the geographic flows of traded sugar in Eastern and Southern Africa but were unsure how to effectively communicate this complex information to  their non-technical clients.",
    ],

    projectSolution: [
      "I worked with Kwolco to develop their initial idea of an interactive map of their data into Flow - immersive, 3D experience of the African sugar supply chain. ",
      "The design process centred around easy-to-use and intuitive features. Dark blues were used for the interface to provide a neutral backdrop for the vivid colours of the visualisation components.",
      "I used deck.gl, a powerful 3D geo-visualisation framework originally developed by Uber, coupled with React to visualise the detailed trade flows travelling into and around the African subcontinent. React Hooks were used to develop custom interactivity which isolated each trade flow on hover to further simplify the complexity of the visualisation.",
      "I also took their data, previously held in Excel spreadsheets and transformed into a scalable relational database that can be updated by their in-house team. Deployment to Heroku also provided a cost-effective hosting solution. ",
      "Flow provides a perfect prototype for Kwolco to bid for investment as they look to expand their research capabilities in this rapidly growing market.",
    ],
    projectTechnologies: ["React", "NodeJS", "deck.gl", "PostgreSQL"],
    backgroundColor: "indigo-500",
    projectDescription:
      "Flow is an interactive tool that allows users to visualise flows of sugar in Southern and Eastern Africa.",
    clientUrl: "https://kwolco.com",
    relevantLinks: ["https://kwolco.com"],

    clientName: "Kwolco",
    projectBullets: [
      "Built for Kenyan agricultural research company Kwolco Ltd.",
      "Design and full-Technologies development.",
    ],
  },
  {
    imgName: "supernova",
    projectTitle: "Supernova AI",
    projectSubTitle:
      "Discovery work for a novel visualisation platform for ESG investment data",
    projectOverview: [
      "Environmental, Social and Governance (ESG) investing is a form of socially responsible investing that prioritizes financial returns alongside a company’s impact on the environment, its stakeholders, and the planet. It is based upon the growing assumption that the financial performance of organizations is increasingly affected by environmental and social factors.",
      "A wealth of different datasets and metrics exist in the ESG space but wealth owners and managers alike still face barriers to understanding the real-world impact of their money. Through thoughtful design and visualisation, Supernova brings together a mutlitude of data-streams to makes the ESG impact of investment portfolios digestable for asset owners, enhancing the wealth management experience.",
    ],
    projectProblem: [
      "Supernova are still early in their development as a company. With designs for their product in place, they approached me and two other developers for assistance in making their vision a reality, in the form of a roadmap to product delivery and early stage discovery work.",
      "The crux of the issue was gaining access to high quality data sources in an already convoluted information space. Supernova were committed to not re-inventing the wheel and becoming just another ESG ratings agency. Their mission is to use information that already exists and convert it into a meaningful visual experience. ",
    ],
    projectSolution: [
      "We began by conducting in-depth research into the scope of data that would be required to fulfill the aim of the platform and each visualisation component. Once data sources had been located, we built infrastructure such as web scrapers to automate data collection.",
      "As the final part of the discovery process, we built a component library using Storybook which laid the foundations for the final full-stack application to be built in the future. It also enabled Supernova AI to fine-tune their image as a unique, design-led sustainability platform as visualisation components that were previously static designs came to life in real-time, allowing design-changes to be incorporated with ease.",
    ],
    backgroundColor: "blue-500",
    clientUrl: "https://supernova.ai",
    relevantLinks: ["https://supernova.ai"],
    clientName: "Supernova AI",
    projectBullets: [
      "Built a component library using Storybook and React / TypeScript.",
      "Created web scrapers to automate collection of large volumes of ESG data.",
    ],
    projectTechnologies: [
      "React",
      "TypeScript",
      "d3.js",
      "Storybook",
      "Puppeteer",
    ],
  },
  {
    imgName: "matopiba",
    projectTitle: "Visualising supply chain data for Global Canopy",
    projectSubTitle:
      "A series of communications materials produced using data from Trase, a supply chain transparency platform.",
    projectOverview: [
      "Trase is a project of Global Canopy, an Oxford-based NGO targeting the market forces destroying nature.",
      "As a data-driven transparency initiative, Trase is revolutionising our understanding of the trade and financing of commodities driving deforestation worldwide. Its unique supply chain mapping approach brings together disparate, publicly available data to connect consumer markets to deforestation and other impacts on the ground related to the production of commodities such as soy, palm oil, timber and beef.",
    ],
    projectProblem: [
      "Trase has the potential to bring about groundbreaking change in the sustainability of commodity supply chains. However, for this to be achieved, it is crucial that the complex data at the heart of Trase and the potential insights that can be generated from this data, are effectively communicated to the end-users of the platform.",
    ],
    projectSolution: [
      "Whilst working for Global Canopy as an intern in the data team, I lead on the production of a series of communication materials focused on data-driven insights from the Trase platform. This involved a series of visualisation-led info-briefs aimed at technical users of Trase and blog-posts for users newer to the platform. Specialist topics explored included the role of deforestation commitments in the production of Brazilian soy and sourcing patterns from the Brazilian MATOPIBA region.",
      "In each case, raw data from Trase was transformed into impactful visualisations using the R package ggplot2. SVG visualisations were then edited using Adobe InDesign to comply with the visual narrative of Trase.",
    ],
    projectLinks: [
      {
        underlinedText: "Info-brief: Who is buying soy from MATOPIBA?",
        link: "http://resources.trase.earth/documents/infobriefs/Infobrief2.pdf",
      },
      {
        underlinedText:
          "Info-brief: Deforestation commitments and Brazilian soy",
        link: "http://resources.trase.earth/documents/infobriefs/infobrief3En.pdf",
      },
      {
        underlinedText: "Blog-post: MATOPIBA: Brazil's new soy frontier",
        link: "https://medium.com/trase/matopiba-brazils-soy-frontier-9ad4cc6fe2d9",
      },
    ],
    projectTechnologies: ["R", "ggplot2", "Adobe InDesign"],
    backgroundColor: "green-300",
    projectUrl:
      "https://medium.com/trase/matopiba-brazils-soy-frontier-9ad4cc6fe2d9",
    repoUrl: "https://github.com/rowlandwilliams/matopiba-vis",
    clientUrl: "https://globalcanopy.org",
    relevantLinks: ["https://globalcanopy.org", "https://trase.earth"],
    clientName: "Global Canopy",
  },
  {
    imgName: "stock-chart",
    projectTitle: "Stock chart component",
    projectSubTitle:
      "Custom stock chart component written in React / Typescript and d3.js.",
    projectOverview: [
      "Stock-charts are perhaps one of the most universally recognisable data visualisations and are often present in SaaS applications. I created this reusable stock chart component using React / TypeScript, d3.js and Redux.",
    ],
    projectTechnologies: ["React", "TypeScript", "d3.js", "Redux"],
    backgroundColor: "pink-500",
    projectUrl: "https://rowlandwilliams.github.io/stock-chart/",
    projectLinks: [
      {
        underlinedText: "Stock-chart",
        link: "https://rowlandwilliams.github.io/stock-chart/",
      },
    ],
    repoUrl: "https://github.com/rowlandwilliams/stock-chart",
    projectDescription:
      "Custom stock chart component written in React / Typescript and d3.js.",
    projectBullets: ["Features brush functionality and time filtering."],
  },
  {
    imgName: "cycle-map",
    projectTitle: "cycle-map",
    projectSubTitle:
      "A visualisation of >500 Santander bike trips across Central London.",
    projectOverview: [
      "Geovisualisation is an effective solution to understand processes occurring across time and space. Using publicly available data from Transport for London, this is a visualisation of >500 bike trips across Central London.",
      "Data on trip start and end date were converted into geo-referenced routes using the Google Maps API. The deck.gl trips layer was then used to create interactive paths of each route.",
    ],
    projectLinks: [
      { underlinedText: "cycle-map", link: "https://cycle-map.herokuapp.com/" },
    ],
    relevantLinks: ["https://deck.gl"],
    projectTechnologies: ["React", "Redux", "deck.gl", "Google Maps"],
    backgroundColor: "purple-300",
    projectUrl: "https://cycle-map.herokuapp.com/",
    repoUrl: "https://github.com/rowlandwilliams/cycle-map",
    projectBullets: [],
  },
  {
    imgName: "co2widget",
    projectTitle: "Reporting Carbon Dioxide levels",
    projectSubTitle:
      "A free-to-use, embeddable widget displaying daily atmospheric Carbon Dioxide levels",
    projectOverview: [
      "The global level of carbon dioxide and its rate of increase are two of the most important factors in deciding the future of our civilisation and life on Earth. ",
      "One might argue that these numbers aren’t of relevance to some people, but then one could argue the same of the FTSE, S&P, Nikkei etc., and certainly the global CO2 level is of much greater consequence. This kind of numerical information does not necessarily motivate change when communicated in isolation, however it can form an extremely powerful element of a larger, blended communication strategy.",
    ],
    projectProblem: [
      "News organisations around the world, from Bloomberg to the Guardian, have begun to regularly publish information about the level of carbon dioxide in the atmosphere, however, for many, the level of carbon dioxide remains an abstract, inaccessible concept.",
      "Presenting carbon dioxide levels needs to be done in a way that is easily understandable, communicates an unambiguous message and provides good context.",
    ],
    projectSolution: [
      "This widget was conceived by science communicator Matthew Shribman. As part of a team of developers I helped bring the idea to life.",
      "This widget updates daily and is collecting data from the Mauna Loa Observatory. The measurements are coordinated by the Scripps Institution of Oceanography. ",
      "The 1000 years graph shows the historical context of CO2 levels. It updates every day. The 20 years graph shows the level of CO2 over the past 20 years, to provide an indication as to whether the rate of increase is slowing down. It updates once annually and does not show a value for the current year.",
      "This widget is embeddable, compact, colourful, easy to understand and free, so that news and weather publishers have every reason to use it, and no reason not to.",
      "The widget is endorsed by the Grantham Institute, the 2 Degrees Institute, Scripps and Reading University’s Department of Meteorology and the World Congress of Science & Factual Producers.",
    ],
    projectLinks: [
      {
        link: "https://co2widget.com",
      },
    ],
    relevantLinks: [
      "https://matthewshribman.com/",
      "https://granthaminstitute.com/",
      "https://2degreesinstitute.org/",
    ],
    projectTechnologies: ["Frontend development", "PHP"],
    backgroundColor: "blue-300",
    projectUrl: "https://co2widget.com/",
    projectDescription:
      "An widget displaying daily atmospheric Carbon Dioxide levels",
    projectBullets: [
      "Embedded by several major broadcasters.",
      "Worked with climate communicator Matthew Shribman and a team of developers.",
    ],
  },
  {
    imgName: "farmingthefuture",
    projectTitle: "Farming the Future Network",
    projectOverview: [
      "Farming the Future serves a diverse collective of land-workers, educators, researchers, lobbyists, activists, organisations and funders, who are dedicated to transforming the current industrial food system.",
      "Emerging from the agroecological food movement, this alliance seeks to facilitate the power of the collective to build a system of regenerative food production and land use that furthers social and environmental justice.",
    ],
    projectProblem: [
      "Within the Farming the Future network are a multitude of geographically dispersed organizations working on food-security related issues. Each year, funds for novel projects are awarded to organisations collaborating within the network to fund their work.",
      "Organizations were finding it difficult to identify similar partners within Farming the Future with whom they could collaborate with on funding proposals.",
    ],
    projectSolution: [
      "Using d3.js, I developed an interactive network graph which allowed a user to link together organizations based on shared characteristics such as size, location and mission-type. Whilst providing much needed clarity to Farming the Future members, this visualisation also served as an effective visual aid during an important meeting Farming the Future had with the UK bidy for lottery funding.",
    ],
    projectTechnologies: ["d3.js"],
    backgroundColor: "red-200",
    projectDescription:
      "An interactive network visualisation for Farming the Future, UK",
    projectBullets: [
      "Farming the Future are a body of organizations involved in food security.",
    ],
    projectLinks: [
      {
        underlinedText: "Network graph",
        link: "https://rowlandwilliams.github.io/farmingthefuture/",
      },
    ],
    relevantLinks: ["https://farmingthefuture.uk/"],
  },
  {
    imgName: "voronoi",
    projectTitle: "Voronoi fractal generator",
    projectOverview: ["Click the link to generate beatiful voronoi fractals!"],
    projectTechnologies: ["React", "d3.js"],
    backgroundColor: "yellow-300",
    projectUrl: "https://rowlandwilliams.github.io/voronoi/",
    repoUrl: "https://github.com/rowlandwilliams/voronoi",
    projectDescription: "Generate randomly coloured voronoi fractals",
    projectBullets: [],
    projectLinks: [
      {
        underlinedText: "Voronoi generator",
        link: "https://rowlandwilliams.github.io/voronoi/",
      },
    ],
  },
];
