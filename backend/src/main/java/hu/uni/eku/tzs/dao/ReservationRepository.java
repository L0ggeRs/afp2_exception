package hu.uni.eku.tzs.dao;


import hu.uni.eku.tzs.dao.entity.Guest;
import hu.uni.eku.tzs.dao.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation,Integer> {

    Guest getGuestById(Integer guestId);

}
