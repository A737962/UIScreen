import React from "react";
import Common from "../Common";
import Data from "../JsonData/CoverageAndBenefits.json";

export default function CoverageAndBenefits({ props }) {
  return (
    <div className="mb-3">
      <div className="mx-1 mb-2 row justify-content-between">
        <h3>
          {props.title} ({props.new})
        </h3>
        <div className="float-right">File Claim | View All</div>
      </div>
      {Data.map((data, item) => (
        <Common props={data} />
        // console.log("From coverage ", data);
      ))}
      {/* <Common props={Data} /> */}
    </div>
  );
}
