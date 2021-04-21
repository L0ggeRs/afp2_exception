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
            fetchGuests();
            dispatcher.dispatch({action : actionConstants.clearError});
        })
        .catch((err) => {
            dispatcher.dispatch({
                action : actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });
            fetchGuests();
        });
};

export const fetchGuests = () =>{

    axios.get('/guest/').then((resp)=>{
        dispatcher.dispatch({
            action : actionConstants.refresh,
            payload: resp.data
        });
    });
};
export const DeleteGuests = (id) =>{

    axios.delete('/guest/'+id).then(() => {
        fetchGuests();
        dispatcher.dispatch({action : actionConstants.deleteError});
    })
        .catch((err) => {
            dispatcher.dispatch({
                action : actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });
            fetchGuests();
        });
};

