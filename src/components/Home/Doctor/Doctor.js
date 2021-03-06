import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4 text-center">
      <img
        alt=""
        style={{ height: "200px" }}
        src={`data:image/png;base64,${doctor.image.img}`}
      />
      <h4>{doctor.name}</h4>
      <p>
        {" "}
        <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />
        +880-188-934789
      </p>
    </div>
  );
};

export default Doctor;
