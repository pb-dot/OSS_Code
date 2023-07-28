import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <div className=" p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center gradient__text" id="top">
              All Orders
            </h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <div class="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="gradient__text"
                            style={{ fontSize: "25px" }}
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="gradient__text"
                            style={{ fontSize: "25px" }}
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="gradient__text"
                            style={{ fontSize: "25px" }}
                          >
                            Buyer
                          </th>

                          <th
                            scope="col"
                            className="gradient__text"
                            style={{ fontSize: "25px" }}
                          >
                            Payment
                          </th>
                          <th
                            scope="col"
                            className="gradient__text"
                            style={{ fontSize: "25px" }}
                          >
                            Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="filter-content">{i + 1}</td>
                          <td className="filter-content">{o?.status}</td>
                          <td className="filter-content">{o?.buyer?.name}</td>

                          <td className="filter-content">
                            {o?.payment.success ? "Success" : "Failed"}
                          </td>
                          <td className="filter-content">
                            {o?.products?.length}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="container">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3  flex-row" key={p._id}>
                        <div className="col-md-4">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                            width="100px"
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8 card-body" id="top">
                          <div className="text-center filter-content mt-5">
                            <p style={{ color: "white" }}> Name : {p.name}</p>
                            <p style={{ color: "white" }}>
                              Description : {p.description.substring(0, 30)}
                            </p>
                            <p style={{ color: "white" }}>
                              Price :{" "}
                              {p.price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "INR",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
