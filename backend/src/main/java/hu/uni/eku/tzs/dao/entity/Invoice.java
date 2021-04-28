package hu.uni.eku.tzs.dao.entity;

import lombok.*;
import javax.persistence.*;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;
    @Column
    private Integer invoiceId;
    @Column
    private Integer guestId;
    @Column
    private Integer price;
    @Column
    private String paymentMethod;
    @Column
    private Integer reserveId;
}