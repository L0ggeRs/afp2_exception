package hu.uni.eku.tzs.service;


import hu.uni.eku.tzs.model.Guest;
import hu.uni.eku.tzs.service.exceptions.GuestAlreadyExistsException;
import hu.uni.eku.tzs.service.exceptions.GuestNotFoundException;

import java.util.Collection;

public interface GuestService {

    void record(Guest guest)throws GuestAlreadyExistsException;

    void  delete(Integer guestId)throws GuestNotFoundException;

    Collection<Guest>readAll();
}
