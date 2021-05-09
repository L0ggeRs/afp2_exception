package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.controller.dto.RecordReservationRequest;
import hu.uni.eku.tzs.dao.ReservationRepository;
import hu.uni.eku.tzs.dao.entity.Reservation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService{

    private final ReservationRepository reservationRepository;


    @Override
    public void register(RecordReservationRequest request) {
        Reservation reservation = Reservation.createReservation(request);
        reservationRepository.save(reservation);
    }

    @Override
    public List<Reservation> getReservation() {
        return reservationRepository.findAll().stream().map(Reservation::toReservationRequest).collect(Collectors.toList());
    }

    @Override
    public void delete(Integer reservationId) {
        Reservation temp = reservationRepository.getReservationById(reservationId);
        reservationRepository.delete(temp);
    }


}
