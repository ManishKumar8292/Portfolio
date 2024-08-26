const Experience = () => {
  return (
    <div id="experience" className="container experience">
      <h4 className="heading py-3 headingLabel mb-4 animate fadeInRight">
        Experiences
      </h4>
      <div className="row mb-3" style={{ paddingRight: "27px" }}>
        <div className="card my-2 mx-3 pt-3 animate fadeInLeft">
          <h6 className="card-header title d-flex justify-content-between">
            <div className="">
              <p>Software Engineer (UI Developer)</p>
              <p>Healthsignz Technologies Pvt Ltd.</p>
            </div>
            <div>
              <p>07/2022-02/2024</p>
              <p>Bengaluru, Karnataka</p>
            </div>
          </h6>
          <div className="card-body">
            <p className="card-text">
              Crafting seamless user experiences through clean, efficient code
              and innovative design solutions as a front-end developer.
            </p>
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary"
            >
              Details...
            </a>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content custom-modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="card my-2">
                  <h6 className="card-header title d-flex justify-content-between">
                    <div className="">
                      <p>Software Engineer (UI Developer)</p>
                      <p>Healthsignz Technologies Pvt Ltd.</p>
                    </div>
                    <div>
                      <p>07/2022-02/2024</p>
                      <p>Bengaluru, Karnataka</p>
                    </div>
                  </h6>
                  <div className="card-body">
                    <ul className="card-text list-disc">
                      <li>
                        Closely Interacted with UX team about requirements.
                      </li>
                      <li>Converted PSD to HTML Code with effective Design.</li>{" "}
                      <li>
                        Added HTML, CSS, Bootstrap, SCSS and JavaScript code to
                        make it fully responsive compatible with desktop, tab
                        and mobile interface.
                      </li>{" "}
                      <li>
                        Worked on Navigation menu using React-Router. •Worked on
                        API calls to fetch data and Display available
                        appointment slots for date and time.
                      </li>{" "}
                      <li>
                        Worked on Redux for enhancing scalability and
                        maintainability.
                      </li>{" "}
                      <li>
                        Improved application performance by optimizing images,
                        reducing rendering time and implementing lazy loading
                        techniques.
                      </li>{" "}
                      <li>
                        Worked on RESTful API calls to fetch data and Display
                        available appointment slots for date and time.
                      </li>
                      <li>
                        Implemented Redux for enhancing scalability and
                        maintainability.
                      </li>{" "}
                      <li>
                        Added Hooks to allow function components to have access
                        to state and other React features.
                      </li>{" "}
                      <li>
                        Worked on NEXT JS migration project from version 9 to
                        Next JS version 13 in with Tailwind CSS.
                      </li>{" "}
                      <li>Verified components with unit testing.</li>
                    </ul>

                    <h6>Skills Used</h6>

                    <p className="p-2">
                      HTML5, CSS3, Bootstrap,Material UI, Tailwind CSS,
                      JavaScript, ReactJS,{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
