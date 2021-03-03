import React from "react";

const Card = ({ user }) => {
  // users.map((user) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." alt="employee"> */}
            <div className="card-body">
              <h5>{user.name.first}</h5>
            </div>
            {/* </img> */}
            <ul className="list-group">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  // });
};

export default Card;
