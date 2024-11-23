import { Project } from "som3aware";
import {
  Boxes,
  Bug,
  Hash,
  Megaphone,
  PencilRuler,
  ScanFace,
  ShoppingCart,
} from "lucide-react";

const PROJECTS = [
  {
    id: "1",
    featured: true,
    title: "Editor Setup",
    url: "https://editorsetup.vercel.app/",
    logo: <PencilRuler className="project-logo" />,
    description: "Find your next optimal VS Code Setup.",
  },
  {
    id: "2",
    featured: true,
    title: "Sharp Studio",
    url: "https://sharpstudio.vercel.app/",
    logo: <Hash className="project-logo" />,
    description: "Hackable Image Processing.",
  },
  {
    id: "3",
    featured: true,
    title: "Open Trivia",
    url: "https://open-trivia-demo.vercel.app/",
    logo: <Boxes className="project-logo" />,
    description: "Multi-round trivia game built with Open Trivia API.",
  },
  {
    id: "4",
    featured: false,
    title: "Face AI",
    url: "https://face-ai.surge.sh/",
    logo: <ScanFace className="project-logo" />,
    description: "Detect face expressions, age, and gender.",
  },
  {
    id: "5",
    featured: false,
    title: "Konstant Kreative Ad Analyzer",
    url: "https://lead-gen-ai.vercel.app/",
    logo: <Megaphone className="project-logo" />,
    description: "Detect face expressions, age, and gender.",
  },
  {
    id: "6",
    featured: false,
    title: "Covid Tracker",
    url: "https://github.com/ahmedsomaa/covid-tracker/",
    logo: <Bug className="project-logo" />,
    description: "An app to track covid patients built with Node, React & Auth0.",
  },
  {
    id: "7",
    featured: false,
    title: "Storefront API",
    url: "https://github.com/ahmedsomaa/storefront-api",
    logo: <ShoppingCart className="project-logo" />,
    description: "A node API for a store built with Typescript & PostgreSQL.",
  },
] satisfies Project[];

export default PROJECTS;
