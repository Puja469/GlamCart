package com.example.cosmetics12.pojo;



import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;


@Getter
@Setter
public class CartPojo {
    private Integer id;


    private Integer userId;

    @NotNull
    private Integer productId;

    private Integer quantity;

    private BigDecimal price;

    private String productImage;















}

