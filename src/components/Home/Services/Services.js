import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./Services.css";
import Web from "../../../images/icons/service1.png";
import gp from "../../../images/icons/service2.png";
import dev from "../../../images/icons/service3.png";
import Loader from "../../Share/Loader/Loader";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const request = await fetch(
        "https://creative-agency-server-2ogx.vercel.app/allService"
      );

      return request;
    }

    loadData()
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h2 className="services-title">
          Provide awesome <span style={{ color: " #7AB259" }}>services</span>
        </h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.length === 0 ? (
            <Loader></Loader>
          ) : (
            serviceData.map((service) => (
              <ServiceDetail
                service={service}
                key={service._id}
              ></ServiceDetail>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
