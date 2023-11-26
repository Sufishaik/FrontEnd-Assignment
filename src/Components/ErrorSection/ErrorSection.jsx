import React from "react";
import "../ErrorSection/Error.css";
const ErrorSection = () => {
  return (
    <div className="rounded-lg grow bg-red-100 grid place-items-center container-error">
      <h1 className="mt-6 text-xl font-semibold text-red-700 text-center container-error2">
        JSON is incorrect !
      </h1>
    </div>
  );
};

export default ErrorSection;