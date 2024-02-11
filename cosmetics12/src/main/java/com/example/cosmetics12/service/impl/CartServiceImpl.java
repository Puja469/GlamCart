package com.example.cosmetics12.service.impl;










import com.example.cosmetics12.entity.Cart;
import com.example.cosmetics12.entity.Product;
import com.example.cosmetics12.pojo.CartPojo;
import com.example.cosmetics12.repository.CartRepository;
import com.example.cosmetics12.repository.ProductRepository;
import com.example.cosmetics12.service.CartService;
import com.example.cosmetics12.util.ImageToBase64;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    ImageToBase64 imageToBase64 = new ImageToBase64();
    @Override
    public void saveCart(CartPojo cartPojo) {
        Cart cart=new Cart();
        if(cartPojo.getId()!=null){
            cart=cartRepository.findById(cartPojo.getId())
                    .orElseThrow(()-> new NoSuchElementException("No data found"));
        }

        cart.setQuantity(cartPojo.getQuantity());
        cart.setPrice(cartPojo.getPrice());




        Product product=productRepository.findById(cartPojo.getProductId()).get();
        cart.setProduct(product);
        cart.setProductImage(product.getProductImage());
        cartRepository.save(cart);

    }


    @Override
    public List<Cart> findAll() {
        return cartRepository.findAll().stream().map(product -> {
            product.setProductImage(imageToBase64.getImageBase64("/productImage/" + product.getProduct().getProductImage()));
            return product;
        }).collect(Collectors.toList());
    }

    @Override
    public Optional<Cart> findById(Integer id) {
        return cartRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        cartRepository.deleteById(id);
    }


}
