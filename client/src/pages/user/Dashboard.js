import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import Slider from "../../components/Layout/Slider";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={" User-Dashboard - OSS"}>
      <Slider />

      <div className="row m-3 p-3 dashboard">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9">
          <div
            className="card p-3"
            id="top"
            style={{
              background: "var(--gradient-bar)",
              borderRadius: "1rem",
              width: "100%",
            }}
          >
            <h3>Name : {auth?.user?.name}</h3>
            <h3>Email : {auth?.user?.email}</h3>
            <h3>Address : {auth?.user?.address}</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
