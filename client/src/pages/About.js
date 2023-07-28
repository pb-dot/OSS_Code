import React from "react";
import Layout from "./../components/Layout/Layout";
import Slider from "../components/Layout/Slider";

const About = () => {
  return (
    <Layout title={"About us - OSS"}>
      <Slider />

      <div className="row contactus ">
        <div className="col-sm-6 mt-3">
          <img
            className=""
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-sm-4 mt-5">
          <h1 className=" p-2 text-white text-center gpt3__cta">
            One Stop Shop
          </h1>

          <p className="card-body mt-2 p-4 filter-content">
            Notable features of this site include :-<br></br>
            <li>
              Secure Authentication and Tokens and features like Forgot Password
            </li>
            <li>Private Routes for Admin and User </li>
            <li>CRUD of Products through dashboard accessible by admin only</li>
            <li>Pament Gateway through BrainTree</li>
            <li>Filters based on Category and Prices</li>{" "}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
