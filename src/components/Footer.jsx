import { FaLinkedin } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer className="col-md-12 d-flex flex-wrap justify-content-between py-3 my-1 border-top">
        <div className="">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text- text-decoration-none lh-1"
          >
            <svg className="bi text-light" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-light">
            © 2024 Manish Kumar , Inc
          </span>
        </div>

        <ul className="nav  justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-light"
              href="https://www.linkedin.com/in/manish-kumar-bb579a192"
              target="_blank"
            >
              <div className="contact-details mx-1">
                <FaLinkedin />
              </div>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-light"
              href="https://github.com/ManishKumar8292"
              target="_blank"
            >
              <div className="contact-details mx-1">
                <RxGithubLogo />
              </div>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
