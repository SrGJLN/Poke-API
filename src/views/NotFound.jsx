import React from "react";
import notfound from "../assets/imgs/notfound.png";

const NotFound = () => {
  return (
    <>
      <div className="img-found">
        <img
          className="notfound"
          style={{ width: "30rem" }}
          src={notfound}
          alt="not-found"
        />
      </div>
    </>
  );
};

export default NotFound;
