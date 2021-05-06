package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.dao.InvoiceDao;
import hu.uni.eku.tzs.model.Invoice;
import hu.uni.eku.tzs.service.exceptions.InvoiceAlreadyExistsException;
import io.swagger.models.auth.In;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collection;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;


public class InvoiceServiceImplTest {
    private final InvoiceDao dao = mock(InvoiceDao.class);
    private InvoiceService service;

    @BeforeEach
    void setUp(){
        Mockito.reset(dao);
        service = new InvoiceServiceImpl(dao);
    }

    @Test
    void record() throws InvoiceAlreadyExistsException{
        Invoice invoice = new Invoice(1, 1, 10000, "készpénz", 1);
        service.record(invoice);
        verify(dao).create(any());
    }

    @Test
    void recordExistingInvoice(){
        Invoice invoice = new Invoice(1, 1, 10000, "készpénz", 1);
        when(dao.readAll()).thenReturn(List.of(invoice));
        assertThrows(InvoiceAlreadyExistsException.class, () -> service.record(invoice));
        verify(dao, never()).create(any());
    }

    @Test
    void readAll(){
        Collection<Invoice> daoResponse = List.of(
                new Invoice(0, 0, 0, "készpénz", 0),
                new Invoice(1,1,1,"kártya",1),
                new Invoice(2,2,2,"utalás",2),
                new Invoice(3,3,3,"bitcoin",3)
        );
        when(dao.readAll()).thenReturn(daoResponse);

        Collection<Invoice> actual = service.readAll();

        assertEquals(daoResponse, actual);
    }
}