package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.dao.ReservationDao;
import hu.uni.eku.tzs.model.Reservation;
import hu.uni.eku.tzs.service.exceptions.ReservationAlreadyExistsException;
import hu.uni.eku.tzs.service.exceptions.ReservationNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Slf4j
@RequiredArgsConstructor
@Service
class ReservationServiceImpl implements ReservationService {
    private final ReservationDao dao;

    @Override
    public void record(Reservation reservation)throws ReservationAlreadyExistsException{
        final boolean alreadyExists = dao.readAll()
                .stream()
                .anyMatch(reserve ->
                        reserve.getReservationId() == reservation.getReservationId());
        if (alreadyExists){
            throw new ReservationAlreadyExistsException(String.format("Reservation (%s) already exists!",reservation.toString()));
        }
        dao.create(reservation);

    }

    @Override
    public  Collection<Reservation>readAll(){
        return dao.readAll();
    }


    @Override
    public  void delete(Integer reservationId)throws  ReservationNotFoundException{
        dao.delete(reservationId);
    }
}