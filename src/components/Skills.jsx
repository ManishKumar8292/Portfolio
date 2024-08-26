import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { DiFirebase } from "react-icons/di";
import { IoLogoSass } from "react-icons/io5";
import { SiJquery } from "react-icons/si";

const skillsData = [
  {
    skillIcon: <FaHtml5 />,
    skillName: "HTML5",
  },
  {
    skillIcon: <IoLogoCss3 />,
    skillName: "CSS3",
  },
  {
    skillIcon: <BsFiletypeScss />,
    skillName: "SCSS",
  },
  {
    skillIcon: <IoLogoSass />,
    skillName: "Sass",
  },

  {
    skillIcon: <IoLogoJavascript />,
    skillName: "JavaScript",
  },
  {
    skillIcon: <SiJquery />,
    skillName: "jQuery",
  },
  {
    skillIcon: <FaBootstrap />,
    skillName: "Bootstrap",
  },
  {
    skillIcon: <RiTailwindCssFill />,
    skillName: "Tailwind CSS",
    percentage: "80%",
  },
  {
    skillIcon: <GrReactjs />,
    skillName: "ReactJS",
  },
];

function Skills() {
  return (
    <div className="container" id="skills">
      <h4 className="headingLabel animateskill fadeInLeft">My Skills</h4>

      <div className="skills row animateskill fadeInRight">
        {skillsData.map((skill) => (
          <div className="skill-1 col-sm-3" key={skill.IconDetails}>
            <p className="" key={skill.skilldet}>
              {" "}
              <span className="icon-size" key={skill.IconName}>
                {skill.skillIcon}
              </span>
              <span>{skill.skillName}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
