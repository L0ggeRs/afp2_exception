import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ReservationsActionConstants';

export const recordReservations = ({ReserveId, GuestId, CampId, CampingStyle, Electricity, Price, ReservationStart, ReservationEnd}) =>{
    axios.post('/reservations/record',
        {
            reserveId : ReserveId,
            guestId : GuestId,
            campId: CampId,
            campingStyle : CampingStyle,
            electricity : Electricity,
            price : Price,
            reservationStart : ReservationStart,
            reservationEnd : ReservationEnd
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
