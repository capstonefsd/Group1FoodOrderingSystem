package com.training.project.dto;

import com.training.project.model.Address;
import com.training.project.model.Customer;

public interface CustomerService {

	Customer addCustomer(Customer customer);

	Customer customerLogin(String username);

	Address addAddress(Address address);

}
