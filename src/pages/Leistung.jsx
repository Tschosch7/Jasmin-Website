import React from "react";
import { useParams } from "react-router-dom";
import information from "../data/leistungeninfo.json";

const Leistung = () => {
  const { name } = useParams();
  console.log(name);

  let exists = information.find((e) =>e.name === `${name}`);
  console.log(exists);

  return (<div>
    {exists.name}
  </div>)
};

export default Leistung;
