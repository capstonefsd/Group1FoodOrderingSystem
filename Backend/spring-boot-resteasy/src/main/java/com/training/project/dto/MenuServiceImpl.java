package com.training.project.dto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.project.dao.CartRepository;
import com.training.project.dao.MenuRepository;
import com.training.project.model.Cart;
import com.training.project.model.Menu;

@Service
public class MenuServiceImpl implements MenuService {

	@Autowired
	MenuRepository menurepo;
	@Autowired
	CartRepository cartrepo;

	// Fetching the list of menu by using hotelname
	
	@Override
	public List<Menu> Udipi(String hotel) {
		return menurepo.findByHotel(hotel);

	}
	
	// Fetching the item using dishname
	
	@Override
	public List<Menu> Search(String dishname) {
		return menurepo.findByDishname(dishname);
	}

	@Override
	public Cart AddCart(Cart cart) {

		Cart cart1 = cartrepo.save(cart);
		return cart1;
	}

	private Cart findById(int dishid) {
		if (cartrepo.findById(dishid).isPresent()) {
			return cartrepo.findById(dishid).get();
		}
		return null;
	}
	
	// Delete an item in cart
	
	@Override
	public void delete(int dishid) {

		Cart cart2 = findById(dishid);
		cartrepo.delete(cart2);
	}

	// Deleting all itemss in cart
	
	@Override
	public void deleteAll() {
		 cartrepo.deleteAll();
	}

}
