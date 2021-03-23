package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.dao.entity.Guest;
import org.springframework.data.repository.CrudRepository;

public interface GuestRepository extends CrudRepository<Guest, Integer>
{
    Guest findByGuestId (Integer guestId);
}