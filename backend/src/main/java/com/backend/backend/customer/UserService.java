package com.backend.backend.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User addUser(User user) {
        return repository.save(user);
    }

    public Optional<User> findUserIfAlreadyExists(User user) {
        return Optional.ofNullable(repository.findByLastNameAndFirstName(user.getLastName(), user.getFirstName()));
    }

    public Optional<List<User>> getAllUsers() {
        return Optional.of(repository.findAll());
    }

    public void deleteUser(int id) {
        repository.deleteById(id);
    }
}
