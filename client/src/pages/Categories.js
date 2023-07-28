import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Layout/Slider";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories -OSS"}>
      <Slider />
      <div
        className="container shadow-drop-2-center "
        style={{
          marginTop: "5%",
          background:
            "radial-gradient(circle at 30% -100%,#042c54 25%,#042c54 85%,#1b78de 100%)",
          filter: "drop-shadow(0 4px 4px rgba(0,0,0,.25))",
          paddingTop: "5px",
          paddingBottom: "10px",
        }}
      >
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className=" gpt3__cta" id="cat_pdt">
                <Link
                  to={`/category/${c.slug}`}
                  className="btn filter-content"
                  style={{ fontWeight: "1000", fontSize: "25px" }}
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
