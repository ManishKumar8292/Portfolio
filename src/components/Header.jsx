import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { HashLink as Link } from "react-router-hash-link";
import { MdCastForEducation } from "react-icons/md";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Manish Kumar
          </a>
          <button
            className="navbar-toggler btn btn-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="#about" className="nav-link" aria-current="page">
                  <span className="mx-2">
                    <SiAboutdotme />
                  </span>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#skills" className="nav-link">
                  <span className="mx-2">
                    <GiSkills />
                  </span>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#projects" className="nav-link">
                  <span className="mx-2">
                    <GrProjects />
                  </span>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#experience" className="nav-link">
                  <span className="mx-2">
                    <PiSuitcaseSimpleBold />
                  </span>
                  Experiences
                </Link>
              </li>

              <li className="nav-item">
                <Link to="#education" className="nav-link">
                  <span className="mx-2">
                    <MdCastForEducation />
                  </span>
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#contact" className="nav-link">
                  <span className="mx-2">
                    <BiSolidContact />
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
