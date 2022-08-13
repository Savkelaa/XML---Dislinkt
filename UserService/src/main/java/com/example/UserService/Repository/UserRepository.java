package com.example.UserService.Repository;

import com.example.UserService.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {

    User findByUsername(String username);
    User findByEmail(String email);
    public ArrayList<User> findAll();
}
