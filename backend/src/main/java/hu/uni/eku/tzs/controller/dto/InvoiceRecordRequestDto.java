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
public class InvoiceRecordRequestDto {
    private Integer invoiceId;
    private Integer guestId;
    private String paymentMethod;
    private Integer reserveId;
}