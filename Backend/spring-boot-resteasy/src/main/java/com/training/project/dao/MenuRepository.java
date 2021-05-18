package com.training.project.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.training.project.model.Menu;

@Repository
public interface MenuRepository extends CrudRepository<Menu, Integer> {

	List<Menu> findByHotel(String hotel);

	List<Menu> findByDishname(String dishname);
}
