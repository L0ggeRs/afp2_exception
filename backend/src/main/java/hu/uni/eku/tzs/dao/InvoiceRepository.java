package hu.uni.eku.tzs.dao;


import hu.uni.eku.tzs.dao.entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository extends JpaRepository<Invoice,Integer> {

    Invoice getInvoiceById(Integer invoiceId);
}
