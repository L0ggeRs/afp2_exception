import React from 'react';
import {default as store} from '../store/ReservesStore';
import ReservesListItem from "./ReservesListItem";

class ReservesList extends React.Component{

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
                        {this.state.reserves.map(({ReserveId, GuestId, CampId, CampingStyle, Electricity, Price, ReserveStart, ReserveEnd}, index)=>{
                            return(
                                <tr key={ReserveId}>
                                    <td>{GuestId}</td>
                                    <td>{CampId}</td>
                                    <td>{CampingStyle}</td>
                                    <td>{Electricity}</td>
                                    <td>{Price}</td>
                                    <td>{ReserveStart}</td>
                                    <td>{ReserveEnd}</td>
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

export default ReservesList;