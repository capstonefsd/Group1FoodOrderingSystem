package com.training.project.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.training.project.model.Cart;

@Repository
public interface CartRepository extends CrudRepository<Cart, Integer> {

}
