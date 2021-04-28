package hu.uni.eku.tzs.controller.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class ReservationDto {
    private Integer reservationId;
    private Integer guestId;
    private Integer campId;
    private Integer camping_style;
    private boolean electricity;
    private Integer price;
    private LocalDate reserve_start;
    private LocalDate reserve_end;
}