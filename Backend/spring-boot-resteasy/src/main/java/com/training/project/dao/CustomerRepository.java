package com.training.project.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.training.project.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {

	Customer findByUsername(String username);

}
