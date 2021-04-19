import React from 'react';
import './App.scss';
import GuestAddForm from "./component/GuestAddForm";
import GuestList from "./component/GuestList";

function App() {
  return (
    <div className={["App","container"]}>
        <div className={"row"}>
            <div className={"col-md-3"}></div>
            <div className={"col-md-6"}>
              <GuestAddForm></GuestAddForm>
                <GuestList></GuestList>
            </div>
            <div className={"col-md-3"}></div>
        </div>
    </div>
  );
}

export default App;
