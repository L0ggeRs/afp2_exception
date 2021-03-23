package hu.uni.eku.tzs.controller.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class GuestDto {
    private Integer guestId;
    private String name;
    private String email;
    private String phone;
}