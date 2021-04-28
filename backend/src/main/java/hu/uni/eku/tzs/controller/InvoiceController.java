package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.controller.dto.InvoiceDto;
import hu.uni.eku.tzs.controller.dto.InvoiceRecordRequestDto;
import hu.uni.eku.tzs.model.Invoice;
import hu.uni.eku.tzs.service.InvoiceService;
import hu.uni.eku.tzs.service.exceptions.InvoiceAlreadyExistsException;
import hu.uni.eku.tzs.service.exceptions.InvoiceNotFoundException;
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
@RequestMapping(value = "/invoice")
@RequiredArgsConstructor
@Api(tags = "Invoice")
@Slf4j

public class InvoiceController {
    private final InvoiceService service;

    @GetMapping(value = {"/"},produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @ApiOperation(value = "Query Invoice")
    public Collection<InvoiceDto> query(){
        return  service.readAll().stream().map(model ->
                InvoiceDto.builder()
                        .invoiceId(model.getInvoiceId())
                        .guestId(model.getGuestId())
                        .price(model.getPrice())
                        .paymentMethod(model.getPaymentMethod())
                        .reserveId(model.getReserveId())
                        .build()
        ).collect(Collectors.toList());
    }
    @PostMapping(value = {"/record"})
    @ApiOperation(value = "Record")
    public  void record(
            @RequestBody
                    InvoiceRecordRequestDto request
    ){
        try {
            service.record(new Invoice(
                    request.getInvoiceId(),
                    request.getGuestId(),
                    request.getPrice(),
                    request.getPaymentMethod(),
                    request.getReserveId()));
        }catch (InvoiceAlreadyExistsException e){
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }


    @DeleteMapping(value = {"/{invoiceId}"})
    @ApiOperation(value = "Delete an Invoice")
    public void delete(@PathVariable Integer invoiceId)
    {
        try {
            service.delete(invoiceId);
        }catch (InvoiceNotFoundException e){
            throw  new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }

}