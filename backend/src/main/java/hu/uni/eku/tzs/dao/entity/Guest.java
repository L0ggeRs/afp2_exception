package hu.uni.eku.tzs.dao.entity;

import hu.uni.eku.tzs.controller.dto.RecordGuestRequest;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@Builder
@Entity
@Getter
@NoArgsConstructor
@Setter
public class Guest {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String phone;



    public static Guest createGuest(RecordGuestRequest request) {
        return new Guest(
                0,
                request.getName(),
                request.getEmail(),
                request.getPhone()
        );
    }

    public Guest toGuestRequest() {
        return new Guest(id, name, email, phone);
    }

}
