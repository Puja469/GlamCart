package com.example.cosmetics12.repository;

import com.example.cosmetics12.entity.EmailCredentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EmailCredentialRepository extends JpaRepository<EmailCredentials,Long> {
    @Query(value = "select * from email_credentials where active='true' ORDER BY date desc limit 1", nativeQuery = true)
    EmailCredentials findOneByActive();
}
