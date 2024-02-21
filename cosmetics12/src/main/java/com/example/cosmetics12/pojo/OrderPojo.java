package com.example.cosmetics12.pojo;


import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
public class OrderPojo {
    private Integer id;
    private Integer userId;
    private Integer productId;

    private BigDecimal price;
    private Integer quantity;
    private String deliveryDate;
    private String deliveryTime;
    private String deliveryStatus;




}
