import React from "react";
import "../Table/table.css";

const Table = ({ user }) => {
  return (
    <table class="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col" id="box"></th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Located</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" align="center">
            {" "}
            <img src={user.picture.medium} alt="user pic" />
          </th>
          <td>{user.name.first}</td>
          <td>{user.name.last}</td>
          <td>{user.location.country}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
