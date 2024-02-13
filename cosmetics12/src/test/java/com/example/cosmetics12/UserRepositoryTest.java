package com.example.cosmetics12;

import com.example.cosmetics12.entity.User;
import com.example.cosmetics12.repository.UserRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;
import java.util.Optional;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test

    @Order(1)
    @Rollback(value = false)


    public void saveUser() {
        User user = new User();
        user.setFirstName("Niraj");
        user.setLastName("Giri");
        user.setUserName("niraj1");
        user.setEmail("niraj@gmail.com");
        user.setPassword("niraj123");
        User savedUser = userRepository.save(user);

        // Print the ID of the saved user
        System.out.println("Saved User ID: " + savedUser.getId());
        Assertions.assertThat(savedUser.getId()).isGreaterThan(0);


    }


    @Test
    @Order(2)
    public void findById() {


        User user = userRepository.findById(1).get();
        Assertions.assertThat(user.getId()).isEqualTo(1);


    }

    @Test
    @Order(3)
    public void findAllData() {
        List<User> userList = userRepository.findAll();
        Assertions.assertThat(userList.size()).isGreaterThan(0);
    }

    @Test
    @Order(4)
    public void updateUser(){
        User user=userRepository.findById(1).get();
        user.setFirstName("Aaruph");
        user=userRepository.save(user);
        Assertions.assertThat(user.getFirstName()).isEqualTo("Aaruph");

    }

    @Test
    @Order(5)
    public void deleteById(){
        userRepository.deleteById(1);
        User user1=null;
        Optional<User> user=userRepository.findById(1);
        if(user.isPresent()){
            user1=user.get();
        }
        Assertions.assertThat(user1).isNull();
    }

}