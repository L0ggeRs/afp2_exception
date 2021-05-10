import React from 'react';
import {default as store} from '../store/ReservationStore';
import * as actions from "../action/ReservationAction";

class ReservationList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {reservations : []};
        this._updateState = this._updateState.bind(this);
    }

    componentDidMount() {
        store.addChangeListener(this._updateState);
    }

    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState(){
        this.setState({reservations : store.reservations});
    }

    render() {
        return(
            <div>
                <div className="table-responsive">
                    <table className="product_table table">
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
                            <td> <button className="btn btn-info ReserveBtn" onClick={()=> actions.fetchReservations(this.state)}>Listáz</button> </td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.reservations.map(({id, guest_id, camp_id, camping_style, electricity, price, reserve_start, reserve_end})=>{
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{guest_id}</td>
                                    <td>{camp_id}</td>
                                    <td>{camping_style}</td>
                                    <td>{electricity.toString()}</td>
                                    <td>{price}</td>
                                    <td>{reserve_start}</td>
                                    <td>{reserve_end}</td>
                                    <td> <button className="btn btn-info ReserveBtn" onClick={()=> actions.DeleteReservations(id)}>Töröl</button></td>
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

export default ReservationList;