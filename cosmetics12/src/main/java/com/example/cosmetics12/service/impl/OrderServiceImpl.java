package com.example.cosmetics12.service.impl;

import com.example.cosmetics12.entity.Order;
import com.example.cosmetics12.entity.Product;
import com.example.cosmetics12.entity.User;
import com.example.cosmetics12.pojo.OrderPojo;
import com.example.cosmetics12.repository.CartRepository;
import com.example.cosmetics12.repository.OrderRepository;
import com.example.cosmetics12.repository.ProductRepository;
import com.example.cosmetics12.repository.UserRepository;
import com.example.cosmetics12.service.OrderService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    @Transactional
    @Override
    public void saveOrder(OrderPojo orderPojo) {
        Order order=new Order();
        if(orderPojo.getId()!=null){
            order=orderRepository.findById(orderPojo.getId())
                    .orElseThrow(()-> new NoSuchElementException("No data found"));
        }

        order.setDeliveryDate(orderPojo.getDeliveryDate());
        order.setDeliveryTime(orderPojo.getDeliveryTime());
        order.setDeliveryStatus(orderPojo.getDeliveryStatus());
        Product product=productRepository.findById(orderPojo.getProductId()).get();
        User user= userRepository.findById(orderPojo.getUserId()).get();
        order.setProduct(product);
        order.setUser(user);


        order.setQuantity(orderPojo.getQuantity());
        order.setPrice(orderPojo.getPrice());

        orderRepository.save(order);

        cartRepository.deleteCartByUserId(orderPojo.getUserId());

    }

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }
    @Override
    public Optional<Order> findById(Integer id) {

        return orderRepository.findById(id);
    }
    @Override
    public void deleteById(Integer id) {
        orderRepository.deleteById(id);
    }


}
