package hu.uni.eku.tzs.dao.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;
    @Column
    private Integer reservationId;
    @Column
    private Integer guestId;
    @Column
    private Integer campId;
    @Column
    private Integer camping_style;
    @Column
    private boolean electricity;
    @Column
    private Integer price;
    @Column
    private LocalDateTime reserve_start;
    @Column
    private LocalDateTime reserve_end;
}
