package com.example.cosmetics12;


import com.example.cosmetics12.entity.User;
import com.example.cosmetics12.repository.UserRepository;
import com.example.cosmetics12.service.UserService;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import lombok.extern.log4j.Log4j2;
import org.junit.Assert;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@Log4j2
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT )

public class UserStepDifinitions {

    @Autowired

    private UserService userService;

    @Autowired
    private UserRepository userRepository;


    @Given("getAll")
    public void getall() {
        List<User> allUser = userService.getAllData();
        log.info(allUser);
        Assert.assertTrue(!allUser.isEmpty());


    }



    @Given("getById")
    public void getbyid() {
        userService.getById(5);
        System.out.println("user fetch successfully");

    }

    @Given("post data")
    public void post_data() {
        //logic to post

    }



    @Given("verify")
    public void verify() {

    }
    @Then("finally")
    public void finally1() {
        //find by email

    }




}
