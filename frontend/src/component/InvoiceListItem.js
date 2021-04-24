import React from 'react';

function InvoiceListItem({InvoiceID, GuestID, PaymentMethod, ReserveID}){
    return(
        <span>({InvoiceID}, {GuestID}, {PaymentMethod}, {ReserveID})</span>
    );
}
export default InvoiceListItem;