package com.example.cosmetics12.controller;




import com.example.cosmetics12.entity.User;
import com.example.cosmetics12.pojo.NewPasswordPojo;
import com.example.cosmetics12.pojo.UserPojo;
import com.example.cosmetics12.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/user")
@RestController

@RequiredArgsConstructor

public class UserController {

    private final UserService userService;

    @PostMapping("/save")
    public String saveUser(@Valid @RequestBody UserPojo userPojo){
        userService.saveUser(userPojo);
        return "data created successfully";
    }

    @GetMapping("/getAll")
    public List<User> getAllData(){
        return userService.getAllData();
    }

    @GetMapping("/getById/{id}")
    public Optional<User> getDataBtId(@PathVariable("id") Integer id){
        return userService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        userService.deleteById(id);
    }

    @GetMapping("/getByEmail/{email}")
    public Optional<User> getByEmail(@PathVariable("email") String email) {
        return this.userService.getByEmail(email);
    }

    @PostMapping("/new-password")
    public String setNewPassword(@RequestBody NewPasswordPojo newPasswordPojo){
        userService.setNewPassword(newPasswordPojo);
        return "password changed";
    }
}
