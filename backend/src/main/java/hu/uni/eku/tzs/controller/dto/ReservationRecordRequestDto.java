package hu.uni.eku.tzs.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReservationRecordRequestDto {
    private Integer reservationId;
    private Integer guestId;
    private Integer campId;
    private Integer camping_style;
    private boolean electricity;
    private Integer price;
    private LocalDateTime reserve_start;
    private LocalDateTime reserve_end;
}