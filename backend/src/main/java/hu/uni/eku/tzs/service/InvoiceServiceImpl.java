package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.dao.InvoiceDao;
import hu.uni.eku.tzs.model.Invoice;
import hu.uni.eku.tzs.service.exceptions.InvoiceAlreadyExistsException;
import hu.uni.eku.tzs.service.exceptions.InvoiceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Slf4j
@RequiredArgsConstructor
@Service
class InvoiceServiceImpl implements InvoiceService {
    private final InvoiceDao dao;

    @Override
    public void record(Invoice invoice)throws InvoiceAlreadyExistsException{
        final boolean alreadyExists = dao.readAll()
                .stream()
                .anyMatch(invoiceTemp ->
                        invoiceTemp.getInvoiceId() == invoice.getInvoiceId());
        if (alreadyExists){
            throw new InvoiceAlreadyExistsException(String.format("Invoice (%s) already exists!",invoice.toString()));
        }
        dao.create(invoice);

    }

    @Override
    public  Collection<Invoice>readAll(){
        return dao.readAll();
    }


    @Override
    public  void delete(Integer invoiceId)throws  InvoiceNotFoundException{
        dao.delete(invoiceId);
    }
}