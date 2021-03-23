package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.controller.dto.GuestDto;
import hu.uni.eku.tzs.controller.dto.GuestRecordRequestDto;
import hu.uni.eku.tzs.model.Guest;
import hu.uni.eku.tzs.service.GuestService;
import hu.uni.eku.tzs.service.exceptions.GuestAlreadyExistsException;
import hu.uni.eku.tzs.service.exceptions.GuestNotFoundException;
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
@RequestMapping(value = "/guest")
@RequiredArgsConstructor
@Api(tags = "Guest")
@Slf4j

public class GuestController {
    private final GuestService service;

    @GetMapping(value = {"/"},produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @ApiOperation(value = "Query Guest")
    public Collection<GuestDto> query(){
        return  service.readAll().stream().map(model ->
                GuestDto.builder()
                        .guestId(model.getGuestId())
                        .name(model.getName())
                        .email(model.getEmail())
                        .phone(model.getPhone())
                        .build()
        ).collect(Collectors.toList());
    }
    @PostMapping(value = {"/record"})
    @ApiOperation(value = "Record")
    public  void record(
            @RequestBody
                    GuestRecordRequestDto request
    ){
        try {
            service.record(new Guest(
                    request.getGuestId(),
                    request.getName(),
                    request.getEmail(),
                    request.getPhone()));
        }catch (GuestAlreadyExistsException e){
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }


    @DeleteMapping(value = {"/{guestId}"})
    @ApiOperation(value = "Delete a Guest")
    public void delete(@PathVariable Integer guestId)
    {
        try {
            service.delete(guestId);
        }catch (GuestNotFoundException e){
            throw  new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }

}