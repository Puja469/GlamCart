package com.example.cosmetics12.service;

import com.example.cosmetics12.pojo.EmailRequest;

public interface EmailService {
    void sendCustomerConfirmationEmail(EmailRequest emailRequest);
    void resetPassword(EmailRequest emailRequest);

}


