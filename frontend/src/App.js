import React from 'react';
import Navbar from "./component/Pages/Navbar/Navbar";
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GuestAdd from './component/Pages/GuestAddForm';
import Reserve from './component/Pages/ReservationAddForm';
import InvoiceAdd from './component/Pages/InvoiceAddForm'
import Homepage from './component/Pages/Hero/HomePage';
import Pictures from './component/Pages/Pictures';


function App() {
    return (
        <div className="App">
            <Router>
        <Navbar />
            <Switch>
                <Route path='/kezdolap'  component={Homepage} />
                <Route path='/foglalas' exact component={Reserve} />
                <Route path='/kepek'  component={Pictures} />
                <Route path='/vendeg'  component={GuestAdd} />
                <Route path='/szamlaAdd'  component={InvoiceAdd} />
            </Switch>
            </Router>
        </div>
    );
}

export default App;