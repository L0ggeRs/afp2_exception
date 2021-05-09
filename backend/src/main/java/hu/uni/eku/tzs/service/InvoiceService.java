package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.controller.dto.RecordInvoiceRequest;
import hu.uni.eku.tzs.dao.entity.Invoice;

import java.util.List;

public interface InvoiceService {

    void register(RecordInvoiceRequest request);

    List<Invoice> getInvoice();

    void  delete(Integer invoiceId);
}
