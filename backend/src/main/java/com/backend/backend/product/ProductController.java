package com.backend.backend.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {
    private final ProductService service;
    @Autowired
    public ProductController(ProductService service)
    {
        this.service = service;
    }
    @PostMapping("/add-product")
    public ResponseEntity<Product> addProduct(@RequestBody Product product)
    {
        return new ResponseEntity<>(service.addProduct(product), HttpStatus.CREATED);
    }
    @GetMapping("/all-products")
    public ResponseEntity<List<Product>> getAllProducts()
    {
        return new ResponseEntity<>(service.getAllProducts(), HttpStatus.OK);
    }


}
