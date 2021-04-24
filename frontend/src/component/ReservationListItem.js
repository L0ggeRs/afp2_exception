import React from 'react';

function ReservationListItem({ReservationId, GuestId, CampId, CampingStyle, Electricity, Price, ReservationStart, ReservationEnd}){
    return(
        <span>({ReservationId}, {GuestId}, {CampId}, {CampingStyle}, {Electricity}, {Price}, {ReservationStart}, {ReservationEnd})</span>
    );
}
export default ReservationListItem;