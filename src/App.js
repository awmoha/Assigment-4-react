import style from "./style.css";
import { useState } from "react";
import Header from "./copmonents/Header";
function App() {
  const [showAtm, setShowAtm] = useState(false);
  return (
    <div className="header_site">
      <h1>Bankomat</h1>
      <button
        onClick={() => {
          setShowAtm(!showAtm);
        }}
      >
        On / Off ATM
      </button>
      {showAtm && <Header /> }
    </div>
  );
}

export default App;
