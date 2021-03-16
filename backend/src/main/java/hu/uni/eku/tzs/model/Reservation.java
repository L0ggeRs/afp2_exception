package hu.uni.eku.tzs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reservation
{
    private Integer reservationId;
    private Integer guestId;
    private Integer campId;
    private Integer camping_style;
    private boolean electricity;
    private Integer price;
    private LocalDateTime reserve_start;
    private LocalDateTime reserve_end;
}
