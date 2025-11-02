package com.backend.backend.product;

import com.backend.backend.order.Order;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "products")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    private String productName;
    private String description;
    private double price;

    @ManyToMany(mappedBy = "products") // refers to Student.courses
    private Set<Order> orders = new HashSet<>();

}
