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
            ReservationStart : "2000-01-01",
            ReservationEnd : "2000-01-02"
        };
        this.formOnChange = this.formOnChange.bind(this);
    }
    isNumber(n){
        const re = /^[0-9\b]+$/;
        return re.test(n)

    }

    whichType(n){
        let x ;
        if (n === "Karaván") { x =1;}
        else x= 0;
        let st = this.state;
        st.CampingStyle = x;
        this.setState(st);

    }
    IsPrice(n){
        if (n<0) {alert("Minuszt nem lehet megadni")}
        else if (!this.isNumber(n)) {alert("Hibás Ár\nNem számot adott meg");}
        else {
            let st = this.state;
            st.Price = n;
            this.setState(st);
        }

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
                                   list={"type"}
                                   onChange={(e) => {

                                       let st = this.state;
                                       st.camping_style = e.target.value;
                                       this.setState(st);
                                   }}
                            />
                            <datalist id={"type"}>
                                <option value={"Karaván"} id={"1"}></option>
                                <option value={"Sátor"} id={"0"}></option>
                            </datalist>

                        </div>
                        <div className="p-2">
                            <h4>Áram:</h4>
                            <input className={"form-control myinput"} type="checkbox"
                                   value={this.state.Electricity}
                                   onChange={(e) => {
                                       let st = this.state;
                                       st.Electricity = e.target.checked;
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
                                        this.whichType(this.state.camping_style);
                                        this.IsPrice(this.state.Price);
                                        if (!this.isNumber(this.state.ReserveID)) {alert("A Foglalás ID hibás\nCsak számot lehet megadni");                                        }
                                        else if (!this.isNumber(this.state.GuestID)) {alert("A vendég id nem megfelő");}
                                        else if (!this.isNumber(this.state.CampID)) {alert("A cmaping id nem megfelő");}
                                        else if (this.state.camping_style === '') {alert("Választani kell tipust !")}
                                        else{actions.recordReservations(this.state);}
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
