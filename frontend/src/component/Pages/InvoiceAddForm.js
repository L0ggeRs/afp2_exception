import React from "react";
import ErrorMessageWell from "../ErrorMessageWell";
import * as actions from "../../action/InvoiceAction";
import InvoiceList from "../InvoiceList";
import "./InvoiceAddForm.css";


class InvoiceAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            InvoiceID: '0',
            GuestID: '0',
            Price: '0',
            PaymentMethod: "készpénz",
            ReserveID: '0'
        };
        this.formOnChange = this.formOnChange.bind(this);
    }

    formOnChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render() {
        return (
            <div className="col-lg-12">
            <div className="InvoiceAddForm">
                <h3 className="text-center SzamlaCim">Számla létrehozása és listázása</h3>
                <div className="row">
                    <div className="col">
                <div className="table-responsive">
                    <ErrorMessageWell/>
                    <table className="table SzamlaTablazat">
                        <tbody>
                        <tr className="Nev">
                            <td>Számla ID:</td>
                            <td>
                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.InvoiceID}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.InvoiceID = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td>Vendég ID:</td>
                            <td>
                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.GuestID}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.GuestID = e.target.value;
                                       this.setState(st);
                                   }}
                            />

                            </td>
                        </tr>
                        <tr>
                            <td>Fizetés:</td>
                            <td>

                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.PaymentMethod}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.PaymentMethod = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td>Foglalás ID:</td>
                            <td>
                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.ReserveID}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.ReserveID = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td
                                colSpan={2}>
                            <button type={"submit"}
                                    className="btn btn-info InvoiceBtn"
                                    onClick={() => {
                                        actions.recordInvoice(this.state);
                                    }}
                            >Létrehoz
                            </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br/>
                </div>
                    </div>
                    <div className="SzamlaListazas col">
                        <InvoiceList/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default InvoiceAddForm;