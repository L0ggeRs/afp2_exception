import React from 'react';
import {default as store} from '../store/ReservationsStore';
import ReservationsListItem from "./ReservationsListItem";

class ReservationsList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {reserves : []};
        this._updateState = this._updateState.bind(this);
    }

    componentDidMount() {
        store.addChangeListener(this._updateState);
    }

    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState(){
        this.setState({reserves : store.reserves});
    }

    render() {
        return(
            <div>
                <div div className="table-responsive">
                    <table className="product_table">
                        <thead>
                        <tr>
                            <td>FoglalásID</td>
                            <td>GuestID</td>
                            <td>CampID</td>
                            <td>Típus</td>
                            <td>Áram</td>
                            <td>Ár</td>
                            <td>Foglalás kezdete</td>
                            <td>Foglalás vége</td>
                            <td> <button className="btn btn-info" onClick={()=> actions.fetchReserves(this.state)}>Listáz</button> </td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.reserves.map(({ReservationId, GuestId, CampId, CampingStyle, Electricity, Price, ReservationStart, ReservationEnd}, index)=>{
                            return(
                                <tr key={ReservationId}>
                                    <td>{GuestId}</td>
                                    <td>{CampId}</td>
                                    <td>{CampingStyle}</td>
                                    <td>{Electricity}</td>
                                    <td>{Price}</td>
                                    <td>{ReservationStart}</td>
                                    <td>{ReservationEnd}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ReservationsList;