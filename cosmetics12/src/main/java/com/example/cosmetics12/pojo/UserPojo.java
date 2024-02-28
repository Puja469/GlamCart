package com.example.cosmetics12.pojo;




import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserPojo {
    private Integer id;

    @NotNull(message="full name is required")
    private String fullName;



    @NotNull
    private String userName;

    @NotNull
    private String email;

    @NotNull
    private String password;
}

