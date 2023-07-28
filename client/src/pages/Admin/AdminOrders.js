import React, { useState, useEffect } from "react";
import axios from "axios";

import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminOrders = () => {
  const [status] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);

  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"All Orders Data"}>
      <div className=" m-3 p-3 dashboard">
        <div className="row ">
          <div className="col-md-3">
            <AdminMenu />
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
                        <tr className="filter-content">
                          <td>{i + 1}</td>
                          <td>
                            <select
                              bordered={false}
                              onChange={(value) => handleChange(o._id, value)}
                              style={{
                                backgroundColor: "inherit",
                                color: "white",
                              }}
                              defaultValue={o?.status}
                            >
                              {status.map((s, i) => (
                                <option
                                  key={i}
                                  value={s}
                                  style={{
                                    backgroundColor: "black",
                                    color: "white",
                                  }}
                                >
                                  {s}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>{o?.buyer?.name}</td>

                          <td>{o?.payment.success ? "Success" : "Failed"}</td>
                          <td>{o?.products?.length}</td>
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

export default AdminOrders;
