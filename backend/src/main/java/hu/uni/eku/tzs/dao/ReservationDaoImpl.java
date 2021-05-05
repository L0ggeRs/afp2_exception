package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.model.Reservation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@RequiredArgsConstructor
@Service
public class ReservationDaoImpl implements ReservationDao {
    private final ReservationRepository repository;

    @Override
    public void create(Reservation reservation) {
        repository.save(ReservationEntityModelConverter.model2entity(reservation));
    }

    @Override
    public Collection<Reservation> readAll() {
        return StreamSupport.stream(repository.findAll().spliterator(),false)
                .map(entity -> ReservationEntityModelConverter.entity2model(entity))
                .collect(Collectors.toList());
    }


    @Override
    public void delete(Integer reservationId) {
        hu.uni.eku.tzs.dao.entity.Reservation temp = repository.findByReservationId(reservationId);
        if(temp != null)
            repository.delete(temp);
    }

    private static class ReservationEntityModelConverter{

        private static Reservation entity2model(hu.uni.eku.tzs.dao.entity.Reservation entity){
            return new Reservation(
                    entity.getReservationId(),
                    entity.getGuestId(),
                    entity.getCampId(),
                    entity.getCamping_style(),
                    entity.isElectricity(),
                    entity.getPrice(),
                    entity.getReserve_start(),
                    entity.getReserve_end()
            );
        }

        private static hu.uni.eku.tzs.dao.entity.Reservation model2entity(Reservation model){
            return hu.uni.eku.tzs.dao.entity.Reservation.builder()
                    .reservationId(model.getReservationId())
                    .guestId(model.getGuestId())
                    .campId(model.getCampId())
                    .camping_style(model.getCamping_style())
                    .electricity(model.isElectricity())
                    .price(model.getPrice())
                    .reserve_start(model.getReserve_start())
                    .reserve_end(model.getReserve_end())
                    .build();
        }

    }
}