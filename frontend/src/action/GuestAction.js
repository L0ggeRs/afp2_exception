import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/GuestActionConstants';

export const recordGuest = ({GuestName,GuestID,GuestEmail,GuestPhone}) =>{
    axios.post('/guest/record',
        {
            name : GuestName,
            guestId : GuestID,
            email: GuestEmail,
            phone : GuestPhone,
        })
        .then(() => {
            fetchComplexNumbers();
            dispatcher.dispatch({action : actionConstants.clearError});
        })
        .catch((err) => {
            dispatcher.dispatch({
                action : actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });
            fetchComplexNumbers();
        });
};

export const fetchComplexNumbers = () =>{

    axios.get('/guest/').then((resp)=>{
        dispatcher.dispatch({
            action : actionConstants.refresh,
            payload: resp.data
        });
    });
};
