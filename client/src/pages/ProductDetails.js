import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import "../styles/ProductDetailsStyles.css";
import Slider from "../components/Layout/Slider";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //get single Product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Slider />
      <div className="container ">
        <div className="row  product-details">
          <div className="col-md-4 mt-3 product-details-info">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              height={"300px"}
              width={"100%"}
              style={{ borderRadius: "10px" }}
              alt={product.name}
            />
          </div>

          <div className="col-md-8 product-details-info ">
            <h1 className="text-center filter-content mt-2">Product Details</h1>
            <hr />
            <h6 className="filter-content">Name : {product.name}</h6>
            <h6 className="filter-content">
              Description : {product.description}
            </h6>
            <h6 className="filter-content">
              Price :
              {product?.price?.toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
              })}
            </h6>
            <h6 className="filter-content">
              Category : {product?.category?.name}
            </h6>
            <button
              className="btn btn-secondary "
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
                toast.success("Item Added to cart");
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <hr />

      <div className=" container similar-products">
        <h4 className="filter-content text-center">Similar Products</h4>
        {relatedProducts.length < 1 && (
          <p className="filter-content text-center">
            No Similar Products found
          </p>
        )}
        <div className="d-flex flex-wrap">
          {/*id="home_pdt"*/}
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title" style={{ color: "white" }}>
                    {p.name}
                  </h5>
                  <h5
                    className="card-title card-price"
                    style={{ color: "white" }}
                  >
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h5>
                </div>
                <p className="card-text " style={{ color: "white" }}>
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-dark ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
