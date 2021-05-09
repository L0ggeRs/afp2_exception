package hu.uni.eku.tzs.controller.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecordInvoiceRequest {

    @NonNull
    @ApiModelProperty(required = true, example = "1")
    private Integer guest_id;

    @NonNull
    @ApiModelProperty(required = true, example = "2")
    private String payment_method;

    @NonNull
    @ApiModelProperty(required = true, example = "4")
    private Integer reserve_id;
}
