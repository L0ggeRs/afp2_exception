import React from "react";
import ErrorMessageWell from "../ErrorMessageWell";
import * as actions from "../../action/InvoiceAction";


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
            <div>
                <ErrorMessageWell/>
                <h2>Számla létrehozása</h2>
                <hr/>
                <form className="myform">
                    <div className="d-flex justify-content-md-end">
                        <div className="p-2">
                            <h4>SzámlaID:</h4>
                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.InvoiceID}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.InvoiceID = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                        </div>
                        <div className="p-2">
                            <h4>VendégID:</h4>
                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.GuestID}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.GuestID = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                        </div>
                        <div className="p-2">
                            <h4>Ár:</h4>
                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.Price}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.Price = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                        </div>
                        <div className="p-2">
                            <h4>Fizetés:</h4>
                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.PaymentMethod}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.PaymentMethod = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                        </div>
                        <div className="p-2">
                            <h4>FoglalásID:</h4>
                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.ReserveID}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.ReserveID = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                        </div>
                        <div className="p-2">
                            <br/><br/><br/><br/>
                            <button type={"submit"}
                                    className="btn btn-info"
                                    onClick={() => {
                                        actions.recordInvoice(this.state);
                                    }}
                            >Létrehoz
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default  InvoiceAddForm;