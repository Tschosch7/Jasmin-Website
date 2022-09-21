import React, { useState } from "react";
import { Link } from "react-router-dom";
import information from "../data/leistungeninfo.json";
import Service from "../ui/Service";


const Leistungen = () => {
  return (
    <div className="container" style={{backgroundColor: '#f8f8f8',paddingBottom: '96px'}} >
      <div className="row services__row">
        <h2 className="align-center">Physiotherapeutische Leistungen</h2>
        <div className="services">
            {information.map((element) => (
              <Link to={`/leistungen/${element.name}`} key={element.name} style={{display: 'contents'}}>
                <Service
                  ServiceName={element.name}
                  ServicePara={element.para}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Leistungen;
