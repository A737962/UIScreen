import React from "react";
import DBFaq from "./DBFaqs/DBFaq";
import CoverageAndBenefits from "./DBCoverageCurrentClaim/CoverageAndBenefits";
import CurrentClaimStatus from "./DBCoverageCurrentClaim/CurrentClaimStatus";
import DBAccountHistory from "./DBAccountHistory/index";
import DBVideos from "./DBVideos/index";
import "./UIDashboard.css";

export default function UIDashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <CoverageAndBenefits props={{title: "Coverage and Benefits", new: 3, button:true}} />
        </div>
        <div className="col-sm-6 col-md-6">
          <CurrentClaimStatus props={{title: "Current Claim Status", new: 7}}/>
        </div>
      </div>
      <div className="row">
        <DBFaq />
        <DBVideos />
      </div>
    </div>
  );
}
