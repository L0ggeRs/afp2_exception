import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/InvoiceActionConstants';

export const recordInvoice = ({GuestID,PaymentMethod,ReserveID}) =>{
    axios.post('/invoice/record',
        {
            guest_id : GuestID,
            payment_method: PaymentMethod,
            reserve_id : ReserveID
        })
        .then(() => {
            fetchInvoices();
            dispatcher.dispatch({action : actionConstants.clearError});
        })
        .catch((err) => {
            dispatcher.dispatch({
                action : actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });
            fetchInvoices();
        });
};

export const fetchInvoices = () =>{

    axios.get('/invoices').then((resp)=>{
        dispatcher.dispatch({
            action : actionConstants.refresh,
            payload: resp.data
        });
    });
};
export const DeleteInvoices = (id) =>{

    axios.delete('/deleteInvoice'+id).then(() => {
        fetchInvoices();
        dispatcher.dispatch({action : actionConstants.deleteError});
    })
        .catch((err) => {
            dispatcher.dispatch({
                action : actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });
            fetchInvoices();
        });
};

