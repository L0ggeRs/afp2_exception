package hu.uni.eku.tzs.service;


import hu.uni.eku.tzs.model.Reservation;
import hu.uni.eku.tzs.service.exceptions.ReservationAlreadyExistsException;
import hu.uni.eku.tzs.service.exceptions.ReservationNotFoundException;

import java.util.Collection;

public interface ReservationService {

    void record(Reservation reservation)throws ReservationAlreadyExistsException;

    void  delete(Integer reserveId)throws ReservationNotFoundException;

    Collection<Reservation>readAll();
}
