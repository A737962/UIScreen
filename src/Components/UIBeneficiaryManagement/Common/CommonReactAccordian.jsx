import React, { Fragment, useContext, useState } from "react";
import "./Common.css";
import UserData from "../Data.json";
import Options from "../Options.json";
import {
  Accordion,
  Card,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { Link } from "react-router-dom";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <i
      class={isCurrentEventKey ? "fa fa-arrow-up" : "fa fa-arrow-down"}
      style={{ "font-size": "24px" }}
      onClick={decoratedOnClick}
    >
      {children}
    </i>
  );
}

export default function Common() {
  const [show, setShow] = useState(false);

  const columns = [];

  const EditableTable = () => (
    <Fragment>
      <table className="table table-borderless">
        <thead className="bg-white">
          <tr className="row m-0">
            <th className="col" scope="col">
              Group Type
            </th>
            <th className="col" scope="col">
              First Name
            </th>
            <th className="col" scope="col">
              Last Name
            </th>
            <th className="col" scope="col">
              Relationship
            </th>
            <th className="col" scope="col">
              Type
            </th>
            <th className="col" scope="col">
              Percentage
            </th>
            <th className="col" scope="col">
              <span>
                <Link to="" onClick={() => setShow(false)}>
                  cancel
                </Link>
              </span>
              <span> | </span>
              <span>
                <Link to="" onClick={() => console.log("Saved")}>
                  save
                </Link>
              </span>
            </th>
          </tr>
        </thead>
      </table>
      <table className="table table-borderless">
        {UserData.map((item, key) => (
          <tbody className="bg-white">
            <tr className="row m-0 align-items-center">
              <th className="col">
                <div className="dropdown dropdown-group-type">
                  <select
                    className="w-100 mr-sm-2 btn dropdown-toggle border-dark"
                    id="inlineFormCustomSelect"
                  >
                    <option selected>Choose...</option>
                    {Options.groupType.map((item, key) => (
                      <option key={key} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
              <td className="col">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputFirstName"
                  aria-describedby="firstNameHelp"
                  placeholder="Enter First Name"
                />
              </td>
              <td className="col">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputLastName"
                  aria-describedby="lastNameHelp"
                  placeholder="Enter Last Name"
                />
              </td>
              <td className="col">
                <div className="dropdown dropdown-group-type">
                  <select
                    className="w-100 mr-sm-2 btn dropdown-toggle border-dark"
                    id="inlineFormCustomSelect"
                  >
                    <option selected>Choose...</option>
                    {Options.relationship.map((item, key) => (
                      <option key={key} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
              <td className="col">
                <div className="dropdown dropdown-group-type">
                  <select
                    className="w-100 mr-sm-2 btn dropdown-toggle border-dark"
                    id="inlineFormCustomSelect"
                  >
                    <option selected>Choose...</option>
                    {Options.type.map((item, key) => (
                      <option key={key} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
              <td className="col">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPercentage"
                  aria-describedby="percentageHelp"
                  placeholder="Enter Percentage"
                />
              </td>
              <td className="col">
                <span>
                  <Link to="" onClick={() => console.log("Deleted")}>
                    delete
                  </Link>
                </span>
                <span> | </span>
                <span>
                  <Link to="" onClick={() => console.log("Opened")}>
                    open
                  </Link>
                </span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </Fragment>
  );

  const InitialTable = () => (
    <Fragment>
      <table className="table table-borderless">
        <thead className="bg-white">
          <tr className="row m-0">
            <th className="col" scope="col">
              Beneficiary
            </th>
            <th className="col" scope="col">
              Relationship
            </th>
            <th className="col" scope="col">
              Type
            </th>
            <th className="col" scope="col">
              Percentage
            </th>
            <th className="col" scope="col">
              Signature Date
            </th>
            <th className="col" scope="col">
              <Link to="" onClick={() => setShow(true)}>
                update
              </Link>
            </th>
          </tr>
        </thead>
      </table>
      {UserData.map((item, key) => (
        <Accordion key={key}>
          <Card>
            <Card.Header className="p-0 bg-white">
              <table className="table table-borderless mb-0">
                <tbody className="bg-white">
                  <tr className="row m-0 align-items-center">
                    <th className="col">{item.beneficiary}</th>
                    <td className="col">{item.relationship}</td>
                    <td className="col">{item.type}</td>
                    <td className="col">{item.percentage}%</td>
                    <td className="col">{item.signatureDate}</td>
                    <td className="col">
                      <ContextAwareToggle eventKey="0">
                        {/* Click me! */}
                        {/* <i class="fa fa-arrow-down" style={{"font-size":"24px"}}></i> */}
                      </ContextAwareToggle>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="row">
                  <div className="col">
                    <div>Middle Name</div>
                    <b>{item.middleName}</b>
                  </div>
                  <div className="col">
                    <div>Date of birth</div>
                    <b>{item.dateOfBirth}</b>
                  </div>
                  <div className="col">
                    <div>SSN</div>
                    <b>{item.ssn}</b>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col">
                    <div>Street Address</div>
                    <b>{item.streetAddress}</b>
                  </div>
                  <div className="col">
                    <div>City</div>
                    <b>{item.city}</b>
                  </div>
                  <div className="col">
                    <div>State</div>
                    <b>{item.state}</b>
                  </div>
                  <div className="col">
                    <div>Zip</div>
                    <b>{item.zip}</b>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col">
                    <div>Phone Number</div>
                    <b>{item.phoneNumber}</b>
                  </div>
                  <div className="col">
                    <div>Email Address</div>
                    <b>{item.emailAddress}</b>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </Fragment>
  );

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
          <div className="accordian-table">
            {!show ? <InitialTable /> : <EditableTable />}
          </div>
        </div>
      </div>
    </div>
  );
}
