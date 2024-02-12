package com.example.cosmetics12.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Setter
@Getter
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @SequenceGenerator(name = "order_seq_gen", sequenceName = "order_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "order_seq_gen", strategy = GenerationType.SEQUENCE)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String productImage;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;


    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;





    @Column(name="delivery_Date",length = 255)
    private String deliveryDate;

    @Column(name="delivery_Time")
    private String deliveryTime;
    @Column(name="delivery_Status", nullable = false)
    private String deliveryStatus;


}
