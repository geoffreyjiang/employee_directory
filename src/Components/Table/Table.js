import React from "react";
import "../Table/table.css";

const Table = ({ user }) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Located</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>
              <img src={user.picture.medium}></img>
            </th>
            <th>{user.name.first}</th>
            <th>{user.name.last}</th>
            <th width="15%">{user.email}</th>
            <th>{user.location.country}</th>
            <th> {user.dob.age}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Table;
