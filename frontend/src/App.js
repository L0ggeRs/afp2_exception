import React from 'react';
import './App.scss';
import ReservesList from "./component/ReservesList";

function App() {
  return (
    <div className={["App","container"]}>
        <div className={"row"}>
            <div className={"col-md-3"}></div>
            <div className={"col-md-6"}>
                <ReservesList></ReservesList>
            </div>
            <div className={"col-md-3"}></div>
        </div>
    </div>
  );
}

export default App;
