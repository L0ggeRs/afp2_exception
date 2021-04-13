import React from 'react';
import {default as store} from '../store/GuestStore';
import GuestListitem from "./GuestListitem";

class GuestList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {guests : []};
        this._updateState = this._updateState.bind(this);
    }


    componentDidMount() {
        store.addChangeListener(this._updateState);
    }


    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState(){
        this.setState({guests : store.guests});
    }

    render() {
        return(
            <div>
                {this.state.guests.map(({GuestName,GuestID,GuestEmail,GuestPhone}, index)=>{
                    return(
                        <GuestListitem key={index} GuestName={GuestName} GuestID={GuestID} GuestPhone={GuestPhone} GuestEmail={GuestEmail}/>
                    );
                })}
            </div>
        );
    }
}

export default GuestList;
