package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.controller.dto.RecordInvoiceRequest;
import hu.uni.eku.tzs.dao.entity.Invoice;
import hu.uni.eku.tzs.service.InvoiceService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class InvoiceController {

    private final InvoiceService invoiceService;


    @PostMapping("/invoice/record")
    @ApiOperation(value = "Record an Invoice")
    public void register(
            @RequestBody RecordInvoiceRequest request
    ){
        invoiceService.register(new RecordInvoiceRequest(
                request.getGuest_id(),
                request.getPayment_method(),
                request.getReserve_id()
        ));
    }

    @GetMapping("/invoices")
    private List<Invoice> getAllInvoices() {
        return invoiceService.getInvoice();
    }

    @DeleteMapping(value = {"/deleteInvoice{invoiceId}"})
    @ApiOperation(value = "Delete an Invoice")
    public void delete(@PathVariable Integer invoiceId)
    {
        invoiceService.delete(invoiceId);
    }


}
