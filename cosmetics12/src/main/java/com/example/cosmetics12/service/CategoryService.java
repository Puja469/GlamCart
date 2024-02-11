package com.example.cosmetics12.service;





import com.example.cosmetics12.entity.Category;
import com.example.cosmetics12.pojo.CategoryPojo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CategoryService {
    void saveCategory(CategoryPojo categoryPojo);

    List<Category> findAll();


    Optional<Category> findById(Integer id);

    void deleteById(Integer id);
}
