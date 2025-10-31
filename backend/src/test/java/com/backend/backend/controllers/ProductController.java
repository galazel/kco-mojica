package com.backend.backend.controllers;

import com.backend.backend.models.Product;
import com.backend.backend.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService service;
    public ProductController(ProductService service)
    {
        this.service = service;
    }
    @GetMapping("/all-products")
    public ResponseEntity<List<Product>> getAllProducts()
    {

    }
    @PostMapping("/create-product")
    public ResponseEntity<List<Product>> addProduct(@RequestBody Product product)
    {

    }
    @DeleteMapping("/{id}")
    public ResponseStatus getAllProducts()
    {

    }
    @PutMapping("/{id}")
    public ResponseStatus getAllProducts()
    {

    }

}
