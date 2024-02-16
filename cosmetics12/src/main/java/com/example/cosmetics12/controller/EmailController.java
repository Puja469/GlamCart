//package com.example.cosmetics12.controller;
//
//import com.example.cosmetics12.pojo.EmailRequest;
//import com.example.cosmetics12.service.EmailService;
//import com.example.cosmetics12.util.ApiResponse;
//import jakarta.validation.Valid;
//import lombok.RequiredArgsConstructor;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//
//import java.util.Map;
//
//
//@Controller
//@RequestMapping("email")
//@RequiredArgsConstructor
//@Validated
//public class EmailController {
//
//    private final EmailService emailService;
//    private final ApiResponse apiResponse;
//
//    @PostMapping("/customer-confirmation")
//    public ResponseEntity<Map<String, Object>> sendEmail(@Valid @RequestBody EmailRequest emailRequest) {
//        this.emailService.sendCustomerConfirmationEmail(emailRequest);
//        return apiResponse.successResponse("Email sent successfully.", true, null, emailRequest.getSendToEmail());
//
//    }
//
//
//}