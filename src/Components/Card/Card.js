import React from "react";
import styles from "./cardStyle";

const Card = ({ user }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <img
              src={user.picture.large}
              style={styles.cardStyles}
              alt="user pic"
            />
            <div className="card-body">
              <h5>
                {user.name.first} {user.name.last}
              </h5>
            </div>

            <ul className="list-group">
              <li className="list-group-item">{user.email}</li>
              <li className="list-group-item">{user.location.city}</li>
              <li className="list-group-item">{user.gender}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
