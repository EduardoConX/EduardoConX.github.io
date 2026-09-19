import blogConX from "./assets/blogConX.png";
import pokedex from "./assets/eduardxPokedex.png";

//Experience

export const experienceList = [
  {
    startDate: "Nov 2021",
    endDate: "Present",
    title: "Software Developer",
    company: "Blue People",
    companyLink: "https://bluepeople.com",
    summary:
      "Developing custom web applications for clients across several industries, including integrations with ticket printers, label printers, and card payment terminals.",
    technologies: ["VueJS", "Node", "Express", "MySQL", "AWS"],
  },
  {
    startDate: "Aug 2021",
    endDate: "Nov 2021",
    title: "Frontend Developer",
    company: "Link México",
    companyLink: "https://linkitmexico.com/",
    summary:
      "Built and maintained websites for brands including bits&birds, applab mx, and Linkit México.",
    technologies: ["VueJS"],
  },
  {
    startDate: "Jan 2020",
    endDate: "Aug 2021",
    title: "Software Developer",
    company: "DataTics",
    companyLink: "https://datatics.com.mx/",
    summary:
      "Designed and developed the company payment system with a focus on dependable workflows and maintainable interfaces.",
    technologies: ["VueJS", "PHP", "Laravel", "MySQL"],
  },
];

//Projects
export const projects = [
  {
    name: "Blog con X",
    url: "https://eduardoconx.github.io/blog-con-x/",
    image: blogConX,
    description:
      "Small blog where I share programming concepts that I find interesting.",
    technologies: ["Astro", "Tailwind"],
  },
  {
    name: "Pokedex",
    url: "https://eduardx-pokedex.netlify.app/",
    image: pokedex,
    description:
      "Project to keep track of the Pokémon I catch in the Discord game 'PokeTwo'",
    technologies: ["VueJS", "Tailwind", "Firebase"],
  },
];

//Skills
export const skills = {
  fronted: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "VueJS",
    "ReactJS",
    "Astro",
  ],
  backend: ["Node", "Express", "PHP", "Laravel", "MySQL", "PostgreSQL"],
  otherTools: ["GIT", "AWS"],
};

//Certificates
export const certificates = [
  {
    name: "AWS Certified Cloud Practitioner",
    date: "April 2023",
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/4G3RD01271Q4Q9SE",
  },
  {
    name: "AWS Certified Developer Associate",
    date: "October 2023",
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/G1YX2M728BFE1Q5Z",
  },
  {
    name: "AWS Certified Solutions Architect Associate",
    date: "September 2024",
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/46e17e076d5b4b03a94d12b0c2e4efb9",
  },
];
