import React from "react";

export default function CommonFromCustom() {
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
          <div id="accordionOne">
            <div class="card">
              <div class="card-header" id="headingOne">
                {/* <h5 class="mb-0"> */}
                  {/* <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Collapsible Group Item #1
                  </button> */}
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
          </table>
                {/* </h5> */}
              </div>

              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionOne"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
          <div id="accordionTwo">
            <div class="card">
              <div class="card-header" id="headingTwo">
                {/* <h5 class="mb-0"> */}
                  {/* <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Collapsible Group Item #2
                  </button> */}
                  <table className="table table-borderless">
                  <tbody className="bg-white">
                    <tr className="row m-0">
                      <th className="col">Jane Smith</th>
                      <td className="col">Spouse</td>
                      <td className="col">Primary</td>
                      <td className="col">50%</td>
                      <td className="col">10/10/2020</td>
                      <td className="col">
                        {/* <ContextAwareToggle eventKey="0"> */}
                          Click me!
                        {/* </ContextAwareToggle> */}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* </h5> */}
              </div>

              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionTwo"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
