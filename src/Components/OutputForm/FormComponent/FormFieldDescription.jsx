import React from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";
const FormFieldDescription = ({ description }) => {
  return (
    <Tooltip title={description}>
      <FontAwesomeIcon icon={faInfoCircle} className="cursor-pointer" />
    </Tooltip>
  );
};

export default FormFieldDescription;