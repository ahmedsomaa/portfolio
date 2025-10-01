import { Education, Experience } from "portfolio";

const ABOUT = {
  education: [
    {
      id: "1",
      institute: "Arizona State University",
      period: { from: "Jan, 2022", to: "Dec, 2023" },
      degree: "Masters of Science in Engineering in Software Engineering",
    },
    {
      id: "2",
      institute: "The American University in Cairo",
      period: { from: "Sep, 2014", to: "Aug, 2019" },
      degree: "Bachelor of Science in Computer Engineering",
    },
  ],
  experience: [
    {
      id: "1",
      period: { to: "present", from: "Jan, 2024" },
      company: { name: "Herwin", url: "https://www.herwin.tech/" },
      role: {
        title: "Growth Engineer",
        description:
          "Outsourced to Reconciled where I was building the first reverse invoice management platform for staffing agencies",
      },
    },
    {
      id: "2",
      period: { to: "Dec, 2023", from: "May, 2023" },
      company: { name: "Nodogoro", url: "https://www.nodogoro.com/" },
      role: {
        title: "Software Engineer II",
        description:
          "Developed multiple LLM-powered applications using OpenAI, LangChain and Next.js",
      },
    },
    {
      id: "3",
      period: { to: "May, 2023", from: "Nov, 2021" },
      company: {
        name: "New Smart Egypt",
        url: "https://www.linkedin.com/company/new-smart-egypt-integrated-solutions",
      },
      role: {
        title: "Software Engineer I",
        description:
          "Worked on building web/mobile apps and integrating between multiple vendor systems",
      },
    },
    {
      id: "4",
      company: { name: "VOIS", url: "https://www.linkedin.com/company/vois/" },
      period: { to: "Oct, 2021", from: "Jul, 2020" },
      role: {
        title: "Software Engineer",
        description:
          "Worked on building and providing technical support for multiple web apps",
      },
    },
  ],
} satisfies
  | Record<"education", Education[]>
  | Record<"experience", Experience[]>;

export default ABOUT;
