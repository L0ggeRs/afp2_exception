import React from 'react';
import {default as store} from '../store/InvoiceStore';
import * as actions from "../action/InvoiceAction";

class InvoiceList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {invoices : []};
        this._updateState = this._updateState.bind(this);
    }

    componentDidMount() {
        store.addChangeListener(this._updateState);
    }

    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState(){
        this.setState({invoices : store.invoices});
    }

    render() {
        return(
            <div>
                <div className="table-responsive">
                    <table className="product_table table">
                        <thead>
                        <tr>
                            <td>SzámlaID</td>
                            <td>VendégID</td>
                            <td>Fizetés</td>
                            <td>FoglalásID</td>
                            <td> <button className="btn btn-info InvoiceBtn" onClick={()=> actions.fetchInvoices(this.state)}>Listáz</button> </td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.invoices.map(({id, guest_id, payment_method, reserve_id})=>{
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{guest_id}</td>
                                    <td>{payment_method}</td>
                                    <td>{reserve_id}</td>
                                    <td> <button className="btn btn-info InvoiceBtn" onClick={()=> actions.DeleteInvoices(id)}>Töröl</button></td>
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
export default InvoiceList;