package com.example.cosmetics12.controller;



import com.example.cosmetics12.entity.Cart;
import com.example.cosmetics12.pojo.CartPojo;
import com.example.cosmetics12.service.CartService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;




import java.util.List;
import java.util.Optional;

@RequestMapping("/cart")
@RestController
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @PostMapping("/save")
    public String saveCart(@Valid @RequestBody CartPojo cartPojo){
        cartService.saveCart(cartPojo);
        return "data created successfully yoh cart-item";
    }
    @GetMapping("/getAll")
    public List<Cart> findAll(){
        return cartService.findAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Cart> findById(@PathVariable("id") Integer id){
        return cartService.findById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        cartService.deleteById(id);
    }
}
