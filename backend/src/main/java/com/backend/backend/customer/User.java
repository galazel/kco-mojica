package com.backend.backend.customer;

import com.backend.backend.order.Order;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "customers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerId;
    @NotNull(message = "Last Name should not be empty")
    @NotBlank(message = "Last Name is required")
    private String lastName;
    @NotNull(message = "First Name should not be empty")
    @NotBlank(message = "First Name is required")
    private String firstName;
    @Size(min = 8, message = "Password should be at least 8 characters")
    @Pattern(
            regexp = "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).+",
            message = "Password must include uppercase, lowercase, number, and symbol"
    )
    private String password;
    @Column(unique = true)
    @Size(min = 11, max = 11, message = "Contact number must be 11 digits")
    private String contactNumber;
    @Column(unique = true)
    private String email;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference(value = "user_orders")
    private List<Order> orders;
}
