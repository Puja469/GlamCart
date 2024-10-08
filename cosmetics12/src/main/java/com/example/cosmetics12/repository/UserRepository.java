package com.example.cosmetics12.repository;


import com.example.cosmetics12.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    @Query(value = "Select * from users where email=?1",nativeQuery = true)
    Optional<User>  getUserByEmail(String email);

}