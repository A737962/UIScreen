import React from "react";

export default function Common({ props }) {
  return (
    <div className="jumbotron py-3 rounded-0 jumbotron-container">
      <div className="row third-container">
        <div className="col-sm-6 col-md-6">
          <div>
            <div>
              <b>Critical Illness</b>
            </div>
            <b>1234500</b>
          </div>

          {!props.claimNumber ? (
            <div className="mt-5 button-text-container">
              <button
                type="button"
                className="btn bg-secondary rounded-0 text-white button-container"
              >
                <div className="py-2 px-4 h5 m-0">File a claim</div>
              </button>
            </div>
          ) : (
            <div className="mt-4">
              <div>
                <div>Claim Number</div>
                <b>1234500</b>
              </div>
            </div>
          )}
        </div>
        <div className="col-sm-6 col-md-6">
          <div>
            <div>Coverage Status:</div>
            <b>Initial Premium Due</b>
          </div>
          <div className="mt-4">
            <div>Effective Date</div>
            <b>1/22/22</b>
          </div>
        </div>
      </div>
    </div>
  );
}
