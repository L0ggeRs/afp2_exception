package hu.uni.eku.tzs.service;


import hu.uni.eku.tzs.model.Invoice;
import hu.uni.eku.tzs.service.exceptions.InvoiceAlreadyExistsException;
import hu.uni.eku.tzs.service.exceptions.InvoiceNotFoundException;

import java.util.Collection;

public interface InvoiceService {

    void record(Invoice invoice)throws InvoiceAlreadyExistsException;

    void  delete(Integer invoiceId)throws InvoiceNotFoundException;

    Collection<Invoice>readAll();
}
