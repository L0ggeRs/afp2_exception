import React from "react";
import ErrorMessageWell from "../ErrorMessageWell";
import * as actions from "../../action/GuestAction";
import "./GuestAddForm.css";
import "../GuestList";
import GuestList from "../GuestList";


class GuestAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GuestName : "Nev",
            GuestEmail: "email cím",
            GuestPhone: "telefonszám",
        };
        this.formOnChange = this.formOnChange.bind(this);
    }
        isNumber(n){
            const re = /^[0-9\b]+$/;
            return re.test(n)
        }
    formOnChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render() {
        return (
            <div className="GuestAddForm">
                <h3 className="text-center GuestCim">Vendég létrehozása és listázása</h3>
                <div className="table-responsive">
                    <ErrorMessageWell/>
                    <table className="table GuestTablazat">
                        <tbody>
                        <tr className="Nev">
                            <td>Név:</td>
                            <td>
                                <input className={"form-control myinput"}
                                       type={"text"}
                                       value={this.state.GuestName}
                                       onChange={(e) => {
                                           let st = this.state;
                                           st.GuestName = e.target.value;
                                           this.state.setState(st);
                                       }}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Email cím:</td>
                            <td>
                                <input className={"form-control myinput"}
                                       type={"text"}
                                       value={this.state.GuestEmail}
                                       onChange={(e) => {
                                           let st = this.state;
                                           st.GuestEmail = e.target.value;
                                           this.setState(st);
                                       }}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Telefonszám:</td>
                            <td>
                                <input className={"form-control myinput"} type={"string"}
                                       value={this.state.GuestPhone}
                                       onChange={(e) => {
                                               let st = this.state;
                                               st.GuestPhone = e.target.value;
                                               this.setState(st);
                                       }}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td
                                colSpan={2}>
                                <button type={"submit"}
                                        className="btn btn-info Guestbtn"
                                        onClick={() => {
                                            if (!this.isNumber(this.state.GuestPhone)) {alert("Hibás telefonszám")}
                                            else {
                                                actions.recordGuest(this.state);
                                            }
                                        }}
                                >Létrehozás
                                </button>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                    <div className="VendegListazas">
                        <GuestList/>
                    </div>
                </div>
                <br/>

            </div>
        );
    }
}
export default  GuestAddForm;
