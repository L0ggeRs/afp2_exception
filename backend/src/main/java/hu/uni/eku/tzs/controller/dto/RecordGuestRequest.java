package hu.uni.eku.tzs.controller.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

import javax.validation.constraints.Email;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecordGuestRequest {

    @NonNull
    @ApiModelProperty(required = true, example = "Bencsik Krisztián")
    private String name;

    @NonNull
    @Email
    @ApiModelProperty(required = true, example = "email@teszt.com")
    private String email;

    @NonNull
    @ApiModelProperty(required = true, example = "06204126787")
    private String phone;
}
