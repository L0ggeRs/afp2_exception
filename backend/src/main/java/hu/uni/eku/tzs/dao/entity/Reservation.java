package hu.uni.eku.tzs.dao.entity;

import hu.uni.eku.tzs.controller.dto.RecordGuestRequest;
import hu.uni.eku.tzs.controller.dto.RecordReservationRequest;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@Builder
@Entity
@Getter
@NoArgsConstructor
@Setter
public class Reservation {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private Integer guest_id;

    @Column
    private Integer camp_id;

    @Column
    private Integer camping_style;

    @Column
    private Boolean electricity;

    @Column
    private Integer price;

    @Column
    private LocalDate reserve_start;

    @Column
    private LocalDate reserve_end;


    public static Reservation createReservation(RecordReservationRequest request) {
        return new Reservation(
                0,
                request.getGuest_id(),
                request.getCamp_id(),
                request.getCamping_style(),
                request.getElectricity(),
                request.getPrice(),
                request.getReserve_start(),
                request.getReserve_end()
        );
    }

    public Reservation toReservationRequest() {
        return new Reservation(id, guest_id, camp_id, camping_style, electricity, price, reserve_start, reserve_end);
    }

}
