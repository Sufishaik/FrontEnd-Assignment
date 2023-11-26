import React, { useEffect, useState } from "react";
import Input from "./FormComponent/Input";
import Select from "./FormComponent/Select";
import FormGroup from "./FormComponent/FormGroup";
import Radio from "./FormComponent/Radio";
import Ignore from "./FormComponent/Ignore";
import Switch from "./FormComponent/Switch";
// import "../OutputForm/Formrender.css"
const FormRender = ({
  data,
  formRef,
  parentLabel,
  reRender,
  showAdvancedFields,
}) => {
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    storeSortedData();
  }, [data]);
  const storeSortedData = () => {
    try {
      const sd = data.sort((a, b) => a.sort - b.sort);
      setSortedData(sd);
    } catch (e) {}
  };
  const getFormField = (val) => {
    switch (val?.uiType) {
      case "Input":
        return (
          <>
            {(!showAdvancedFields && val?.validate?.required) ||
            showAdvancedFields ? (
              <Input
                val={val}
                key={val.sort}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
      case "Select":
        return (
          <>
            {(!showAdvancedFields && val?.validate?.required) ||
            showAdvancedFields ? (
              <Select
                val={val}
                key={val.sort}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
      case "Group":
        return (
          <>
            {(!showAdvancedFields && val?.validate?.required) ||
            showAdvancedFields ? (
              <FormGroup
                val={val}
                key={val.sort}
                formRef={formRef}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
      case "Radio":
        return (
          <>
            {(!showAdvancedFields && val?.validate?.required) ||
            showAdvancedFields ? (
              <Radio
                val={val}
                key={val.sort}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
      case "Ignore":
        return (
          <>
            {(!showAdvancedFields && val?.validate?.required) ||
            showAdvancedFields ? (
              <Ignore
                val={val}
                key={val.sort}
                formRef={formRef}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
      case "Switch":
        return (
          <>
            {(!showAdvancedFields && val?.validate?.required) ||
            showAdvancedFields ? (
              <Switch
                val={val}
                key={val.sort}
                formRef={formRef}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
    }
  };
  return (
    <div className="flex flex-col gap-4 p-3 container-render">
      {sortedData.map((singleData) => getFormField(singleData))}
    </div>
  );
};

export default FormRender;