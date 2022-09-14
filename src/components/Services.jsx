import React from "react";
import Service from "../ui/Service";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <h2 className="align-center">Was ich anbiete</h2>
          <div className="services">
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;