import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@mui/material";
import React from "react";
// import "../OutputForm/FormSubmit.css";
const FormSubmitModal = ({ open, setOpen, formSubmitedData }) => {
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <div className="w-[32rem]  p-4 py-6 overflow-hidden container-submit">
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faTimes}
            className="cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <h1 className="text-2xl text-blue-700 mb-6 mt-3 child-submit2">Output of Form</h1>
        <p className="w-full whitespace-normal break-words child-submit3">{JSON.stringify(formSubmitedData)}</p>
      </div>
    </Dialog>
  );
};

export default FormSubmitModal;