package com.backend.backend.customer;

import com.backend.backend.order.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    private final CustomerRepository repository;

    @Autowired
    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public Customer addCustomer(Customer customer) {
        return repository.save(customer);
    }
}
