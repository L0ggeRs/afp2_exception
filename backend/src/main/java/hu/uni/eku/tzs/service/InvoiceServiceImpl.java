package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.controller.dto.RecordInvoiceRequest;
import hu.uni.eku.tzs.dao.InvoiceRepository;
import hu.uni.eku.tzs.dao.entity.Invoice;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class InvoiceServiceImpl implements InvoiceService{

    private final InvoiceRepository invoiceRepository;


    @Override
    public void register(RecordInvoiceRequest request) {
        Invoice invoice = Invoice.createInvoice(request);
        invoiceRepository.save(invoice);
    }

    @Override
    public List<Invoice> getInvoice() {
        return invoiceRepository.findAll().stream().map(Invoice::toInvoiceRequest).collect(Collectors.toList());
    }

    @Override
    public void delete(Integer invoiceId) {
        Invoice temp = invoiceRepository.getInvoiceById(invoiceId);
        invoiceRepository.delete(temp);
    }


}
