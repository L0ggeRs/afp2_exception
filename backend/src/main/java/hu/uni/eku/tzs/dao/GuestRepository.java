package hu.uni.eku.tzs.dao;


import hu.uni.eku.tzs.dao.entity.Guest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuestRepository extends JpaRepository<Guest,Integer> {
    Guest getByEmail(String email);

    Guest getGuestByName(String name);

    Guest getGuestById(Integer guestId);

}
