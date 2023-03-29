import React from "react";
import "./style.css";
import { Contapivar } from "./App"

export default function Child2(props) {
  return (
    <div>
      <h4>My age is {props.age} from child 2</h4>
      <Contapivar.consumer>
        {(data)=>{
          return <p>{data.name}</p>
        }}
      </Contapivar.consumer>

    </div>
  );
}
