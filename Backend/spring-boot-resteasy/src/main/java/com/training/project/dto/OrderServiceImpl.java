package com.training.project.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.project.dao.OrderRepository;
import com.training.project.model.Order;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderrepo;
	
	//Adding the order
	
	@Override
	public Order addOrder(Order order1) {
		Order order2 = orderrepo.save(order1);
		return order2;
	}
}
