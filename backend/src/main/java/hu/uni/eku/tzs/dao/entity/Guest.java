package hu.uni.eku.tzs.dao.entity;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Collection;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Guest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;
    @Column
    private Integer guestId;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String phone;
}
