package com.example.cosmetics12.service;





import com.example.cosmetics12.entity.User;
import com.example.cosmetics12.pojo.UserPojo;

import java.util.List;
import java.util.Optional;

public interface UserService {

    void saveUser(UserPojo userPojo);

    List<User> getAllData();

    Optional<User> getById(Integer id);

    void deleteById(Integer id);
}
