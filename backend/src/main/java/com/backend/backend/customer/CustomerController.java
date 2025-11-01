package com.backend.backend.customer;

import com.backend.backend.order.Order;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class CustomerController {
    private final CustomerService service;

    @Autowired
    public CustomerController(CustomerService service) {
        this.service = service;
    }

    @PostMapping("/add-customer")
    public ResponseEntity<Customer> addCustomer(@Valid @RequestBody Customer customer) {
        Customer savedCustomer = service.addCustomer(customer);
        return savedCustomer != null ? new ResponseEntity<>(savedCustomer, HttpStatus.CREATED) : new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

}
