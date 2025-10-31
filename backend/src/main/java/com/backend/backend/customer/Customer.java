package com.backend.backend.customer;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerId;
    @NotNull(message = "Last Name should not be empty")
    @NotBlank(message = "Last Name is required")
    private String lastName;
    @NotNull(message = "First Name should not be empty")
    @NotBlank(message = "First Name is required")
    private String firstName;
    @Size(min = 8,message = "Password should be at least 8 length")
    @Pattern(regexp = "//d+//w+", message = "Password should have a small and large characters, digits, and symbols")
    private String password;
    @Size(min = 11,message = "Contact number should have a length of 11")
    @Pattern(regexp = "//d{11}", message = "A contact number should be in digit form")
    private String contactNumber;
    private String email;


}
