import React from "react";
import { useState, useEffect } from "react";
import API from "../../utils/API";
import Card from "../Card/Card";

const User = () => {
  const [users, setUser] = useState([]);

  useEffect((users) => {
    API.start(users)

      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setUser(data.results);
        console.log(data);
        console.log(Array.isArray(data.results));
      });
  }, []);

  const userArray = users.map((employee, index) => {
    return <Card key={index} user={employee} />;
  });

  return <div className="home"> {users && userArray}</div>;
};

export default User;
