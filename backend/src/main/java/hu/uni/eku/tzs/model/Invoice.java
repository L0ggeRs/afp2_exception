package hu.uni.eku.tzs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Invoice
{
    private Integer invoiceId;
    private Integer guestId;
    private Integer price;
    private String paymentMethod;
    private Integer reserveId;
}