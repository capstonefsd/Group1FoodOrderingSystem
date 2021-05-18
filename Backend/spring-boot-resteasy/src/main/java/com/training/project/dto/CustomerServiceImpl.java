package com.training.project.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.project.dao.AddressRepository;
import com.training.project.dao.CustomerRepository;
import com.training.project.model.Address;
import com.training.project.model.Customer;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerRepository repository;

	@Autowired
	AddressRepository addressrepo;

	//Adding an new user
	
	@Override
	public Customer addCustomer(Customer customer) {
		Customer customer1 = repository.save(customer);
		return customer1;
	}
	
	//Fetching the user by username
	
	@Override
	public Customer customerLogin(String username) {
		Customer customer1 = repository.findByUsername(username);
		return customer1;
	}
	
	//Adding and Saving the address
	
	@Override
	public Address addAddress(Address address) {
		Address address1 = addressrepo.save(address);
		return address1;
	}

}
