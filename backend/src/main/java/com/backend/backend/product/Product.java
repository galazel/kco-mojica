package com.backend.backend.product;

import jakarta.persistence.*;
import jdk.jfr.ContentType;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
}
