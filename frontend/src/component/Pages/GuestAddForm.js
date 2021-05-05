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
        };
        this.formOnChange = this.formOnChange.bind(this);
    }
        isNumber(n){
            const re = /^[0-9\b]+$/;
            if (n === '' || re.test(n)) {
                let st = this.state;
                st.GuestID = n;
                this.setState({value: st })
                return -1
            }
            return -2
        }
    formOnChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render() {
        return (
            <div>
                <h3 className="text-center cim">Vendég létrehozása</h3>
                <div className="table-responsive">
                    <ErrorMessageWell/>
                    <hr/>

                    <table className="table borderless tablazat">
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
                            <td>ID:</td>
                            <td>
                                <input className={"form-control myinput"}
                                       type={"text"}
                                       value={this.state.GuestID}
                                       onChange={(e) => {
                                                  if (this.isNumber(e.target.value) == -2){
                                                      alert('Hiba az ID megadásánál.\n Csak számot lehet megadni.',)
                                                  }
                                                }
                                       }


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
                                           if(this.isNumber(e.target.value)){
                                               let st = this.state;
                                               st.GuestPhone = e.target.value;
                                               this.setState(st);
                                           }
                                       }}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td
                                colSpan={2}>
                                <button type={"submit"}
                                        className="btn btn-info"
                                        onClick={() => {
                                            actions.recordGuest(this.state);
                                        }}
                                >Létrehozás
                                </button>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                    <div className="listazas">
                        <GuestList/>
                    </div>
                </div>
                <br/>

            </div>

    );
    }
    }
    export default  GuestAddForm;
