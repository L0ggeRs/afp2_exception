package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.controller.dto.RecordGuestRequest;
import hu.uni.eku.tzs.dao.entity.Guest;

import java.util.List;

public interface GuestService {

    void register(RecordGuestRequest request);

    List<Guest> getGuest();

    void  delete(Integer guestId);
}
