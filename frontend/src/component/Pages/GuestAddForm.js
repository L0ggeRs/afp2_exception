import React from "react";
import ErrorMessageWell from "../ErrorMessageWell";
import * as actions from "../../action/GuestAction";


class GuestAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GuestName: 'Béla',
            GuestID: '0',
            GuestEmail: 'example@example.com',
            GuestPhone: '123456789',
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
                <h2>Vendég létrehozása</h2>
                <hr/>
                <form className="myform">

                        <div className="d-flex justify-content-md-end">
                            <div className="p-2">
                                <h4>Név:</h4>
                                <input className={"form-control myinput"}
                                       type={"text"}
                                       value={this.state.GuestName}
                                       onChange={(e) => {
                                           let st = this.state;
                                           st.GuestName = e.target.value;
                                           this.setState(st);
                                       }}
                                />
                            </div>
                            <div className="p-2">
                                <h4>ID :</h4>
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
                            <div className="p-2"><h4>Email:</h4>
                                <input className={"form-control myinput"}
                                       type={"text"}
                                       value={this.state.GuestEmail}
                                       onChange={(e) => {
                                           let st = this.state;
                                           st.GuestEmail = e.target.value;
                                           this.setState(st);
                                       }}
                                /></div>




                    <div className="form-group">
                        <div className="d-flex justify-content-end">
                            <div className="p-2">
                                <h4>Telefonszám:</h4>
                                <input className={"form-control myinput"} type={"string"}
                                       value={this.state.GuestPhone}
                                       onChange={(e) => {
                                           let st = this.state;
                                           st.GuestPhone = e.target.value;
                                           this.setState(st);
                                       }}
                                />
                            </div>
                        </div>

                        </div>
                        <div className="p-2">
                            <br/><br/><br/><br/>
                            <button type={"submit"}
                                    className="btn btn-info"
                                    onClick={() => {
                                        actions.recordGuest(this.state);
                                    }}
                            >Létrehoz
                            </button>
                        </div>
                    </div>
                    <br/>

                </form>


            </div>
        );
    }
}
export default  GuestAddForm;