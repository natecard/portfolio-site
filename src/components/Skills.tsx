import {
  SiDjango,
  SiGooglecloud,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiSwift,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
const Skills: React.FC = () => {
  const skillsIcons = {
    PYTHON: SiPython,
    SWIFT: SiSwift,
    TYPESCRIPT: SiTypescript,
    REACT: SiReact,
    "NEXT.JS": SiNextdotjs,
    JAVASCRIPT: SiJavascript,
    "NODE.JS": SiNodedotjs,
    TAILWINDCSS: SiTailwindcss,
    POSTGRESQL: SiPostgresql,
    PYTORCH: SiPytorch,
    DJANGO: SiDjango,
    GOOGLECLOUD: SiGooglecloud,
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
              <Icon size={54} className="my-4" key={skill} />
              <h3>{skill}</h3>
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};
export default Skills;
