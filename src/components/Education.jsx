import React from "react";
import { DiJava } from "react-icons/di";

const Education = () => {
  return (
    <div className="container education " id="education">
      <h4 className="headingLabel mb-4 animate fadeInLeft">Education</h4>
      <div className="card my-3 animate fadeInRight">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between pt-3">
            <h6>
              <p>Master of Business Administration (IT)</p>
              <p>Ranchi University, Ranchi</p>
            </h6>
            <h6>
              <p>2017-2019</p>
              <p>Ranchi, Jharkhand</p>
            </h6>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <div>
              <p>Bachelor in Computer Application (BCA)</p>
              <p>Ranchi University</p>
            </div>
            <div>
              <p>2013-2016</p>
              <p>Ranchi, Jharkhand</p>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <div>
              <p>
                XII<sup>th</sup> (Science)- HSC
              </p>
              <p>State Board - (JAC)</p>
            </div>
            <div>
              <p>2010-2013</p>
              <p>Ranchi, Jharkhand</p>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <div>
              <p>
                X<sup>th</sup> SSC
              </p>
              <p>State Board - (JAC)</p>
            </div>
            <div>
              <p>2010</p>
              <p>Ramgarh, Jharkhand</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
