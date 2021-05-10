import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/GuestActionConstants';

export const recordGuest = ({GuestName,GuestEmail,GuestPhone}) =>{
    axios.post('/guest/record',
        {
            name : GuestName,
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

    axios.get('/guests/').then((resp)=>{
        dispatcher.dispatch({
            action : actionConstants.refresh,
            payload: resp.data
        });
    });
};
export const DeleteGuests = (id) =>{

    axios.delete('/deleteGuest'+id).then(() => {
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

