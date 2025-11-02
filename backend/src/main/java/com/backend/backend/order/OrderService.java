package com.backend.backend.order;

import com.backend.backend.customer.User;
import com.backend.backend.customer.UserExceptions;
import com.backend.backend.customer.UserRepository;
import com.backend.backend.product.Product;
import com.backend.backend.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;


    @Autowired
    public OrderService(UserRepository userRepository, OrderRepository orderRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;

    }

    public Order addOrder(int userId, int productId, int quantity) {
        Optional<User> user = userRepository.findById(userId);
        Optional<Product> product = productRepository.findById(productId);
        if (user.isPresent() && product.isPresent()) {
            Order order = new Order();
            order.setUser(user.get());
            order.setQuantity(quantity);
            return orderRepository.save(order);
        }else
            throw new UserExceptions.CustomerException("Product not found");
    }

    public List<Order> getOrders() {
        return orderRepository.findAll();
    }
}
