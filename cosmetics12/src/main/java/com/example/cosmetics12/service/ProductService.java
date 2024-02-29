package com.example.cosmetics12.service;




import com.example.cosmetics12.entity.Product;
import com.example.cosmetics12.pojo.ProductPojo;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    void saveProduct(ProductPojo productPojo) throws IOException;

    List<Product> findAll();

    Optional<Product> getProductById(Integer id);

    Product updateProduct(Product product);

    void deleteProductById(Integer id);

    void updateProductImage(Product existingProduct, MultipartFile newProductImage)throws IOException;
}

