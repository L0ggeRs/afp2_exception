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
public class RecordReservationRequest {

    @NonNull
    @ApiModelProperty(required = true, example = "1")
    private Integer guest_id;

    @NonNull
    @ApiModelProperty(required = true, example = "5")
    private Integer camp_id;

    @NonNull
    @ApiModelProperty(required = true, example = "1")
    private Integer camping_style;

    @NonNull
    @ApiModelProperty(required = true, example = "1")
    private Integer electricity;

    @NonNull
    @ApiModelProperty(required = true, example = "1500")
    private Integer price;
}
