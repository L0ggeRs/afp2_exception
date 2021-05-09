package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.controller.dto.RecordGuestRequest;
import hu.uni.eku.tzs.dao.GuestRepository;
import hu.uni.eku.tzs.dao.entity.Guest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class GuestServiceImpl implements GuestService {

    private final GuestRepository GuestRepository;


    @Override
    public void register(RecordGuestRequest request) {
        Optional.ofNullable(GuestRepository.getByEmail(request.getEmail())).ifPresent(guest ->
                {throw new RuntimeException(String.format("%s emailcím már foglalt ", guest.getEmail()));}
        );
        Optional.ofNullable(GuestRepository.getGuestByName(request.getName())).ifPresent(Guest ->
                {throw new RuntimeException(String.format("%s felhaszánlónév foglalt.", request.getName())); }
        );
        Guest guest = Guest.createGuest(request);
        GuestRepository.save(guest);
    }

    @Override
    public List<Guest> getGuest() {
        return GuestRepository.findAll().stream().map(Guest::toGuestRequest).collect(Collectors.toList());
    }

    @Override
    public void delete(Integer guestId) {
        Guest temp = GuestRepository.getGuestById(guestId);
        GuestRepository.delete(temp);
    }


}
