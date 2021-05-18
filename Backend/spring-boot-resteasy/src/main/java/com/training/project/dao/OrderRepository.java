package com.training.project.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.training.project.model.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {

}
