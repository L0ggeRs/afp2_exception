import React from 'react';

function InvoiceListItem({InvoiceID, GuestID, Price, PaymentMethod, ReserveID}){
    return(
        <span>({InvoiceID}, {GuestID}, {Price}, {PaymentMethod}, {ReserveID})</span>
    );
}
export default InvoiceListItem;