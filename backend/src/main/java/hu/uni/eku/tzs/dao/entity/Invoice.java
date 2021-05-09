package hu.uni.eku.tzs.dao.entity;

import hu.uni.eku.tzs.controller.dto.RecordInvoiceRequest;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Builder
@Entity
@Getter
@NoArgsConstructor
@Setter
public class Invoice {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private Integer guest_id;

    @Column
    private String payment_method;

    @Column
    private Integer reserve_id;


    public static Invoice createInvoice(RecordInvoiceRequest request) {
        return new Invoice(
                0,
                request.getGuest_id(),
                request.getPayment_method(),
                request.getReserve_id()
        );
    }

    public Invoice toInvoiceRequest() {
        return new Invoice(id, guest_id, payment_method, reserve_id);
    }

}
