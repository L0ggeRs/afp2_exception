package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.controller.dto.RecordReservationRequest;
import hu.uni.eku.tzs.dao.entity.Reservation;
import hu.uni.eku.tzs.service.ReservationService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ReservationController {

    private final ReservationService reservationService;


    @PostMapping("/reservation/record")
    @ApiOperation(value = "Record a reservation")
    public void register(
            @RequestBody RecordReservationRequest request
    ){
        reservationService.register(new RecordReservationRequest(
                request.getGuest_id(),
                request.getCamp_id(),
                request.getCamping_style(),
                request.getElectricity(),
                request.getPrice(),
                request.getReserve_start(),
                request.getReserve_end()
        ));
    }

    @GetMapping("/reservations")
    private List<Reservation> getAllReservations() {
        return reservationService.getReservation();
    }

    @DeleteMapping(value = {"/deleteReservation{reservationId}"})
    @ApiOperation(value = "Delete a Reservation")
    public void delete(@PathVariable Integer reservationId)
    {
        reservationService.delete(reservationId);
    }


}
