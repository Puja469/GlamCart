package com.example.cosmetics12.service;





import com.example.cosmetics12.entity.User;
import com.example.cosmetics12.pojo.NewPasswordPojo;
import com.example.cosmetics12.pojo.UserPojo;

import java.util.List;
import java.util.Optional;

public interface UserService {

    void saveUser(UserPojo userPojo);

    List<User> getAllData();

    Optional<User> getById(Integer id);

    Optional<User> getByEmail(String email);

    String setNewPassword(NewPasswordPojo newPasswordPojo);

    void deleteById(Integer id);
}
