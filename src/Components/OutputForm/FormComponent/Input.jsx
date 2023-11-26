import React from "react";
import FormFieldDescription from "./FormFieldDescription";
import { getLabel } from "../../Shared/Helper";
import RequiredStar from "./RequiredStar";
// import "../FormComponent/Inputs.css"
const Input = ({ val, parentLabel, reRender }) => {
  const isDescriptionValid = () => {
    return val?.description?.trim() !== "";
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4   items-center container-input">
        <label htmlFor="" className="flex gap-2 items-center child-input2">
          {val?.label}
          <RequiredStar val={val} />
          {isDescriptionValid() ? (
            <FormFieldDescription description={val?.description} />
          ) : (
            ""
          )}
        </label>
        <input
          type="text"
          className="border-2 outline-none p-2 rounded child-input3"
          placeholder={val?.placeholder}
          name={getLabel(parentLabel, val?.jsonKey)}
          disabled={val?.validate?.immutable}
          required={val?.validate?.required}
          onChange={() => {
            reRender();
          }}
        />
      </div>
    </>
  );
};

export default Input;