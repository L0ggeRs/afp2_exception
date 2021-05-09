package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.controller.dto.RecordGuestRequest;
import hu.uni.eku.tzs.dao.entity.Guest;
import hu.uni.eku.tzs.service.GuestService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class GuestController {

    private final GuestService guestService;


    @PostMapping("/guest/record")
    @ApiOperation(value = "Record a guest")
    public void register(
            @RequestBody RecordGuestRequest request
    ){
        guestService.register(new RecordGuestRequest(
                request.getName(),
                request.getEmail(),
                request.getPhone()
        ));
    }

    @GetMapping("/guests")
    private List<Guest> getAllProduct() {
        return guestService.getGuest();
    }

    @DeleteMapping(value = {"/delete{guestId}"})
    @ApiOperation(value = "Delete a Guest")
    public void delete(@PathVariable Integer guestId)
    {
        guestService.delete(guestId);
    }


}
