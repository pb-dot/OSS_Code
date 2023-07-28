import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Slider from "../components/Layout/Slider";
const Contact = () => {
  return (
    <Layout title={"Contact us -OSS"}>
      <Slider />
      <div className="row contactus ">
        <div className="col-md-6 mt-3">
          <img
            src="/images/contact.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-5">
          <h1 className="p-2 text-white text-center gpt3__cta">
            Customer Support
          </h1>

          <p className="card-body mt-2 p-4 filter-content">
            For any query or report regarding this site contact me through the
            following means
          </p>
          <p className="card-body mt-2 p-4 filter-content">
            <BiMailSend /> : oss.cs@gmail.com
          </p>
          <p className="card-body mt-2 p-4 filter-content">
            <BiPhoneCall /> : 9900339944
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
