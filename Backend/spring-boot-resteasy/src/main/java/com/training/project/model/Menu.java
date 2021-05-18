package com.training.project.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "Menu")
public class Menu {
	@Id
	private int dishid;
	private String dishname;
	private double dishprice;
	private String hotel;
	private String img_url;
	private int qty;
}
