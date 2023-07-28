import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="  m-3 p-3 dashboard">
        <div className=" row ">
          <div className="col-sm-3">
            <AdminMenu />
          </div>
          <div className="col-sm-9 ">
            <h1 className="text-center" style={{ color: "white" }} id="top">
              All Products List
            </h1>
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link"
                >
                  <div className="hd m-2" style={{ width: "18rem" }}>
                    <div className="card-body ">
                      <h5 className="card-title m-2" style={{ color: "white" }}>
                        {p.name}
                      </h5>
                      <p className="card-text m-2" style={{ color: "white" }}>
                        Price:{" "}
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </p>
                      <p className="card-text m-2" style={{ color: "white" }}>
                        Category: {p.category.slug}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
