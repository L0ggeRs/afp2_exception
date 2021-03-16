
package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.model.Reservation;

import java.util.Collection;

public interface ReservationDao {

    void create(Reservation reservation);

    Collection<Reservation> readAll();

    void delete(Integer reservationId);
}
