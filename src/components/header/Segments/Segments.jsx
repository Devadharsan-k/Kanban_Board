import { Segmented } from "antd";
import React from "react";
import "./Segments.css";
const Segments = () => {
  return (
    <div>
      <Segmented
        options={["Job Posts", "Candidates", "Apply Forms"]}
        defaultValue="Candidates"
        className="segments"
      />
    </div>
  );
};

export default Segments;
