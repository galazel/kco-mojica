package com.backend.backend.exception;

import com.backend.backend.customer.UserExceptions;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalControllerExceptionHandler{
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String,String> handleValidation(MethodArgumentNotValidException ex)
    {
        Map<String, String> errorMessages = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(errors -> errorMessages.put(errors.getField(),errors.getDefaultMessage()));
        return errorMessages;
    }
    @ResponseStatus(HttpStatus.FOUND)
    @ExceptionHandler(UserExceptions.CustomerException.class)
    public Map<String,String> handleValidation(UserExceptions.CustomerException ex)
    {
        return Map.of("Customer","Account already existed.");
    }
}
