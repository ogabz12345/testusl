package com.example.demo.management;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Users {
	@Id
	@GeneratedValue
	private Long id;
	private String firstName;
	private String lastName;
	private String address;
	private int PhoneNumber;
	private String email;
	private String password;
	private String username;
	private boolean active;
	
	
	public Users(String firstName, String lastName, String address, int phoneNumber, String email, String password,
			String username, boolean active) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.PhoneNumber = phoneNumber;
		this.email = email;
		this.password = password;
		this.username = username;
		this.active = active;
	}


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getPhoneNumber() {
		return PhoneNumber;
	}
	public void setPhoneNumber(int phoneNumber) {
		PhoneNumber = phoneNumber;
	}
	@Override
	public String toString() {
		return "Users [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", address=" + address
				+ ", PhoneNumber=" + PhoneNumber + ", email=" + email + ", password=" + password + ", username="
				+ username + ", active=" + active + "]";
	}
	public Users() {
		
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	

}
