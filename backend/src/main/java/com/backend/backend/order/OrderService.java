package com.backend.backend.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderRepository repository;

    @Autowired
    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }

    public Order addOrder(Order order) {
        return repository.save(order);
    }

    public List<Order> getOrders() {
        return repository.findAll();
    }
}
