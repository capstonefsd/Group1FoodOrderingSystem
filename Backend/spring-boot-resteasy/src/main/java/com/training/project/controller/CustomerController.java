package com.training.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.project.dto.CustomerService;
import com.training.project.model.Address;
import com.training.project.model.Customer;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CustomerController {

	@Autowired
	CustomerService service;

	@PostMapping(value = "/customers")
	public ResponseEntity<Customer> postUser(@RequestBody Customer customer) {
		try {
			Customer customer1 = service.addCustomer(customer);
			return new ResponseEntity<>(customer1, HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping("customer/checklogin/{username}/{password}")
	public ResponseEntity<Customer> getUserById(@PathVariable("username") String username,
			@PathVariable("password") String password) {

		Customer customerdata = service.customerLogin(username);

		if ((customerdata.getUsername().equals(username)) && (customerdata.getPassword().equals(password))) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = "/address")
	public ResponseEntity<Address> postAddress(@RequestBody Address address) {
		try {
			Address address1 = service.addAddress(address);
			return new ResponseEntity<>(address1, HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

}
