import {
  SiCss3,
  SiDjango,
  SiGit,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJson,
  SiJupyter,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPytest,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
const Skills: React.FC = () => {
  const skillsIcons = {
    Python: SiPython,
    Pytorch: SiPytorch,
    Django: SiDjango,
    Typescript: SiTypescript,
    Java: SiOpenjdk,
    React: SiReact,
    Javascript: SiJavascript,
    "Next.js": SiNextdotjs,
    Tailwindcss: SiTailwindcss,
    git: SiGit,
    Postgresql: SiPostgresql,
    Mongodb: SiMongodb,
    "Node.js": SiNodedotjs,
    JSON: SiJson,
    Jest: SiJest,
    PyTest: SiPytest,
    Jupyter: SiJupyter,
    Googlecloud: SiGooglecloud,
    CSS3: SiCss3,
    HTML5: SiHtml5,
  };
  const skills = Object.keys(skillsIcons);
  return (
    <section className="mx-20 text-center">
      <h1 className="my-20 text-4xl">Skills</h1>
      <div className=" grid grid-cols-4 items-center justify-items-center gap-10">
        {skills.map((skill) => {
          const Icon = skillsIcons[skill as keyof typeof skillsIcons];
          return Icon ? (
            <div className="flex flex-col items-center" key={skill}>
              {" "}
              <Icon size={54} className="my-5" key={skill} />
              <h3>{skill}</h3>
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};
export default Skills;
