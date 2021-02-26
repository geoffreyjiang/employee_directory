import React from "react";
import { useState, useEffect } from "react";
import API from "../utils/API";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.start()
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  });

  return <div></div>;
};

export default User;
