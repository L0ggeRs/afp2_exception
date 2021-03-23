
package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.model.Invoice;
import hu.uni.eku.tzs.model.Invoice;

import java.util.Collection;

public interface InvoiceDao {

    void create(Invoice Invoice);

    Collection<Invoice> readAll();

    void delete(Integer invoiceId);
}
