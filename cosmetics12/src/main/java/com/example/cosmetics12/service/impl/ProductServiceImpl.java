package com.example.cosmetics12.service.impl;






import com.example.cosmetics12.entity.Category;
import com.example.cosmetics12.entity.Product;
import com.example.cosmetics12.pojo.ProductPojo;
import com.example.cosmetics12.repository.CategoryRepository;
import com.example.cosmetics12.repository.ProductRepository;
import com.example.cosmetics12.service.ProductService;
import com.example.cosmetics12.util.ImageToBase64;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    private final String UPLOAD_DIRECTORY = new StringBuilder().append(System.getProperty("user.dir")).append("/cosmetic_mgmt/productImage").toString();
    ImageToBase64 imageToBase64 = new ImageToBase64();

    @Override
    public void saveProduct(ProductPojo productPojo) throws IOException {
        Product product;
        if (productPojo.getId() != null) {
            product = productRepository.findById(productPojo.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Product not found with ID: " + productPojo.getId()));
        } else {
            product = new Product();
        }

        product.setProductName(productPojo.getProductName());
        product.setPrice(productPojo.getPrice());
        product.setQuantityInStock(productPojo.getQuantityInStock());
        product.setDescription(productPojo.getDescription());

        if (productPojo.getProductImage() != null) {
            StringBuilder fileNames = new StringBuilder();
            Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, productPojo.getProductImage().getOriginalFilename());
            fileNames.append(productPojo.getProductImage().getOriginalFilename());
            Files.write(fileNameAndPath, productPojo.getProductImage().getBytes());
        }




        product.setProductImage(productPojo.getProductImage().getOriginalFilename());


        Category category = categoryRepository.findById(productPojo.getCategoryId())
                .orElseThrow(() -> new EntityNotFoundException("Category not found with ID: " + productPojo.getCategoryId()));
        product.setCategory(category);

        productRepository.save(product);
    }

    @Override
    public List<Product> findAll(){
        List<Product> products = productRepository.findAll();
        products = products.stream().map(product -> {
            product.setProductImage(imageToBase64.getImageBase64("/productImage/" + product.getProductImage()));
            return product;
        }).collect(Collectors.toList());
        return products;
    }



    @Override
    public Optional<Product> getProductById(Integer id) {
        return productRepository.findById(id);
    }

    @Override
    public void deleteProductById(Integer id) {
        productRepository.deleteById(id);
    }
}

