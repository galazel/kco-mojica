package com.backend.backend.customer;

public class UserExceptions {
    public static class CustomerException extends RuntimeException{
        public CustomerException(String message)
        {
            super(message);
        }
    }
}
