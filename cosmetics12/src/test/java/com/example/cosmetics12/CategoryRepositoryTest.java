package com.example.cosmetics12;

import com.example.cosmetics12.entity.Category;

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

import java.util.Optional;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CategoryRepositoryTest {


    @Autowired
    private CategoryRepository categoryRepository;

    @Test
    @Rollback(value = false)
    @Order(1)
    public void saveCategory() {
        Category category = new Category();
        category.setName("Testing categoryname");


        category = categoryRepository.save(category);
        Assertions.assertThat(category.getId()).isGreaterThan(0);


    }

    @Test
    @Order(2)

    public void findById() {
        Category category= categoryRepository.findById(1).get();
        Assertions.assertThat(category.getId()).isEqualTo(1);

    }
    }


