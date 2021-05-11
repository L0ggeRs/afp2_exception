import React from "react";
import ErrorMessageWell from "../ErrorMessageWell";
import * as actions from "../../action/InvoiceAction";
import InvoiceList from "../InvoiceList";
import "./InvoiceAddForm.css";


class InvoiceAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GuestID: '0',
            PaymentMethod: "készpénz",
            ReserveID: '0'
        };
        this.formOnChange = this.formOnChange.bind(this);
    }
    isNumber(n){
        const re = /^[0-9\b]+$/;
        return re.test(n)

    }
    IsPrice(n){
        if (n<0) {alert("Mínuszt nem lehet megadni"); return false;}
        else if (!this.isNumber(n)) {alert("Hibás Ár\nNem számot adott meg"); return false;}
        else {
            let st = this.state;
            st.Price = n;
            this.setState(st);

        }
        return true;
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
                                        if(!this.isNumber(this.state.GuestID))
                                        {
                                            alert("Hibás Vendég ID");
                                        }
                                        else if(!this.isNumber(this.state.ReserveID)){ alert("Hibás Foglalás ID")}
                                        else {
                                            actions.recordInvoice(this.state);
                                        }
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
