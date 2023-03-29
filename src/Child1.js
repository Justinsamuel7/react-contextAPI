import React from "react";
import "./style.css";
import Child2 from "./Child2"

export default function Child1(props) {
  return (
    <div>
      <h4>My name is {props.name} from child 1</h4>
      <Child2 age={props.age}/>
    </div>
  );
}
