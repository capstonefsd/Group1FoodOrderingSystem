package com.training.project.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.project.dao.CartRepository;
import com.training.project.dao.MenuRepository;
import com.training.project.dto.MenuService;
import com.training.project.model.Cart;
import com.training.project.model.Menu;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MenuController {

	@Autowired
	MenuRepository menurepo;

	@Autowired
	MenuService menuservice;

	@Autowired
	CartRepository cartrepo;

	@GetMapping(value = "menu/hotel/{hotel}")
	public ResponseEntity<List<Menu>> findByHotel(@PathVariable("hotel") String hotel) {
		try {

			List<Menu> menu = menurepo.findByHotel(hotel);

			if (menu.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(menu, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping(value = "menu/dishname/{dishname}")
	public ResponseEntity<List<Menu>> findByDishname(@PathVariable("dishname") String dishname) {
		try {
			List<Menu> searchdish = menurepo.findByDishname(dishname);

			if (searchdish.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(searchdish, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PostMapping(value = "/cart")
	public ResponseEntity<Cart> postCart(@RequestBody Cart cart) {
		try {

			Cart cart1 = menuservice.AddCart(cart);
			return new ResponseEntity<>(cart1, HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping(value = "/cart")
	public ResponseEntity<List<Cart>> getAllItems() {
		List<Cart> items = new ArrayList<Cart>();
		try {

			cartrepo.findAll().forEach(items::add);
			if (items.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(items, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/cart/{dishid}")
	public ResponseEntity<String> delete(@PathVariable("dishid") int dishid) {
		System.out.println("delete");
		menuservice.delete(dishid);
		return new ResponseEntity<String>("Deleted successfully.!", HttpStatus.OK);
	}

	@DeleteMapping(value = "/cart")
	public ResponseEntity<String> deleteAll() {
		System.out.println("deleteAll");
		menuservice.deleteAll();
		return new ResponseEntity<String>("Deleted all entries",HttpStatus.OK);
	}

}
