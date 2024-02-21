package com.example.cosmetics12.service.impl;



import com.example.cosmetics12.entity.Category;
import com.example.cosmetics12.pojo.CategoryPojo;
import com.example.cosmetics12.repository.CategoryRepository;
import com.example.cosmetics12.service.CategoryService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    @Override
    public void saveCategory(CategoryPojo categoryPojo){
        Category category;
        if(categoryPojo.getId()!=null) {
            category = categoryRepository.findById(categoryPojo.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Category not found with ID: " + categoryPojo.getId()));
        }
        else{
            category = new Category();
        }
        category.setName(categoryPojo.getName());
        categoryRepository.save(category);
    }

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }
    @Override
    public void deleteById(Integer id) {
        categoryRepository.deleteById(id);
    }
    @Override
    public Optional<Category> findById(Integer id) {
        return categoryRepository.findById(id);
    }
}


