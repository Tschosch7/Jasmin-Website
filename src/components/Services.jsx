import React from "react";
import Service from "../ui/Service";
import ServiceImage1 from "../assets/IMG_2288.JPG"
import ServiceImage2 from "../assets/IMG_2435.JPG"
import ServiceImage3 from "../assets/IMG_2408.JPG"
import ServiceImage4 from "../assets/IMG_2462.JPG"
import ServiceImage5 from "../assets/IMG_2312.JPG"
import ServiceImage6 from "../assets/IMG_2453.JPG"

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row services__row">
          <h2 className="align-center">Physiotherapeutische Leistungen</h2>
          <div className="services">
                <Service
                ServiceImage={ServiceImage1}
                ServiceName={"Manuelle Massagen"}
                ServicePara={"Lorem ipsum dolor sit amet consectetur adipisicing  hic placeat nosssbis suscipit unde aliquam pariatur ..."}
                />
                <Service
                ServiceImage={ServiceImage2}
                ServiceName={"Gelenkmobilisationen"}
                ServicePara={"Lorem ipsum dolor sit amet consectetur adipisicing  hic placeat nosssbis suscipit unde aliquam pariatur ..."}
                />
                <Service
                ServiceImage={ServiceImage3}
                ServiceName={"Faszienbehandlungen"}
                ServicePara={"Lorem ipsum dolor sit amet consectetur adipisicing  hic placeat nosssbis suscipit unde aliquam pariatur ..."}
                />
                <Service
                ServiceImage={ServiceImage4}
                ServiceName={"Schallwellentherapie"}
                ServicePara={"Lorem ipsum dolor sit amet consectetur adipisicing  hic placeat nosssbis suscipit unde aliquam pariatur ..."}
                />
                <Service
                ServiceImage={ServiceImage5}
                ServiceName={"Kinesiologisches Taping"}
                ServicePara={"Lorem ipsum dolor sit amet consectetur adipisicing  hic placeat nosssbis suscipit unde aliquam pariatur ..."}
                />
                <Service
                ServiceImage={ServiceImage6}
                ServiceName={"Akkupunktur"}
                ServicePara={"Lorem ipsum dolor sit amet consectetur adipisicing  hic placeat nosssbis suscipit unde aliquam pariatur ..."}
                />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
