package com.backend.backend.customer;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/add-user")
    public ResponseEntity<User> addCustomer(@Valid @RequestBody User user) {
        Optional<User> userExisted = service.findUserIfAlreadyExists(user);
        if (userExisted.isPresent())
            throw new UserExceptions.CustomerException("Customer already exists");
        return new ResponseEntity<>(service.addUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/get-all-users")
    public ResponseEntity<Optional<List<User>>> getAllUsers() {
        Optional<List<User>> getUsers = service.getAllUsers();
        if (getUsers.isPresent())
            return new ResponseEntity<>(getUsers, HttpStatus.OK);
        else
            throw new UserExceptions.CustomerException("No users available");
    }

    @DeleteMapping("/delete-user-{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {
        service.deleteUser(id);
        return new ResponseEntity<>("User successfully deleted", HttpStatus.NO_CONTENT);

    }


}
