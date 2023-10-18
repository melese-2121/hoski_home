import React from "react";
import { Table } from "react-bootstrap";
import costData from "../../VisaCostData.js";

const TableData = () => {
  console.log(costData);
  return (
    <Table hover style={{ marginTop: "30px" }}>
      <thead>
        <tr>
          <th>Fee type</th>
          <th>cost(to Applicants Living in U.S).</th>
          <th>cost(to Applicants Living Abroad).</th>
        </tr>
      </thead>
      <tbody>
        {costData.map((data) => {
          return (
            <tr>
              <td>{data.type}</td>
              <td>{data.costUS}</td>
              <td>{data.costAbroad}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableData;
