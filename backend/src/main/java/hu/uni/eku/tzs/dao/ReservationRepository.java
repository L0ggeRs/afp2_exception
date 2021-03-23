package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.dao.entity.Reservation;
import org.springframework.data.repository.CrudRepository;

public interface ReservationRepository extends CrudRepository<Reservation, Integer>
{
    Reservation findByReservationId (Integer reservationId);
}
