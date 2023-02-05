import { DiAndroid, DiTerminal,DiReact ,DiJavascript1, DiWebplatform,DiHtml53DEffects } from "react-icons/di";
import { SiJava, SiFirebase, SiGit,SiNextDotJs,SiThreema ,SiCss3,SiTailwindcss} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "Web Development",
    Component: DiWebplatform,
    title: "Web Development",
    Description: () => <>I work on web app, on different technology.</>,
  },
  {
    slug: "React",
    Component: DiReact,
    title: "React",
    Description: () => <>Currently working with React.js for web app development. </>,
  },
  {
    slug: "SiNextDotJs",
    Component: SiNextDotJs,
    title: "Next.js",
    Description: () => <>Currently working with Next.js for web app development.</>,
  },
  {
    slug: "SiThreema",
    Component: SiThreema,
    title: "Three.js",
    Description: () => <> working with Three.js for web app development.</>,
  },
  {
    slug: "DiJavascript1",
    Component: DiJavascript1,
    title: "Java Script",
    Description: () => <>I can code in plane Java script.</>,
  },
  {
    slug: "DiHtml53DEffects",
    Component: DiHtml53DEffects,
    title: "HTML",
    Description: () => <>I also work in Html having strong knowledge of sementic elements.</>,
  },
  {
    slug: "SiCss3",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Having strong knowledge of css </>,
  },
  {
    slug: "SiTailwindcss",
    Component: SiTailwindcss,
    title: "Tailwindcss",
    Description: () => <>currently working with tailwindcss ,Having strong knowledge of Tailwindcss </>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
