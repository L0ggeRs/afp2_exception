package hu.uni.eku.tzs.controller.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class InvoiceDto {
    private Integer invoiceId;
    private Integer guestId;
    private Integer price;
    private String paymentMethod;
    private Integer reserveId;
}