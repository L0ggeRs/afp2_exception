import React from 'react';

function GuestListitem({GuestName,GuestID,GuestEmail,GuestPhone}){
    return (
        <span>({GuestName}, {GuestID}, {GuestEmail}, {GuestPhone})</span>
    );
}

export default GuestListitem;
