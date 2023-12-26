import { CircularProgress, LinearProgress } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { AgencyUser } from "../../../../App";
import ExtraAppBar from "../../../Share/ExtraAppBar/ExtraAppBar";
import SideBar from "../SideBar/SideBar";
import CustomerServiceDetail from "./CustomerServiceDetail";

const CustomerServiceList = () => {
  const [loginUser, setLoginUser] = useContext(AgencyUser);

  const [customerService, setCustomerService] = useState([]);

  useEffect(() => {
    async function loadData() {
      const request = await fetch(
        `https://creative-agency-server-2ogx.vercel.app/clientEnrollServices?email=${
          loginUser.email || loginUser.currentEmail
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      return request;
    }

    loadData()
      .then((response) => response.json())
      .then((data) => setCustomerService(data));
  }, []);

  return (
    <section className="container-fluid row">
      <div>
        <ExtraAppBar side={true}></ExtraAppBar>
        <SideBar></SideBar>
      </div>
      <div className="col-md-9 p-4 pl-5 order-place">
        <h5 className="text-brand mt-2">Service List</h5>
        {(loginUser.name || loginUser.currentName) && (
          <h5 style={{ position: "absolute", right: 0, top: "-33px" }}>
            {loginUser.name || loginUser.currentName}
          </h5>
        )}
        <div className="">
          <div className="row">
            {customerService.length === 0 ? (
              <CircularProgress />
            ) : (
              customerService.map((service) => (
                <CustomerServiceDetail
                  service={service}
                  key={service._id}
                ></CustomerServiceDetail>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceList;
