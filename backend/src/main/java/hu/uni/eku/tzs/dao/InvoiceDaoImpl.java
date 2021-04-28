package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.model.Invoice;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@RequiredArgsConstructor
@Service
public class InvoiceDaoImpl implements InvoiceDao {
    private final InvoiceRepository repository;

    @Override
    public void create(Invoice invoice) {
        repository.save(InvoiceEntityModelConverter.model2entity(invoice));
    }

    @Override
    public Collection<Invoice> readAll() {
        return StreamSupport.stream(repository.findAll().spliterator(),false)
                .map(entity -> InvoiceEntityModelConverter.entity2model(entity))
                .collect(Collectors.toList());
    }


    @Override
    public void delete(Integer invoiceId) {
        hu.uni.eku.tzs.dao.entity.Invoice temp = repository.findByInvoiceId(invoiceId);
        if(temp != null)
            repository.delete(temp);
    }

    private static class InvoiceEntityModelConverter{

        private static Invoice entity2model(hu.uni.eku.tzs.dao.entity.Invoice entity){
            return new Invoice(
                    entity.getInvoiceId(),
                    entity.getGuestId(),
                    entity.getPrice(),
                    entity.getPaymentMethod(),
                    entity.getReserveId()
            );
        }

        private static hu.uni.eku.tzs.dao.entity.Invoice model2entity(Invoice model){
            return hu.uni.eku.tzs.dao.entity.Invoice.builder()
                    .invoiceId(model.getInvoiceId())
                    .guestId(model.getGuestId())
                    .price(model.getPrice())
                    .paymentMethod(model.getPaymentMethod())
                    .reserveId(model.getReserveId())
                    .build();
        }

    }
}

