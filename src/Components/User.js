import React from "react";
import { useState, useEffect } from "react";
import API from "../utils/API";
import Card from "./Card";

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

  return <div className="home">{user && <Card user={user} />}</div>;
};

export default User;
