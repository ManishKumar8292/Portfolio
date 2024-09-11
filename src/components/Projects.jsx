/* eslint-disable react/jsx-key */
const projectDetails = [
  {
    projectLink: "https://manishkumar8292.github.io/Web-Design-Website/",
    projectTitle: "Web Design",
    projectButton: "https://manishkumar8292.github.io/Web-Design-Website/",
  },
  {
    projectLink: "https://manishkumar8292.github.io/Food-Site/",
    projectTitle: "Food Site",
    projectButton: "https://manishkumar8292.github.io/Food-Site/",
  },
  {
    projectLink: "https://manishkumar8292.github.io/textulities/",
    projectTitle: "Text Utilities",
    projectButton: "https://manishkumar8292.github.io/textulities/",
  },
  {
    projectLink: "https://manishkumar8292.github.io/blogs-react/",
    projectTitle: "Blogs Site",
    projectButton: "https://manishkumar8292.github.io/blogs-react/",
  },
  {
    projectLink: "https://manishkumar8292.github.io/TyreShop-site/",
    projectTitle: "Tyre Shop",
    projectButton: "https://manishkumar8292.github.io/TyreShop-site/",
  },
  {
    projectLink: "https://manishkumar8292.github.io/Myntra_clone/",
    projectTitle: "Myntra Clone",
    projectButton: "https://manishkumar8292.github.io/Myntra_clone/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container projects">
      <h4 className="py-3 mt-3 heading headingLabel animate fadeInRight">
        Featured Projects
      </h4>
      <div className="row py-3 mb-3">
        {projectDetails &&
          projectDetails.map((item) => (
            <div className="col-sm-6 animate fadeInLeft">
              <div className="card my-3" key={item.id}>
                <iframe
                  className="w-100 h-100 overflow-hidden"
                  src={item.projectLink}
                  title={item.projectTitle}
                ></iframe>
                <div className="card-body d-flex justify-content-between">
                  <h5 className="card-title" key={item.title}>
                    {item.projectTitle}
                  </h5>

                  <a
                    href={item.projectButton}
                    className="btn btn-light"
                    key={item.website}
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
