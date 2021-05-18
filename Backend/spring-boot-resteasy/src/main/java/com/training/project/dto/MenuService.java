package com.training.project.dto;

import java.util.List;

import com.training.project.model.Cart;
import com.training.project.model.Menu;

public interface MenuService {

	List<Menu> Udipi(String hotel);

	List<Menu> Search(String dishname);

	Cart AddCart(Cart cart);

	public void delete(int dishid);

	public void deleteAll();

}
