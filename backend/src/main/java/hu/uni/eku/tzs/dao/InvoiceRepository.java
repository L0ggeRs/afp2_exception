package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.dao.entity.Invoice;
import org.springframework.data.repository.CrudRepository;

public interface InvoiceRepository extends CrudRepository<Invoice, Integer>
{
    Invoice findByInvoiceId (Integer invoiceId);
}