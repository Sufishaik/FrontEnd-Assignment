import { useState } from "react";
import JsonInput from "./Components/JsonOutput/JsonOutput"
import OutputForm from "./Components/OutputForm/OutPutForm";
import "./App.css"

function App() {
  const [jsonSchema, setJsonSchema] = useState("");
  return (
    <div className="w-screen h-screen grid grid-cols-2 container">
      <JsonInput jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
      <OutputForm jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
    </div>
  );
}

export default App;