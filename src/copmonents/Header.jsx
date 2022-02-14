import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../redux/ducks/Header";
import ATM from "./ATM";
function Header() {
  const dispatch = useDispatch();
  const changeName = useSelector((state) => state.header.name);
  let addNames = () => {
    let value = document.querySelector("#inputId").value;
    dispatch(addName(value));
    console.log(value);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <label htmlFor="inputId">
        User Name :
        <input type="text" id="inputId" placeholder="Enter your User Name" />
        <button onClick={addNames}>Save</button>
      </label>
      <h2 className={`${changeName}` ? "Online" : "Offline"}>
        {changeName ? `${changeName} Online` : "Offline"}
      </h2>
      {changeName && <ATM />}
    </div>
  );
}

export default Header;
