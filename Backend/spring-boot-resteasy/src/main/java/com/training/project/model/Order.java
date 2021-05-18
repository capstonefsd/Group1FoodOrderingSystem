package com.training.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Orders")
@Getter
@Setter
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "orderid")
	private int orderid;

	@Column(name = "totalquantity")
	private int totalquantity;

	@Column(name = "totalprice")
	private int totalprice;

	@OneToOne
	@JoinColumn(name = "addressid")
	private Address addressid;

	@OneToOne
	@JoinColumn(name = "customerid")
	private Customer customerid;

}