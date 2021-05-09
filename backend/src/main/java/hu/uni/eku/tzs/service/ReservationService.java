package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.controller.dto.RecordReservationRequest;
import hu.uni.eku.tzs.dao.entity.Reservation;

import java.util.List;

public interface ReservationService {

    void register(RecordReservationRequest request);

    List<Reservation> getReservation();

    void  delete(Integer reservationId);
}
