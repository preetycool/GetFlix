import React from "react";
import "./DetailRow.scss";

const DetailRow = ({ title, value }) => (
  <div className="detail-row">
    <h3 className="detail-row__heading">{title}</h3>
    <p className="detail-row__value">{value}</p>
  </div>
);

export default DetailRow;
