package com.example.cosmetics12.pojo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticateResponse {

    private String token;

    private Integer userId;

    private boolean isAdmin;

    private String userName;
}
