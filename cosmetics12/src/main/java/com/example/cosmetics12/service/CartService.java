package com.example.cosmetics12.service;








import com.example.cosmetics12.entity.Cart;
import com.example.cosmetics12.pojo.CartPojo;

import java.util.List;


import java.util.Optional;

public interface CartService {

    void saveCart(CartPojo cartPojo);

    List<Cart> findAll();

    Optional<Cart> findById(Integer id);

    void deleteById(Integer id);
}

