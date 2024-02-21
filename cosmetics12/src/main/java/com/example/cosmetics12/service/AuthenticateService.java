package com.example.cosmetics12.service;


import com.example.cosmetics12.pojo.AuthenticateRequest;
import com.example.cosmetics12.pojo.AuthenticateResponse;

public interface AuthenticateService {

    AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest);
}
