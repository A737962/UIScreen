import React from "react";
import "./Common.css";

export default function Common() {
  return (
    <div>
      <h2>Beneficiary Management</h2>
      <div className="jumbotron p-0 rounded-0 jumbotron-container">
        <div className="third-container">
          <div className="pl-3 pt-2">
            <div>
              <b>Critical Illness</b>
            </div>
            <b>1234500</b>
          </div>
          <hr className="border-dark mt-2" />
          <div>
            <table className="table table-borderless">
              <thead className="bg-white">
                <tr>
                  <th scope="col">Beneficiary</th>
                  <th scope="col">Relationship</th>
                  <th scope="col">Type</th>
                  <th scope="col">Percentage</th>
                  <th scope="col">Signature Date</th>
                  <th scope="col">update</th>
                </tr>
              </thead>
              <tbody>
                <tr
                //   data-toggle="collapse"
                //   data-target="#demo1"
                  className="bg-white accordion-toggle"
                >
                  <td>Jane Smith</td>
                  <td>Spouse</td>
                  <td>Primary</td>
                  <td>50%</td>
                  <td>10/10/2020</td>
                  <td data-toggle="collapse" data-target="#demo1"><i className="glyphicon glyphicon-menu-down"></i></td>
                </tr>
                <tr>
                  <td colSpan="6" className="hiddenRow">
                    <div className="accordian-body collapse" id="demo1">
                      <hr className="border-dark" />
                      Data 1
                    </div>
                  </td>
                </tr>
                <tr
                  data-toggle="collapse"
                  data-target="#demo2"
                  className="bg-white accordion-toggle"
                >
                  <td>Jane Smith</td>
                  <td>Spouse</td>
                  <td>Primary</td>
                  <td>50%</td>
                  <td>10/10/2020</td>
                  <td>Arrow</td>
                </tr>
                <tr>
                  <td colSpan="6" className="hiddenRow">
                    <div id="demo2" className="accordian-body collapse">
                      <hr className="border-dark" />
                      Data 2
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
