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
    checkEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    isNumber(n){
            const re = /^[0-9\b]+$/;
            return re.test(n)
        }
    checkPhone(Phone){
        const re1 = /^[0-9\b]+$/;
        const re2 = /^\d{11}$/;

        return re1.test(Phone)&&re2.test(Phone)
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
                                           this.setState(st);
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
                                            if (!this.checkPhone(this.state.GuestPhone)) {alert("Hibás telefonszám")}
                                            else if (!this.checkEmail(this.state.GuestEmail)) {alert("Hibás email cím formátum")}
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
