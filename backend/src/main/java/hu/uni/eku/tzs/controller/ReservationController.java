package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.controller.dto.ReservationDto;
import hu.uni.eku.tzs.controller.dto.ReservationRecordRequestDto;
import hu.uni.eku.tzs.model.Reservation;
import hu.uni.eku.tzs.service.ReservationService;
import hu.uni.eku.tzs.service.exceptions.ReservationAlreadyExistsException;
import hu.uni.eku.tzs.service.exceptions.ReservationNotFoundException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/reservation")
@RequiredArgsConstructor
@Api(tags = "Reservation")
@Slf4j

public class ReservationController {
    private final ReservationService service;

    @GetMapping(value = {"/"},produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @ApiOperation(value = "Query Reservation")
    public Collection<ReservationDto> query(){
        return  service.readAll().stream().map(model ->
                ReservationDto.builder()
                        .reservationId(model.getReservationId())
                        .guestId(model.getGuestId())
                        .campId(model.getCampId())
                        .camping_style(model.getCamping_style())
                        .electricity(model.isElectricity())
                        .price(model.getPrice())
                        .reserve_start(model.getReserve_start())
                        .reserve_end(model.getReserve_end())
                        .build()
        ).collect(Collectors.toList());
    }
    @PostMapping(value = {"/record"})
    @ApiOperation(value = "Record")
    public  void record(
            @RequestBody
                    ReservationRecordRequestDto request
    ){
        try {
            service.record(new Reservation(
                    request.getReservationId(),
                    request.getGuestId(),
                    request.getCampId(),
                    request.getCamping_style(),
                    request.isElectricity(),
                    request.getPrice(),
                    request.getReserve_start(),
                    request.getReserve_end()));
        }catch (ReservationAlreadyExistsException e){
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }


    @DeleteMapping(value = {"/{reservationId}"})
    @ApiOperation(value = "Delete a Reservation")
    public void delete(@PathVariable Integer reservationId)
    {
        try {
            service.delete(reservationId);
        }catch (ReservationNotFoundException e){
            throw  new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }

}