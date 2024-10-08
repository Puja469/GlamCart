package com.example.cosmetics12.repository;






import com.example.cosmetics12.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

    @Modifying
    @Query(value="delete from cart_items where user_id=?1",nativeQuery = true)
    void deleteCartByUserId(Integer id);

}


