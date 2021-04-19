import React from 'react';
import './App.scss';
import GuestAddForm from "./component/GuestAddForm";

function App() {
  return (
    <div className={["App","container"]}>
        <div className={"row"}>
            <div className={"col-md-3"}></div>
            <div className={"col-md-6"}>
              <GuestAddForm></GuestAddForm>
            </div>
            <div className={"col-md-3"}></div>
        </div>
    </div>
  );
}

export default App;
