package hu.uni.eku.tzs.dao.entity;

import hu.uni.eku.tzs.controller.dto.RecordGuestRequest;
import hu.uni.eku.tzs.controller.dto.RecordReservationRequest;
import lombok.*;

import javax.persistence.*;

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
    private Integer electricity;

    @Column
    private Integer price;


    public static Reservation createReservation(RecordReservationRequest request) {
        return new Reservation(
                0,
                request.getGuest_id(),
                request.getCamp_id(),
                request.getCamping_style(),
                request.getElectricity(),
                request.getPrice()
        );
    }

    public Reservation toReservationRequest() {
        return new Reservation(id, guest_id, camp_id, camping_style, electricity, price);
    }

}
