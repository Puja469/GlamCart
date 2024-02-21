package com.example.cosmetics12.service;

import com.example.cosmetics12.entity.Order;
import com.example.cosmetics12.pojo.OrderPojo;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    void saveOrder(OrderPojo orderPojo);

    List<Order> findAll();
    Optional<Order> findById(Integer id);

    void deleteById(Integer id);
}