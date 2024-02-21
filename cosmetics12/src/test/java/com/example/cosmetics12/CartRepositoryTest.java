package com.example.cosmetics12;

import com.example.cosmetics12.entity.Cart;
import com.example.cosmetics12.entity.Product;
import com.example.cosmetics12.entity.User;
import com.example.cosmetics12.repository.CartRepository;
import com.example.cosmetics12.repository.ProductRepository;
import com.example.cosmetics12.repository.UserRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.math.BigDecimal;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CartRepositoryTest {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Test
    @Rollback(value = false)
    @Order(1)
    public void saveCartItem() {
        Product product = new Product();

        product = productRepository.save(product);

        Assertions.assertThat(product.getId()).isGreaterThan(0);

        User user = new User();

        user = userRepository.save(user);

        Assertions.assertThat(user.getId()).isGreaterThan(0);

        Cart cartItem = new Cart();
        cartItem.setProduct(product);
        cartItem.setProductImage("testing_image_url");
        cartItem.setUser(user);
        cartItem.setPrice(BigDecimal.valueOf(100.00));
        cartItem.setQuantity(2);

        cartItem = cartRepository.save(cartItem);

        Assertions.assertThat(cartItem.getId()).isGreaterThan(0);
    }


}
