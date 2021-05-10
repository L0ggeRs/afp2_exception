import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ReservationActionConstants';

export const recordReservations = ({ GuestID, CampID, CampingStyle, Electricity, Price, ReservationStart, ReservationEnd}) =>{
    axios.post('/reservation/record',
        {
            guest_id : GuestID,
            camp_id: CampID,
            camping_style : CampingStyle,
            electricity : Electricity,
            price : Price,
            reserve_start : ReservationStart,
            reserve_end : ReservationEnd
        })
        .then(() => {
            fetchReservations();
            dispatcher.dispatch({action : actionConstants.clearError});
        })
        .catch((err) => {
            dispatcher.dispatch({
                action : actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });
            fetchReservations();
        });
};

export const fetchReservations = () =>{

    axios.get('/reservations/').then((resp)=>{
        dispatcher.dispatch({
            action : actionConstants.refresh,
            payload: resp.data
        });
    });
};
export const DeleteReservations = (id) =>{

    axios.delete('/deleteReservation'+id).then(() => {
        fetchReservations();
        dispatcher.dispatch({action : actionConstants.deleteError});
    })
        .catch((err) => {
            dispatcher.dispatch({
                action : actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });
            fetchReservations();
        });
};
