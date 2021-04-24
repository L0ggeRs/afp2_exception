import React from "react";
import ErrorMessageWell from "../ErrorMessageWell";
import * as actions from "../../action/ReservationAction";


class ReservationAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ReserveID: '0',
            GuestID: '0',
            CampID: '0',
            CampingStyle: '0',
            Electricity : true,
            Price : '0',
            ReservationStart : "2000-01-01T00:00:00.000",
            ReservationEnd : "2000-01-01T00:00:00.000"
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
                <h2>Foglalás létrehozása</h2>
                <hr/>
                <form className="myform">
                    <div className="d-flex justify-content-md-end">
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
                            <h4>CampID:</h4>
                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.CampID}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.CampID = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                        </div>
                        <div className="p-2">
                            <h4>Típus:</h4>
                            <input className={"form-control myinput"}
                                   type={"text"}
                                   value={this.state.CampingStyle}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.CampingStyle = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                        </div>
                        <div className="p-2">
                            <h4>Áram:</h4>
                            <input className={"form-control myinput"} type={"string"}
                                   value={this.state.Electricity}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.Electricity = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                        </div>
                        <div className="p-2">
                        <h4>Ár:</h4>
                        <input className={"form-control myinput"} type={"string"}
                               value={this.state.Price}
                               onChange={(e) => {
                                   let st = this.state;
                                   st.Price = e.target.value;
                                   this.setState(st);
                               }}
                        />
                        </div>
                        <div className="p-2">
                            <h4>Foglalás kezdete:</h4>
                            <input className={"form-control myinput"} type={"string"}
                                   value={this.state.ReservationStart}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.ReservationStart = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                        </div>
                        <div className="p-2">
                            <h4>Foglalás vége:</h4>
                            <input className={"form-control myinput"} type={"string"}
                                   value={this.state.ReservationEnd}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.ReservationEnd = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                        </div>
                        <div className="p-2">
                            <br/><br/><br/><br/>
                            <button type={"submit"}
                                    className="btn btn-info"
                                    onClick={() => {
                                        actions.recordReservations(this.state);
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
export default  ReservationAddForm;