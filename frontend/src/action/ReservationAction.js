import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ReservationActionConstants';

export const recordReservations = ({ReservationId, GuestId, CampId, CampingStyle, Electricity, Price, ReserveStart, ReserveEnd}) =>{
    axios.post('/reservations/record',
        {
            reserveId : ReservationId,
            guestId : GuestId,
            campId: CampId,
            campingStyle : CampingStyle,
            electricity : Electricity,
            price : Price,
            reserveStart : ReserveStart,
            reserveEnd : ReserveEnd
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

    axios.get('/reservation/').then((resp)=>{
        dispatcher.dispatch({
            action : actionConstants.refresh,
            payload: resp.data
        });
    });
};
export const DeleteReservations = (id) =>{

    axios.delete('/reservation/'+id).then(() => {
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
