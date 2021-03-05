import React from "react";
import "../Table/table.css";

const Table = ({ user }) => {
  return (
    <table class="table table-dark table-responsive-sm">
      <tr>
        <th scope="col">
          <img src={user.picture.medium} alt="user pic" />
        </th>
        <th scope="col" width="20%">
          {user.name.first}
        </th>
        <th scope="col" width="20%">
          {user.name.last}
        </th>
        <th scope="col" width="20%">
          {user.email}
        </th>
        <th scope="col" width="20%">
          {user.location.country}
        </th>
        <th scope="col" width="20%">
          {user.dob.age}
        </th>
      </tr>
    </table>
  );
};

export default Table;
