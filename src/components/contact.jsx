import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container contact animate fadeInLeft" id="contact">
      <h4 className="heading headingLabel py-3 mt-5">Contact</h4>
      <div className="row">
        <div className="col-sm-6">
          <img
            src="/image/contact.png"
            alt="Contact"
            className="h-auto w-100 py-3 px-5"
          />
        </div>
        <div className="col-sm-6">
          <a
            href="manishverma9122@gmail.com"
            className="first text-decoration-none text-light"
            target="_blank"
          >
            <div className="contact-details mx-2">
              <IoIosMail />
            </div>
            manishverma9122@gmail.com
          </a>
          <a href="#+918651643009" className="text-decoration-none text-light">
            <div className="contact-details mx-2">
              <MdAddIcCall />
            </div>
            +91-8651643009
          </a>
          <a
            href="https://github.com/ManishKumar8292"
            className="text-decoration-none text-light"
            target="_blank"
          >
            <div className="contact-details mx-2">
              <FaGithub />
            </div>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manish-kumar-bb579a192"
            className="text-decoration-none text-light"
            target="_blank"
          >
            <div className="contact-details mx-2">
              <FaLinkedin />
            </div>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
