import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, description, price, img } = service;
  const navigate = useNavigate();
  const handleService = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <button onClick={() => handleService(id)}>Book: {name}</button>
    </div>
  );
};

export default Service;
