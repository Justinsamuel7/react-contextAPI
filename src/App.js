import React, { createContext } from "react";
import "./style.css";
import Child1 from "./Child1";

let obj = { name: "justin", age: 21 };

export const Contapivar = createContext(obj);

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Contapivar.Provider value={obj}>
        <Child1 name={obj.name} age={obj.age} />
      </Contapivar.Provider>
    </div>
  );
}
