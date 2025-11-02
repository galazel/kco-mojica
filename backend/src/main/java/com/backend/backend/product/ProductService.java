package com.backend.backend.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repository;
    @Autowired
    public ProductService(ProductRepository repository)
    {
        this.repository = repository;
    }
    public Product addProduct(Product product)
    {
        return repository.save(product);
    }
    List<Product> getAllProducts()
    {
        return repository.findAll();
    }

}
