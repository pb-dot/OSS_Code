import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import Slider from "../../components/Layout/Slider";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={" Admin-Dashboard - OSS"}>
      <Slider />

      <div className="row m-3 p-3 dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <div
            className="card  p-3 "
            id="top"
            style={{
              background: "var(--gradient-bar)",
              borderRadius: "1rem",

              width: "100%",
            }}
          >
            <h3 style={{ color: "white" }}> Admin Name : {auth?.user?.name}</h3>
            <h3 style={{ color: "white" }}>
              {" "}
              Admin Email : {auth?.user?.email}
            </h3>
            <h3 style={{ color: "white" }}>
              {" "}
              Admin Contact : {auth?.user?.phone}
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
