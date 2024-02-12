package com.example.cosmetics12.controller;

import com.example.cosmetics12.entity.Order;
import com.example.cosmetics12.pojo.OrderPojo;
import com.example.cosmetics12.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/order")
@RestController
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PostMapping("/saveAll")
    public String saveOrderFromCart(@Valid @RequestBody List<OrderPojo> orderPojos) {
        for (OrderPojo orderPojo : orderPojos) {
            orderService.saveOrder(orderPojo);
        }
        return "data created successfully yoh order";
    }

    @PostMapping("/save")
    public String saveOrder(@Valid @RequestBody OrderPojo orderPojo) {
        orderService.saveOrder(orderPojo);
        return "data created successfully yoh order";
    }

    @GetMapping("/getAll")
    public List<Order> findAll() {
        return orderService.findAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Order> findById(@PathVariable("id") Integer id) {
        return orderService.findById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        orderService.deleteById(id);
    }
}