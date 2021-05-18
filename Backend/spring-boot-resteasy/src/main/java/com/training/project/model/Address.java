package com.training.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "Address")
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "addressid")
	private int addressid;

	@Column(name = "city")
	private String city;

	@Column(name = "country")
	private String country;

	@Column(name = "state")
	private String state;

	@Column(name = "street")
	private String street;

	@Column(name = "zipcode")
	private String zipcode;

	@OneToOne
	@PrimaryKeyJoinColumn
	private Order order;

	public Address() {
		super();
	}

	public Address(int addressid, String city, String country, String state, String street, String zipcode) {
		super();
		this.addressid = addressid;
		this.city = city;
		this.country = country;
		this.state = state;
		this.street = street;
		this.zipcode = zipcode;
	}

	public int getAddressid() {
		return addressid;
	}

	public void setAddressid(int addressid) {
		this.addressid = addressid;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
}