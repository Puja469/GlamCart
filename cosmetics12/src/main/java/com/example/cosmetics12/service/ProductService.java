package com.example.cosmetics12.service;




import com.example.cosmetics12.entity.Product;
import com.example.cosmetics12.pojo.ProductPojo;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    void saveProduct(ProductPojo productPojo) throws IOException;

    List<Product> findAll();

    Optional<Product> getProductById(Integer id);

    void deleteProductById(Integer id);
}

