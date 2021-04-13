import React from 'react';

function ReservesListItem({ReserveId, GuestId, CampId, CampingStyle, Electricity, Price, ReserveStart, ReserveEnd}){
    return(
        <span>({ReserveId}, {GuestId}, {CampId}, {CampingStyle}, {Electricity}, {Price}, {ReserveStart}, {ReserveEnd})</span>
    );
}

export default ReservesListItem;