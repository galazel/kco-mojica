package com.backend.backend.order;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    private final OrderService service;
    @Autowired
    public OrderController(OrderService service)
    {
        this.service = service;
    }
    @PostMapping
    public ResponseEntity<Order> addOrder(@RequestParam int userId, @RequestParam int productId, int quantity)
    {
        Order savedOrder = service.addOrder(userId, productId, quantity);
        return savedOrder != null ? new ResponseEntity<>(savedOrder,HttpStatus.CREATED) : new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }
    @GetMapping("/all-orders")
    public ResponseEntity<List<Order>> getOrders()
    {
        List<Order> allOrders = service.getOrders();
        allOrders.forEach(e -> {
            System.out.println("User: "+e.getUser().getFirstName());
        });
        return !allOrders.isEmpty() ? new ResponseEntity<>(allOrders,HttpStatus.OK) : new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }
}
