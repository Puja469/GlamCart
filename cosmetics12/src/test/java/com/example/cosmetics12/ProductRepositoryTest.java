package com.example.cosmetics12;


import com.example.cosmetics12.entity.Category;
import com.example.cosmetics12.entity.Product;
import com.example.cosmetics12.repository.ProductRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;


    @Test
    @Rollback(value = false)
    @Order(1)
    public void saveProduct() {

        Category category = new Category();

        Product product = new Product();
        product.setDescription("Testing description");
        product.setProductName("Testing productname");
        product.setPrice(150);
        product.setQuantityInStock(12);
        product.setCategory(category);


        product = productRepository.save(product);

        Assertions.assertThat(product.getId()).isGreaterThan(0);

    }

    @Test
    @Order(2)
    public void findById() {



    }
}