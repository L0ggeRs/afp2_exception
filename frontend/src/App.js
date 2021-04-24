import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GuestAdd from './component/Pages/GuestAddForm';
import Reserve from './component/Pages/ReservationAddForm';
import InvoiceAdd from './component/Pages/InvoiceAddForm'
import Homepage from './component/Pages/HomePage';
import Pictures from './component/Pages/Pictures';
import ReservedDates from './component/ReservationList';
import InvoiceList from './component/InvoiceList';


function App() {
    return (
        <div className="App">
            <Router>
        <Navbar />
            <Switch>
                <Route path='/kezdolap'  component={Homepage} />
                <Route path='/foglalas' exact component={Reserve} />
                <Route path='/idopontok'  component={ReservedDates} />
                <Route path='/kepek'  component={Pictures} />
                <Route path='/vendeg'  component={GuestAdd} />
                <Route path='/szamlaAdd'  component={InvoiceAdd} />
                <Route path='/szamla'  component={InvoiceList} />
            </Switch>
            </Router>
        </div>
    );
}

export default App;