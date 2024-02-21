package com.example.cosmetics12.controller;




import com.example.cosmetics12.entity.Product;
import com.example.cosmetics12.pojo.ProductPojo;
import com.example.cosmetics12.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping("/save")
    public String saveProduct(@Valid @RequestBody @ModelAttribute ProductPojo productPojo) throws IOException {
        productService.saveProduct(productPojo);
        return "Saved successfully";
    }

    @GetMapping("/findAll")
    public List<Product> findAll() {
        return productService.findAll();
    }

    @GetMapping("/findById/{id}")
    public Optional<Product> getProductById(@PathVariable("id") Integer id) {
        return productService.getProductById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProductById(@PathVariable("id") Integer id) {
        productService.deleteProductById(id);
    }
}
