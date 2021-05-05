package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.dao.ReservationDao;
import hu.uni.eku.tzs.model.Reservation;
import hu.uni.eku.tzs.service.exceptions.ReservationAlreadyExistsException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class ReservationServiceImplTest {
    private final ReservationDao dao = mock(ReservationDao.class);
    private ReservationService service;

    @BeforeEach
    void setUp(){
        Mockito.reset(dao);
        service = new ReservationServiceImpl(dao);
    }

    @Test
    void record() throws ReservationAlreadyExistsException{
        Reservation reservation = new Reservation(0,0,0,0,true,0, LocalDate.of(2000,01,01),LocalDate.of(2000,01,02));
        service.record(reservation);
        verify(dao).create(any());
    }

    @Test
    void recordExistingReservation(){
        Reservation reservation = new Reservation(0,0,0,0,true,0, LocalDate.of(2000,01,01),LocalDate.of(2000,01,02));
        when(dao.readAll()).thenReturn(List.of(reservation));
        assertThrows(ReservationAlreadyExistsException.class, () -> service.record(reservation));
        verify(dao, never()).create(any());
    }

    @Test
    void readAll(){
        Collection<Reservation> daoResponse = List.of(
                new Reservation(0,0,0,0,true,0, LocalDate.of(2000,01,01),LocalDate.of(2000,01,02)),
                new Reservation(1,1,1,1,false,1, LocalDate.of(2000,02,01),LocalDate.of(2000,02,02)),
                new Reservation(2,2,2,2,true,2, LocalDate.of(2000,03,01),LocalDate.of(2000,03,02)),
                new Reservation(3,3,3,3,false,3, LocalDate.of(2000,04,01),LocalDate.of(2000,04,02))
        );
        when(dao.readAll()).thenReturn(daoResponse);

        Collection<Reservation> actual = service.readAll();

        assertEquals(daoResponse, actual);
    }
}