import {EventEmitter} from 'events';
import dispatcher from "../dispatcher/Dispatcher";
import {refresh} from '../dispatcher/InvoiceActionConstants';

class InvoiceStore extends EventEmitter{

    invoices = [];

    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.addListener('Change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change',callback);
    }
}

const store = new InvoiceStore();
export default store;

dispatcher.register(({action,payload})=>{
    if(action !== refresh ) return;
    store.invoices = payload;
    store.emitChange();
});