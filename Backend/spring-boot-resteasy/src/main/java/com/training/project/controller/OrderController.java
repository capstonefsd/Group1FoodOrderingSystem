package com.training.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.project.dto.OrderService;
import com.training.project.model.Order;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class OrderController {

	@Autowired
	OrderService service;

	@PostMapping(value = "/orders/{totalquantity,totalprice}")
	public ResponseEntity<Order> postOrder(@PathVariable("totalquantity") int totalquantity,
			@PathVariable("totalprice") int totalprice) {
		System.out.println("hello");
		try {
			Order order1 = new Order();
			order1.setTotalquantity(totalquantity);
			order1.setTotalprice(totalprice);
			// order1.setAddressid(address);
			Order order2 = service.addOrder(order1);

			return new ResponseEntity<>(order2, HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
}
