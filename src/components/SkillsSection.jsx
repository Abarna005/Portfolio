import Html from "../assets/html_1051277.png";
import Css from "../assets/css-3_732190.png";
import Js from "../assets/js_5968292.png";
import ReactLogo from "../assets/technology_13605865.png";
import Figma from "../assets/figma_5968705.png";
import Github from "../assets/github_733609.png";
import Responsive from "../assets/responsive_1454968.png";

const Skillarray = [
  {
    id: 1,
    image: Html,
    name: "HTML5"
  },
  {
    id: 2,
    image: Css,
    name: "CSS3"
  },
  {
    id: 3,
    image: Js,
    name: "JavaScript"
  },
  {
    id: 4,
    image: ReactLogo,
    name: "React.js"
  },
  {
    id: 5,
    image: Figma,
    name: "Figma"
  },
  {
    id: 6,
    image: Github,
    name: "GitHub"
  },
  {
    id: 7,
    image: Responsive,
    name: "Responsive Design"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
        {Skillarray.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                       text-white shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img src={skill.image} alt={skill.name} className="w-6 h-6" />
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
