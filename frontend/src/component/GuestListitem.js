import React from 'react';

function GuestListitem({GuestName,GuestId,GuestEmail,GuestPhone}){
    return (
        <span>({GuestName}, {GuestId}, {GuestEmail}, {GuestPhone})</span>
    );
}

export default GuestListitem;
