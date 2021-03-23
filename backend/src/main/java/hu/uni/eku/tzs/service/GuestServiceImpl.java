package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.dao.GuestDao;
import hu.uni.eku.tzs.model.Guest;
import hu.uni.eku.tzs.service.exceptions.GuestAlreadyExistsException;
import hu.uni.eku.tzs.service.exceptions.GuestNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Slf4j
@RequiredArgsConstructor
@Service
class GuestServiceImpl implements GuestService {
    private final GuestDao dao;

    @Override
    public void record(Guest guest)throws GuestAlreadyExistsException{
        final boolean alreadyExists = dao.readAll()
                .stream()
                .anyMatch(guestTemp ->
                        guestTemp.getGuestId() == guest.getGuestId());
        if (alreadyExists){
            throw new GuestAlreadyExistsException(String.format("Guest (%s) already exists!",guest.toString()));
        }
        dao.create(guest);

    }

    @Override
    public  Collection<Guest>readAll(){
        return dao.readAll();
    }


    @Override
    public  void delete(Integer guestId)throws  GuestNotFoundException{
        dao.delete(guestId);
    }
}