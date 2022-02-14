import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode, incroment } from "../redux/ducks/ATM";
function ATM() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.atm.count);
  const darkMode = useSelector((state) => state.atm.isDarkMode);

  let error1 = (value) => {
    if (count + value >= 0) {
      dispatch(incroment(value));
    } else {
      alert(`Not enough money. You have just ${count} £.`);
      console.log(`Not enough money. You have just ${count}£`);
    }
  };
  let toggleDarkMode = () => {
    dispatch(changeMode());
  };
  return (
    <div 
      className="header_main"
      style={
        darkMode
          ? { background: "white", color: "#282c34" }
          : { background: "#282c34", color: "white" }
      }
    >
      <header className="header_site">
        <button
          onClick={toggleDarkMode}
        >
          Toggle ljus mode
        </button>
        <hr />
      </header>
      <main>
        <h2>Uttag</h2>
        <button
          onClick={() => {
            dispatch(incroment(100));
          }}
        >
          + 100
        </button>
        <button
          onClick={() => {
            dispatch(incroment(200));
          }}
        >
          + 200
        </button>
        <button
          onClick={() => {
            dispatch(incroment(500));
          }}
        >
        + 500
        </button>{" "}
      </main>
      <h1>Account: {count}£</h1>
      <main>
        <h2>Insättning </h2>
        <button
          onClick={() => {
            error1(-100);
          }}
        >
          - 100
        </button>
        <button
          onClick={() => {
            error1(-200);
          }}
        >
          - 200
        </button>
        <button
          onClick={() => {
            error1(-500);
          }}
        >
          - 500
        </button>
      </main>

      <footer>
        <p>Mohammad Awad</p>
      </footer>
    </div>
  );
}

export default ATM;
