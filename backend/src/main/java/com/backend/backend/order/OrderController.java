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
    @PostMapping("/order")
    public ResponseEntity<Order> addOrder(@RequestBody Order order)
    {
        Order savedOrder = service.addOrder(order);
        return savedOrder != null ? new ResponseEntity<>(savedOrder,HttpStatus.CREATED) : new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }
    @GetMapping("/get-order")
    public ResponseEntity<List<Order>> getOrder()
    {
        List<Order> allOrders = service.getOrders();
        return !allOrders.isEmpty() ? new ResponseEntity<>(allOrders,HttpStatus.OK) : new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }
}
