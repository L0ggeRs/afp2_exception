import {EventEmitter} from 'events';
import dispatcher from "../dispatcher/Dispatcher";
import {refresh} from '../dispatcher/ReservationsActionConstants';

class ReservationsStore extends EventEmitter{

    reservations = [];

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

const store = new ReservationsStore();
export default store;

dispatcher.register(({action,payload})=>{
    if(action !== refresh ) return;
    store.reservations = payload;
    store.emitChange();
});
