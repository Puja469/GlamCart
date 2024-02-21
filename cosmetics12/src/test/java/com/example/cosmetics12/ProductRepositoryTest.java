package com.example.cosmetics12;


import com.example.cosmetics12.entity.Category;
import com.example.cosmetics12.entity.Product;
import com.example.cosmetics12.repository.CategoryRepository;
import com.example.cosmetics12.repository.ProductRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;
import java.util.Optional;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;


    @Test
    @Rollback(value = false)
    @Order(1)
    public void saveProduct() {

        Category category = new Category();
        category.setName("Testing categoryname");

        category = categoryRepository.save(category);
        Assertions.assertThat(category.getId()).isGreaterThan(0);

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

        Product product = productRepository.findById(1).get();
        Assertions.assertThat(product.getId()).isEqualTo(1);


    }

    @Test
    @Order(3)
    public void findAllData() {
        List<Product> productList = productRepository.findAll();
        Assertions.assertThat(productList.size()).isGreaterThan(0);
    }

    @Test
    @Order(4)
    public void updateProduct() {
        Product product = productRepository.findById(1).orElse(null);
        Assertions.assertThat(product).isNotNull();

        Category category = categoryRepository.findById(1).orElse(null);
        Assertions.assertThat(category).isNotNull();

        product.setDescription("Updated description");
        product.setCategory(category);

        product = productRepository.save(product);

        Assertions.assertThat(product.getDescription()).isEqualTo("Updated description");
    }

    @Test
    @Order(5)
    public void deleteById() {
        productRepository.deleteById(1);
        Optional<Product> product = productRepository.findById(1);
        Assertions.assertThat(product).isEmpty();
    }

}
