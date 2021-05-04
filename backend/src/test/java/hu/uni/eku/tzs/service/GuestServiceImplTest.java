package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.dao.GuestDao;
import hu.uni.eku.tzs.model.Guest;
import hu.uni.eku.tzs.service.exceptions.GuestAlreadyExistsException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collection;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class GuestServiceImplTest {
    private final GuestDao dao = mock(GuestDao.class);
    private GuestService service;

    @BeforeEach
    void setUp(){
        Mockito.reset(dao);
        service = new GuestServiceImpl(dao);
    }

    @Test
    void record() throws GuestAlreadyExistsException{
        Guest guest = new Guest(0, "Béla", "valaki@valami.com", "06201234567");
        service.record(guest);
        verify(dao).create(any());
    }

    @Test
    void recordExistingGuest(){
        Guest guest = new Guest(0, "Béla", "valaki@valami.com", "06201234567");
        when(dao.readAll()).thenReturn(List.of(guest));
        assertThrows(GuestAlreadyExistsException.class, () -> service.record(guest));
        verify(dao, never()).create(any());
    }

    @Test
    void readAll(){
        Collection<Guest> daoResponse = List.of(
                new Guest(0, "Béla", "valaki@valami.com", "06201234567"),
                new Guest(1, "Péter", "valaki12@gmail.com", "06309876543"),
                new Guest(2, "Aladár", "valaki24@freemail.hu", "06703124567"),
                new Guest(3, "Gergő", "valaki45@citromail.hu", "069098563214")
        );
        when(dao.readAll()).thenReturn(daoResponse);

        Collection<Guest> actual = service.readAll();

        assertEquals(daoResponse,actual);
    }
}