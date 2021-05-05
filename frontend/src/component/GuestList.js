import React from 'react';
import {default as store} from '../store/GuestStore';
import * as actions from "../action/GuestAction";

class GuestList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {guests : []};
        this._updateState = this._updateState.bind(this);
    }


    componentDidMount() {
        store.addChangeListener(this._updateState);
    }


    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState(){
        this.setState({guests : store.guests});
    }

    render() {
        return(
            <div>

                <div div className="table-responsive">
                    <table className="product_table table">
                        <thead>
                        <tr>
                            <td>ID </td>
                            <td>Név </td>
                            <td>Email cím </td>
                            <td>Telefonszám </td>
                            <td> <button className="btn btn-info Guestbtn" onClick={()=> actions.fetchGuests(this.state)}>Listáz</button></td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.guests.map(({id,guestId,name,email,phone})=>{
                            return(
                                <tr key={id}>
                                    <td>{guestId}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
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

export default GuestList;
