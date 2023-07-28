import React from "react";
import Layout from "./../components/Layout/Layout";
import Slider from "../components/Layout/Slider";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy -OSS"}>
      <Slider />
      <div className="row contactus ">
        <div className="col-md-6 mt-3">
          <img
            src="/images/policy.jpg"
            alt="Terms and Condition"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-3">
          <h1
            className=" p-2 text-white text-center gpt3__cta"
            style={{ marginTop: "5%" }}
          >
            Terms & Conditions
          </h1>

          <p
            className="card-body mt-2 p-4 filter-content"
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            The following are the main clauses of my app:-
            <li>Limitations of liability</li>
            <li>Intellectual property/trademark protection</li>
            <li>
              Pricing and payment terms, including shipping, returns, exchanges
              and cancellations
            </li>
            <li>Product information</li>
            <li>Dispute resolution</li>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
