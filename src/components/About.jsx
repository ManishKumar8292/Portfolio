import { MdOutlineWavingHand } from "react-icons/md";

const About = () => {
  return (
    <div className="container position-relative" id="about">
      <div className="about-content">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="display-6">
              Hi there, I am Manish
              <span>
                <MdOutlineWavingHand />
              </span>
            </h2>

            <h5 className="lead animate fadeInLeft">
              I am a UI Developer with 1.8 years of experience in creating
              responsive, user-friendly web applications using HTML5, CSS3,
              SCSS, Bootstrap, Tailwind CSS, JavaScript, and React. I focus on
              writing clean, efficient code and continuously improving my
              skills. I have a track record of delivering high-quality user
              interfaces and enjoy solving complex design challenges. My goal is
              to contribute to innovative web development projects.
            </h5>
            <div className="wrapper animateBtn fadeInLeft">
              <a
                href="https://drive.google.com/file/d/1N6k-85EKVK5Sqaot0B75kqKyTLboRDat/view?usp=sharing"
                target="_blank"
                className="btn6"
              >
                VIEW MY RESUME
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="animate fadeInRight">
              <img
                src="./image/web developer2.png"
                alt="Web Developer"
                className="h-auto w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
