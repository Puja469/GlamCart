package com.example.cosmetics12.controller;




import com.example.cosmetics12.entity.Product;
import com.example.cosmetics12.pojo.ProductPojo;
import com.example.cosmetics12.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PatchMapping("/update/{id}")
    public ResponseEntity<String> patchUpdateProduct(@PathVariable("id") Integer id,
                                                     @ModelAttribute ProductPojo patchRequest) throws IOException {
        Optional<Product> existingProductOptional = productService.getProductById(id);

        if (existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();

            if (patchRequest.getProductName() != null) {
                existingProduct.setProductName(patchRequest.getProductName());
            }
            if (patchRequest.getCategoryId() != null) {
                existingProduct.setCategoryId(patchRequest.getCategoryId());
            }
            if (patchRequest.getProductImage() != null && !patchRequest.getProductImage().isEmpty()) {
                MultipartFile newProductImage = patchRequest.getProductImage();
                productService.updateProductImage(existingProduct, newProductImage);
            }
            if (patchRequest.getPrice() != 0.0) {
                existingProduct.setPrice(patchRequest.getPrice());
            }
            if (patchRequest.getQuantityInStock() != 0) {
                existingProduct.setQuantityInStock(patchRequest.getQuantityInStock());
            }
            if (patchRequest.getDescription() != null) {
                existingProduct.setDescription(patchRequest.getDescription());
            }

            productService.updateProduct(existingProduct);
            return ResponseEntity.ok("Product updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
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
