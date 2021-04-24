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
                            <td> <button className="btn btn-info" onClick={()=> actions.fetchInvoices(this.state)}>Listáz</button> </td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.invoices.map(({invoiceId, guestId, paymentMethod, reserveId})=>{
                            return(
                                <tr key={invoiceId}>
                                    <td>{invoiceId}</td>
                                    <td>{guestId}</td>
                                    <td>{paymentMethod}</td>
                                    <td>{reserveId}</td>
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